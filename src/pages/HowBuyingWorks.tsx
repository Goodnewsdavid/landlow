import { Link } from "react-router-dom";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

const HowBuyingWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="How Buying Works | Simple Land Buying Process | LandLow"
        description="Learn how to buy land from LandLow with owner financing. Browse properties, reserve online, and own land without a bank."
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            How Buying Works
          </h1>
          
          <p className="text-lg text-muted-foreground mb-16">
            Buying land from LandLow is straightforward and transparent. Here's the complete process.
          </p>

          <div className="space-y-8 mb-16">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                1. Browse Properties
              </h3>
              <p className="text-muted-foreground">
                Explore our available properties page to find land that fits your goals and budget.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                2. Review the Details
              </h3>
              <p className="text-muted-foreground">
                Each listing includes photos, location, taxes, zoning summary, and pricing options. If you need more info, just reach out.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                3. Choose Cash or Financing
              </h3>
              <p className="text-muted-foreground">
                You can select a discounted cash price or a simple owner-financing plan — no credit check required.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                4. Reserve Your Property (GeekPay)
              </h3>
              <p className="text-muted-foreground">
                When you're ready, click "Reserve Now with Secure Checkout" on the property page. This takes you to our secure GeekPay checkout page, where you pay the down payment to lock in the land.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                5. Sign the Agreement
              </h3>
              <p className="text-muted-foreground">
                We send your purchase documents electronically. You can review and sign from your phone or computer.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                6. Closing & Deed Recording
              </h3>
              <p className="text-muted-foreground">
                Depending on the property, we either close through a title/escrow company or file a direct deed recording with the county. Once recorded, the county mails your deed, or we provide digital copies plus mailed originals where applicable.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/properties" 
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Browse Available Properties
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowBuyingWorks;
