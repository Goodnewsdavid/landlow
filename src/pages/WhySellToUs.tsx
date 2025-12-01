import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WhySellToUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Why Sell to Us
          </h1>
          
          <p className="text-lg text-muted-foreground mb-16">
            We make selling land simple, transparent, and stress-free. Here's what makes LandLow different.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Fast, No-Pressure Cash Offers</AccordionTrigger>
              <AccordionContent>
                We give you real numbers fast — and the decision is entirely up to you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>No Commissions or Hidden Fees</AccordionTrigger>
              <AccordionContent>
                We don't charge agent commissions. We typically cover closing costs and many standard fees.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>We Handle Difficult Situations</AccordionTrigger>
              <AccordionContent>
                Back taxes, title issues, inherited property, weird access, or HOA headaches — we deal with these every day.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Simple Digital Paperwork</AccordionTrigger>
              <AccordionContent>
                Sign from your phone or computer with clear, easy-to-read documents.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Flexible Closing Options</AccordionTrigger>
              <AccordionContent>
                Use a title company or, when appropriate, a direct deed transfer. We'll explain your options clearly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Nationwide Experience</AccordionTrigger>
              <AccordionContent>
                We work with landowners in many states and different county systems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Clear Communication</AccordionTrigger>
              <AccordionContent>
                You'll always know what's happening and what comes next.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
              Ready to See What Your Land Is Worth?
            </h3>
            <Link 
              to="/sell" 
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get My Cash Offer
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhySellToUs;
