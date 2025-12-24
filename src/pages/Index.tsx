import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { SEO } from "../components/SEO";


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="LandLow | Simple, Honest Land Deals Nationwide"
        description="Buy or sell land with LandLow. Clear pricing, fast offers, owner financing, and 5% of net profits donated annually to plant trees."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-montserrat">
              Simple, Honest Land Deals — Nationwide
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-95">
              At LandLow, we believe everyone deserves a shot at owning land. Whether you're selling, investing, or planning for the future, we make land ownership simple, affordable, and accessible through clear pricing and easy processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <Link to="/sell">Sell Your Land</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
                <Link to="/properties">View Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Trust Bar */}
      <section className="bg-background border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Secure Closing Options</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Fast Responses</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Simple Digital Paperwork</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Nationwide Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>5% of Net Profits Donated to Plant Trees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-8">
              LandLow is a modern land platform designed to bring clarity, fairness, and simplicity to buying and selling rural land nationwide. Whether you're looking to sell quickly or secure affordable property for your future, we make land transactions easy.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/how-it-works">Learn How LandLow Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-montserrat">Sell Your Land</h3>
                <p className="text-muted-foreground mb-6">
                  Turn unwanted or unused land into cash quickly and easily. We handle the details — you get a simple, no-pressure offer.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                  <Link to="/sell">Get a Cash Offer</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-montserrat">Buy Land</h3>
                <p className="text-muted-foreground mb-6">
                  Browse affordable rural properties with simple pricing, owner financing, and secure online reservation options.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                  <Link to="/properties">Browse Properties</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mini How It Works Strip */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent font-montserrat">1</span>
                </div>
                <h4 className="font-semibold mb-2 font-montserrat">Choose to Sell or Buy</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent font-montserrat">2</span>
                </div>
                <h4 className="font-semibold mb-2 font-montserrat">Sign a Simple Digital Agreement</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent font-montserrat">3</span>
                </div>
                <h4 className="font-semibold mb-2 font-montserrat">Close Securely and Get Results</h4>
              </div>
            </div>
            <div className="text-center">
              <Link to="/how-it-works" className="text-accent hover:underline font-medium inline-flex items-center gap-2">
                See the Full Step-by-Step Process <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Charity Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat">
              Why People Trust LandLow
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We keep land simple, clear, and honest. No confusing fees, no pressure, and no games. You'll always see real numbers, real timelines, and a real person behind each transaction.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We also believe land should give back. That's why LandLow donates 5% of our net profits each year to plant trees through One Tree Planted, helping restore forests and support healthier land for the future.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/environmental-impact">Our Approach & Impact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Optional "Recently Sold" Preview */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-montserrat">Recent LandLow Deals</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our first sold properties will be featured here soon.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
