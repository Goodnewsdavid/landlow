import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { MapPin, Ruler, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { properties } from "@/data/properties";
import { useToast } from "@/hooks/use-toast";

// Initialize Stripe with publishable key from environment variables
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "");

interface CheckoutFormProps {
  property: typeof properties[0];
  onSuccess: () => void;
}

const CheckoutForm = ({ property, onSuccess }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setLoading(false);
      return;
    }

    try {
      // Create PaymentIntent on backend
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/create-payment-intent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: property.downPayment,
          propertyId: property.id,
          customerInfo: formData,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      // Confirm payment with Stripe
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
          },
        },
      });

      if (error) {
        toast({
          title: "Payment Failed",
          description: error.message,
          variant: "destructive",
        });
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        toast({
          title: "Payment Successful!",
          description: "Your reservation has been confirmed. We'll contact you within 24 hours.",
        });
        onSuccess();
      }
    } catch (error) {
      toast({
        title: "Payment Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <Label>Card Details *</Label>
        <div className="mt-2 p-4 border rounded-lg bg-background">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
        size="lg"
      >
        {loading ? "Processing..." : `Pay $${property.downPayment.toLocaleString()} Down Payment`}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        By completing this payment, you agree to reserve this property. We'll contact you within 24 hours to finalize the paperwork.
      </p>
    </form>
  );
};

const Checkout = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  if (!property) {
    return <Navigate to="/properties" replace />;
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <SEO 
          title="Payment Successful | Reservation Confirmed | LandLow"
          description="Your property reservation has been confirmed. We'll contact you soon."
        />
        <Header />
        <main className="container mx-auto px-4 py-16 flex-1">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4 font-montserrat">Payment Successful!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your reservation for <strong>{property.title}</strong> has been confirmed.
              </p>
              <p className="text-muted-foreground mb-8">
                We'll contact you within 24 hours to finalize the paperwork and answer any questions you have.
              </p>
            </div>
            <div className="space-y-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/properties">Browse More Properties</Link>
              </Button>
              <div>
                <Link to="/contact" className="text-accent hover:underline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`Checkout | Reserve ${property.title} | LandLow`}
        description={`Reserve ${property.title} with secure checkout. Pay your down payment of $${property.downPayment.toLocaleString()} today.`}
      />
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-1">
        <Link to={`/property/${property.id}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-6">
          <ArrowLeft size={16} />
          Back to Property Details
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Property Summary */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">Property Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4 font-montserrat">{property.title}</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={18} />
                      <span>{property.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Ruler size={18} />
                      <span>{property.acres} acres</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4 font-montserrat">Pricing Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cash Price:</span>
                      <span className="font-semibold">${property.cashPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Down Payment:</span>
                      <span className="font-semibold text-accent">${property.downPayment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly Payment:</span>
                      <span className="font-semibold">${property.monthlyPayment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Term:</span>
                      <span className="font-semibold">{property.termLength}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Payment Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-montserrat">Complete Your Reservation</CardTitle>
              </CardHeader>
              <CardContent>
                <Elements stripe={stripePromise}>
                  <CheckoutForm property={property} onSuccess={() => setPaymentSuccess(true)} />
                </Elements>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;

