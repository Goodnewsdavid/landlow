import { Link } from "react-router-dom";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

const Reserve = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Reserve a Property | Secure Online Checkout | LandLow"
        description="Reserve your land property with secure online checkout. Pay your down payment and lock in your property today."
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Reserve a Property
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            Ready to secure your land? Our secure checkout process makes it easy to reserve your property with a down payment.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
              How to Reserve
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                When you find a property you love, simply click the "Reserve Now with Secure Checkout" button on the property page. This will take you to our secure GeekPay checkout system where you can:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Review the property details and pricing</li>
                <li>Pay your down payment securely online</li>
                <li>Lock in the property immediately</li>
              </ul>
              <p>
                Once your payment is confirmed, we'll contact you within 24 hours to begin the paperwork process and answer any questions you have.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
              What Happens Next?
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">1. Confirmation</h3>
                <p className="text-muted-foreground">
                  You'll receive an email confirmation of your reservation and down payment.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">2. Agreement</h3>
                <p className="text-muted-foreground">
                  We'll send you a simple purchase agreement to review and sign electronically.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">3. Monthly Payments</h3>
                <p className="text-muted-foreground">
                  If you chose owner financing, your monthly payments begin based on the terms in your agreement.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">4. Ownership</h3>
                <p className="text-muted-foreground">
                  Once all payments are complete, the deed is transferred to you and the land is yours.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-muted rounded-lg p-8 text-center">
            <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
              Ready to Find Your Land?
            </h3>
            <p className="text-muted-foreground mb-6">
              Browse our available properties and reserve yours today.
            </p>
            <Link 
              to="/properties" 
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reserve;
