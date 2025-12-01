import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Mock property data
const properties = [
  {
    id: 1,
    title: "10 Acres in Apache County",
    location: "Apache County, Arizona",
    acres: 10,
    cashPrice: 12500,
    monthlyPayment: 299,
    downPayment: 2500,
    featured: true,
  },
  {
    id: 2,
    title: "5 Acres in Elko County",
    location: "Elko County, Nevada",
    acres: 5,
    cashPrice: 8900,
    monthlyPayment: 219,
    downPayment: 1900,
    featured: false,
  },
  {
    id: 3,
    title: "20 Acres in Costilla County",
    location: "Costilla County, Colorado",
    acres: 20,
    cashPrice: 24500,
    monthlyPayment: 549,
    downPayment: 4900,
    featured: true,
  },
  {
    id: 4,
    title: "2.5 Acres in Mohave County",
    location: "Mohave County, Arizona",
    acres: 2.5,
    cashPrice: 5900,
    monthlyPayment: 149,
    downPayment: 1200,
    featured: false,
  },
  {
    id: 5,
    title: "40 Acres in Humboldt County",
    location: "Humboldt County, Nevada",
    acres: 40,
    cashPrice: 39900,
    monthlyPayment: 849,
    downPayment: 7900,
    featured: true,
  },
  {
    id: 6,
    title: "1 Acre in Luna County",
    location: "Luna County, New Mexico",
    acres: 1,
    cashPrice: 2900,
    monthlyPayment: 99,
    downPayment: 600,
    featured: false,
  },
];

const Properties = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
