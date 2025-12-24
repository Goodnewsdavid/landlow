import { Link, useParams, Navigate } from "react-router-dom";
import { Check, FileText, MapPin, Ruler, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { properties } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();

  // Find the property by ID
  const property = properties.find((p) => p.id === Number(id));

  // If property not found, redirect to properties page
  if (!property) {
    return <Navigate to="/properties" replace />;
  }

  // Format prices for display
  const formattedProperty = {
    ...property,
    name: property.title,
    acres: property.acres.toString(),
    cashPrice: `$${property.cashPrice.toLocaleString()}`,
    downPayment: `$${property.downPayment.toLocaleString()}`,
    monthlyPayment: `$${property.monthlyPayment.toLocaleString()}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${formattedProperty.name} | Land for Sale | LandLow`}
        description={`${formattedProperty.acres} acres in ${formattedProperty.county}, ${formattedProperty.state}. Cash price: ${formattedProperty.cashPrice} or owner financing available.`}
      />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link to="/properties" className="hover:text-accent">Properties</Link> / {formattedProperty.name}
        </div>

        {/* Main Image Gallery */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img 
              src={formattedProperty.images[0]} 
              alt={formattedProperty.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src={formattedProperty.images[1]} 
                alt={`${formattedProperty.name} view 2`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src={formattedProperty.images[2]} 
                alt={`${formattedProperty.name} view 3`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Property Description */}
            <section>
              <h1 className="text-4xl font-montserrat font-bold text-foreground mb-6">
                {formattedProperty.name}
              </h1>
              <div className="space-y-4 text-muted-foreground">
                {formattedProperty.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Quick Facts */}
            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                Quick Facts
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Ruler className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Acreage</div>
                    <div className="text-muted-foreground">{formattedProperty.acres} acres</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-muted-foreground">{formattedProperty.county}, {formattedProperty.state}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">APN</div>
                    <div className="text-muted-foreground">{formattedProperty.apn}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Zoning</div>
                    <div className="text-muted-foreground">{formattedProperty.zoning}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Road Access</div>
                    <div className="text-muted-foreground">{formattedProperty.roadAccess}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Utilities</div>
                    <div className="text-muted-foreground">{formattedProperty.utilities}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Annual Taxes</div>
                    <div className="text-muted-foreground">{formattedProperty.taxes}/year</div>
                  </div>
                </div>
              </div>
            </section>

            {/* What You Can Do Here */}
            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                What You Can Do Here
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {formattedProperty.allowedUses.map((use, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {use.allowed ? (
                      <Check className="w-5 h-5 text-accent" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground" />
                    )}
                    <span className={use.allowed ? "text-foreground" : "text-muted-foreground"}>
                      {use.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Map Section */}
            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                Location Map
              </h2>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={`https://staticmap.openstreetmap.de/staticmap.php?center=${encodeURIComponent(formattedProperty.county + ',' + formattedProperty.state)}&zoom=10&size=800x400&maptype=mapnik`}
                  alt={`Map showing location of ${formattedProperty.name} in ${formattedProperty.county}, ${formattedProperty.state}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a generic map/landscape image if the map service fails
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop`;
                  }}
                />
              </div>
            </section>
          </div>

          {/* Right Column - Pricing Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-muted rounded-lg p-6 space-y-6">
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
                  Pricing & Terms
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-white/80">Cash Price</div>
                    <div className="text-3xl font-bold text-white">{formattedProperty.cashPrice}</div>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="text-sm font-semibold text-white mb-2">Owner Financing Available</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/80">Down Payment:</span>
                        <span className="font-semibold text-white">{formattedProperty.downPayment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Monthly:</span>
                        <span className="font-semibold text-white">{formattedProperty.monthlyPayment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Term:</span>
                        <span className="font-semibold text-white">{formattedProperty.termLength}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-white/90">
                Choose a discounted cash price or simple owner financing with no credit checks and no bank approvals. If you can make the down payment, you're approved.
              </p>

              <div className="space-y-3">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to={`/checkout/${formattedProperty.id}`}>Reserve Now with Secure Checkout</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white/10" asChild>
                  <Link to="/contact">Ask a Question About This Property</Link>
                </Button>
              </div>

              <p className="text-xs text-white/80">
                When you click "Reserve Now", you'll be taken to our secure checkout page where you can pay the down payment and lock in this property. Once the payment is confirmed, we'll contact you to finalize the paperwork and next steps.
              </p>

              <div className="border-t border-white/20 pt-4">
                <p className="text-xs text-white/80">
                  <strong className="text-white">Legal Note:</strong> You are purchasing from One World Trading LLC, the legal entity behind LandLow. Closing may be completed through a title/escrow company or via direct deed recording, depending on the property and your preferences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        <section className="mt-20">
          <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-8">
            You Might Also Like
          </h2>
          <div className="text-center text-muted-foreground">
            Related properties will appear here
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
