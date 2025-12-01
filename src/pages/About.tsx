import { CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-montserrat">
              About LandLow
            </h1>
            <p className="text-xl opacity-95">
              Making land ownership simple, affordable, and accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center font-montserrat">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              At LandLow, we believe everyone deserves a shot at owning land. Whether you're building, investing, or just want a place to breathe, we make land ownership simple, affordable, and accessible through clear pricing and easy processes.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg font-montserrat">Transparent Pricing</h3>
                    <p className="text-muted-foreground">No hidden fees, no games. What you see is what you pay.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg font-montserrat">Owner Financing</h3>
                    <p className="text-muted-foreground">Low down payments, flexible terms, no credit checks required.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg font-montserrat">Fast Process</h3>
                    <p className="text-muted-foreground">Reserve online, close quickly. We handle all the paperwork.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg font-montserrat">Environmental Commitment</h3>
                    <p className="text-muted-foreground">5% of net profits support land conservation efforts.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg font-montserrat">Expert Support</h3>
                    <p className="text-muted-foreground">Real people ready to answer your questions and guide you.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg font-montserrat">Licensed & Legal</h3>
                    <p className="text-muted-foreground">All transactions through One World Trading LLC with proper licensing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center font-montserrat">Our Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-accent">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">Simplicity</h3>
                <p className="text-muted-foreground">We cut through complexity and make land ownership straightforward and accessible.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-accent">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">Trust</h3>
                <p className="text-muted-foreground">Clear communication, honest pricing, and transparent processes build lasting relationships.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">Impact</h3>
                <p className="text-muted-foreground">Every transaction supports environmental conservation and sustainable land use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Browse our available properties or contact us with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/properties">View Properties</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
