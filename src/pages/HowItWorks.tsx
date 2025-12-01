import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            How LandLow Works
          </h1>
          
          <p className="text-lg text-muted-foreground mb-16">
            We keep our process simple and transparent, whether you're selling land or buying your next property. Here's what to expect step by step.
          </p>

          {/* Section 1: If You're Selling Land */}
          <section className="mb-20">
            <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-8">
              If You're Selling Land
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              How Selling to LandLow Works
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  1. Tell Us About Your Land
                </h3>
                <p className="text-muted-foreground">
                  Send us your parcel info using our online form. If you received an offer letter, you can include your reference code.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  2. We Review Your Property
                </h3>
                <p className="text-muted-foreground">
                  We research county records, zoning, access, comps, and any issues that may affect your property.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  3. Receive Your Offer
                </h3>
                <p className="text-muted-foreground">
                  We send a fast, fair, no-pressure cash offer. We'll explain how we arrived at the number and answer questions.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  4. Accept & Choose How to Close
                </h3>
                <p className="text-muted-foreground">
                  If you accept, you choose between a title/escrow closing or a direct deed transfer where appropriate. We'll guide you through the best option for your situation.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  5. Sign & Get Paid
                </h3>
                <p className="text-muted-foreground">
                  You sign a simple agreement digitally. We cover standard closing costs, and you get paid by wire or check once closing is complete.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link 
                to="/sell" 
                className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get a Cash Offer
              </Link>
            </div>
          </section>

          {/* Section 2: If You're Buying Land */}
          <section className="mb-20">
            <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-8">
              If You're Buying Land
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              How Buying from LandLow Works
            </p>

            <div className="space-y-8">
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

            <div className="mt-10">
              <Link 
                to="/properties" 
                className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Browse Properties
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
