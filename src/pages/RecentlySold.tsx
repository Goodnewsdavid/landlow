import { Link } from "react-router-dom";
import { Calendar, DollarSign, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

interface SoldProperty {
  id: number;
  title: string;
  location: string;
  acres: number;
  soldPrice: number;
  soldDate: string;
  image: string;
}

const recentlySoldProperties: SoldProperty[] = [
  {
    id: 1,
    title: "15 Acres in Apache County",
    location: "Apache County, Arizona",
    acres: 15,
    soldPrice: 18900,
    soldDate: "November 2024",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "8 Acres in Elko County",
    location: "Elko County, Nevada",
    acres: 8,
    soldPrice: 12900,
    soldDate: "October 2024",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "25 Acres in Costilla County",
    location: "Costilla County, Colorado",
    acres: 25,
    soldPrice: 32900,
    soldDate: "October 2024",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "3.5 Acres in Mohave County",
    location: "Mohave County, Arizona",
    acres: 3.5,
    soldPrice: 7900,
    soldDate: "September 2024",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "12 Acres in Yavapai County",
    location: "Yavapai County, Arizona",
    acres: 12,
    soldPrice: 15900,
    soldDate: "September 2024",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "18 Acres in Nye County",
    location: "Nye County, Nevada",
    acres: 18,
    soldPrice: 22900,
    soldDate: "August 2024",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
  },
];

const RecentlySold = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Recently Sold Land Deals | LandLow"
        description="See examples of land parcels recently sold through LandLow."
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              Recently Sold Properties
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some examples of properties other buyers have secured through LandLow. Join our community of land owners today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {recentlySoldProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow border-2">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    Sold
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold font-montserrat mb-2">
                    {property.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Sold: {property.soldDate}</span>
                    </div>
                    <div className="flex items-center text-accent font-semibold">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>${property.soldPrice.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <Badge variant="secondary" className="text-sm">
                      {property.acres} {property.acres === 1 ? 'Acre' : 'Acres'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-muted/50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold font-montserrat mb-4">
                Ready to Own Your Own Land?
              </h2>
              <p className="text-muted-foreground mb-6">
                Browse our current inventory of available properties and find your perfect piece of land.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/properties">Browse Available Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecentlySold;
