import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About LandLow | Modern Land Platform Backed by One World Trading LLC"
        description="Learn how LandLow simplifies buying and selling land with transparent pricing, flexible closing options, and a 5% net profit reforestation pledge."
      />
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

      {/* Section 1 — Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center font-montserrat">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center">
              At LandLow, we believe everyone deserves a shot at owning land. Whether you're building, investing, or just want a place to breathe, we make land ownership simple, affordable, and accessible through clear pricing and easy processes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Our Story */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center font-montserrat">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                LandLow was created to fix a common problem: buying and selling land often feels confusing, slow, and full of hidden details. We set out to build a more modern, honest way to work with land.
              </p>
              <p>
                Today, we help landowners sell quickly without the hassle of listings or agents and we help buyers secure affordable properties with straightforward pricing and simple financing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — What Makes Us Different */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center font-montserrat">What Makes Us Different</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">Modern & Tech-Forward</h3>
                  <p className="text-muted-foreground">
                    We use modern tools, online signatures, digital payments, and clear online property pages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">Fast Response & Clear Answers</h3>
                  <p className="text-muted-foreground">
                    No waiting weeks for a reply. We get you answers and offers as quickly as possible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">Simple, Transparent Pricing</h3>
                  <p className="text-muted-foreground">
                    No surprise fees. No confusing terms. Just clear numbers from the beginning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">Tough Parcels Welcome</h3>
                  <p className="text-muted-foreground">
                    We look at properties with access challenges, back taxes, probate, or other issues that many buyers avoid.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">Owner Financing Available</h3>
                  <p className="text-muted-foreground">
                    Many of our properties include simple, no-credit-check payment plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Our Values */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center font-montserrat">Our Values</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">Trustworthiness</h3>
                  <p className="text-muted-foreground">
                    We say what we mean and do what we say.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">Simplicity</h3>
                  <p className="text-muted-foreground">
                    We strip away the jargon and make things easy to understand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">Speed</h3>
                  <p className="text-muted-foreground">
                    We respect your time and move with purpose.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">Innovation</h3>
                  <p className="text-muted-foreground">
                    We're always improving how we evaluate, present, and deliver land deals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">Helpfulness</h3>
                  <p className="text-muted-foreground">
                    We want every interaction to feel clear, respectful, and useful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Ownership & Legal Structure */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center font-montserrat">Ownership & Legal Structure</h2>
            <p className="text-lg text-muted-foreground text-center">
              LandLow is the customer-facing brand owned and operated by One World Trading LLC. In many cases, One World Trading LLC or an affiliated holding entity will appear as the buyer or seller of record on your deed and closing documents. Your experience, communication, and support are always handled by the LandLow team.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — Environmental Impact */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center font-montserrat">Environmental Impact</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Land matters not just for ownership, but for the planet. That's why LandLow donates 5% of our net profits each year to plant trees through One Tree Planted.
              </p>
              <p>
                Each dollar funds new trees in areas that need reforestation, helping restore ecosystems, support wildlife habitats, and improve long-term land health.
              </p>
              <p>
                At the end of each year, we publish a simple summary on our website so you can see the impact your land deals helped create including our total donation and the estimated number of trees funded.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/environmental-impact">Learn More About Our Impact</Link>
              </Button>
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
            <Button asChild size="lg" variant="outline" className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
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
