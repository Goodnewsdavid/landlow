import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { MapPin, DollarSign, FileText, CheckCircle, ArrowRight } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-montserrat">
              Own Land. Build Your Future.
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-95">
              At LandLow, we believe everyone deserves a shot at owning land. Whether you’re
              selling, investing, or planning for the future, we make land ownership simple, affordable,
              and accessible through clear pricing and easy processes.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <Link to="/properties">View Properties</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
                <Link to="/sell">Sell Your Land</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-montserrat">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Land ownership made simple in three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">1. Find Your Land</h3>
                <p className="text-muted-foreground">
                  Browse our curated selection of affordable properties across the country. Filter by location, size, and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">2. Choose Your Terms</h3>
                <p className="text-muted-foreground">
                  Pay cash for instant ownership, or use our easy owner financing with flexible monthly payments—no credit check required.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">3. Close & Own</h3>
                <p className="text-muted-foreground">
                  We handle the paperwork. You get the deed. Start building your dream on your own piece of earth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose LandLow */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat">
                Why Choose LandLow?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're not just selling land—we're opening doors to opportunity and helping you build the future you deserve.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg font-montserrat">Clear Pricing, No Games</h3>
                    <p className="text-muted-foreground">What you see is what you pay. No hidden fees, no surprises.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg font-montserrat">Owner Financing Available</h3>
                    <p className="text-muted-foreground">Low down payment, flexible terms, no credit check. Land ownership for everyone.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg font-montserrat">Fast & Simple Process</h3>
                    <p className="text-muted-foreground">Reserve online, close quickly. We handle all the paperwork and logistics.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg font-montserrat">Good for the Planet</h3>
                    <p className="text-muted-foreground">5% of our net profits go to environmental conservation efforts.</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop"
                alt="Beautiful land property with scenic views"
                className="aspect-[4/3] w-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat">
            Ready to Own Your Piece of Land?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Browse available properties or get a fast cash offer for land you want to sell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
              <Link to="/properties">View Properties</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 text-lg px-8">
              <Link to="/sell">Sell Your Land</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
