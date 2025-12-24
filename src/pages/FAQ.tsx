import { Link } from "react-router-dom";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Land Buying & Selling FAQ | LandLow"
        description="Answers to common questions about selling land, buying land, owner financing, deeds, and how LandLow works."
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-8">
            Land Buying & Selling FAQ
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            Answers to common questions about selling land, buying land, owner financing, deeds, and how LandLow works.
          </p>

          {/* Category 1: Selling Your Land */}
          <div className="mb-12">
            <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6" id="selling">
              Selling Your Land
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is there any cost or obligation to request an offer?</AccordionTrigger>
                <AccordionContent>
                  No. Getting an offer from LandLow is completely free and comes with no obligation to sell.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Who pays the closing costs?</AccordionTrigger>
                <AccordionContent>
                  In most cases, LandLow (through One World Trading LLC) covers standard closing costs. If there are unusual fees or special circumstances, we'll explain them clearly before you decide.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do I need a real estate agent?</AccordionTrigger>
                <AccordionContent>
                  No. We buy directly from landowners, so there are no listing commissions or agent fees when you sell to us.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Who will appear on the deed as buyer?</AccordionTrigger>
                <AccordionContent>
                  In most cases, the deed will list One World Trading LLC or an affiliated holding entity as the buyer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Category 2: Buying Land from LandLow */}
          <div className="mb-12">
            <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6" id="buying">
              Buying Land from LandLow
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you run credit checks?</AccordionTrigger>
                <AccordionContent>
                  For most owner-financed properties, no credit check is required. If you can make the down payment, you're typically approved.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>How do I reserve a property?</AccordionTrigger>
                <AccordionContent>
                  On the property page, click "Reserve Now with Secure Checkout" and complete the down payment via our secure GeekPay checkout page. This payment holds the property while we finalize the paperwork.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Do you provide title insurance?</AccordionTrigger>
                <AccordionContent>
                  Some properties close through a title/escrow company with title insurance options. For simpler, lower-priced deals, we may use direct deed recording. We'll explain which applies to each property so you can decide what's best.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>How long does it take to get my deed?</AccordionTrigger>
                <AccordionContent>
                  Timing varies by county, but most deeds are recorded within a few weeks after all documents are signed and payments are made.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Category 3: General & Legal */}
          <div className="mb-12">
            <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
              General & Legal
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-9">
                <AccordionTrigger>Who is LandLow legally?</AccordionTrigger>
                <AccordionContent>
                  LandLow is a brand operated by One World Trading LLC, which appears on legal documents and deeds as buyer or seller.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>Do you really donate a portion of profits?</AccordionTrigger>
                <AccordionContent>
                  Yes. We donate 5% of net profits annually to plant trees through One Tree Planted. At the end of each year, we share a simple summary of our donation and estimated trees funded.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-16 p-8 bg-muted rounded-lg text-center">
            <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're here to help. Reach out and we'll get back to you as soon as possible.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
