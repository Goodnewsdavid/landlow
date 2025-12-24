import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

const OwnerFinancing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Owner Financing | No Credit Check Land Financing | LandLow"
        description="Own land without a bank. Simple owner financing with no credit checks, low down payments, and flexible terms."
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Owner Financing
          </h1>
          
          <p className="text-lg text-muted-foreground mb-16">
            Own land without the bank. LandLow offers simple, no-credit-check payment plans on many properties.
          </p>

          {/* What is Owner Financing */}
          <section className="mb-16">
            <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-6">
              What is Owner Financing?
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Owner financing means you buy directly from us with a payment plan — no bank required. You make a down payment, then monthly payments until the land is paid off. Once you complete all payments, the deed transfers to you.
            </p>
            <p className="text-lg text-muted-foreground">
              It's that simple. No credit checks, no bank approvals, no long applications.
            </p>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-8">
              Why Choose Owner Financing?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">No Credit Check</h3>
                  <p className="text-muted-foreground">If you can make the down payment, you're typically approved.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">No Bank Required</h3>
                  <p className="text-muted-foreground">Skip the bank entirely — you finance directly with us.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Simple Terms</h3>
                  <p className="text-muted-foreground">Clear monthly payments, no confusing interest calculations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Fast Process</h3>
                  <p className="text-muted-foreground">Reserve your property online and start owning land today.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Build Equity</h3>
                  <p className="text-muted-foreground">Every payment gets you closer to owning your land outright.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Affordable Entry</h3>
                  <p className="text-muted-foreground">Get started with a low down payment and manageable monthly payments.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-8">
              How It Works
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  1. Choose Your Property
                </h3>
                <p className="text-muted-foreground">
                  Browse our available properties and find land that fits your budget and goals.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  2. Review Pricing Options
                </h3>
                <p className="text-muted-foreground">
                  Each property shows both cash price and owner financing terms, including down payment and monthly payment amounts.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  3. Reserve with Down Payment
                </h3>
                <p className="text-muted-foreground">
                  Click "Reserve Now with Secure Checkout" and pay your down payment through our secure GeekPay system.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  4. Sign Your Agreement
                </h3>
                <p className="text-muted-foreground">
                  We send you a simple purchase agreement to review and sign electronically.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  5. Make Monthly Payments
                </h3>
                <p className="text-muted-foreground">
                  Your monthly payments continue until the property is paid in full.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  6. Receive Your Deed
                </h3>
                <p className="text-muted-foreground">
                  Once you complete all payments, we transfer the deed to you and you own the land outright.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-muted rounded-lg p-12 text-center">
            <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
              Ready to Own Land?
            </h3>
            <p className="text-muted-foreground mb-6">
              Browse our owner-financed properties and start building your future today.
            </p>
            <Link 
              to="/properties" 
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Properties with Owner Financing
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OwnerFinancing;
 