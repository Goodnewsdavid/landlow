import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { properties } from "@/data/properties";

const Properties = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Land for Sale | Affordable Rural Properties with Owner Financing | LandLow"
        description="Browse affordable rural land for sale with clear pricing and simple owner financing. Reserve properties online with secure checkout."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-montserrat">
              Available Properties
            </h1>
            <p className="text-xl opacity-95">
              Affordable land with clear pricing and flexible financing options
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 relative">
                  {property.featured && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Size:</span>
                      <span className="font-semibold">{property.acres} Acres</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Cash Price:</span>
                      <span className="font-semibold">${property.cashPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm border-t pt-2">
                      <span className="text-muted-foreground">Financing:</span>
                      <span className="font-semibold text-accent">${property.monthlyPayment}/mo</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Down payment:</span>
                      <span>${property.downPayment.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link to={`/property/${property.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get notified when new properties matching your criteria become available.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/get-notified">Get Notified</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
