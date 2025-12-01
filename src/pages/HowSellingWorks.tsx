import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const HowSellingWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            How Selling Works
          </h1>
          
          <p className="text-lg text-muted-foreground mb-16">
            Selling your land to LandLow is simple, transparent, and fast. Here's the complete process from start to finish.
          </p>

          <div className="space-y-8 mb-16">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                1. Tell Us About Your Land
              </h3>
              <p className="text-muted-foreground">
                Send us your parcel details or enter the reference code from our offer letter. We'll confirm ownership, location, and basic property info.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                2. We Review the Property
              </h3>
              <p className="text-muted-foreground">
                We research zoning, access, comparable sales, taxes, and any issues that might affect value.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                3. Review Your Offer
              </h3>
              <p className="text-muted-foreground">
                We send a fast, fair, no-pressure cash offer. You'll see exactly what you'll receive — no hidden fees or surprise costs.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                4. Close & Get Paid
              </h3>
              <p className="text-muted-foreground">
                You choose how we close:
              </p>
              <ul className="mt-2 ml-6 space-y-1 text-muted-foreground">
                <li>• Title/Escrow company (recommended for most deals), or</li>
                <li>• Direct deed recording / self-close where appropriate and legally allowed.</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                We cover standard closing costs, and you choose to receive funds by wire or check.
              </p>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-6 mb-16">
            <p className="text-sm text-muted-foreground">
              <strong>Legal note:</strong> In most cases, the buyer on your deed will appear as One World Trading LLC or an affiliated holding entity that owns LandLow.
            </p>
          </div>

          <div className="text-center">
            <Link 
              to="/sell" 
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Your Cash Offer
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowSellingWorks;
