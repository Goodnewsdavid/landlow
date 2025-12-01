import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Ruler, FileText, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const PropertyDetail = () => {
  const { id } = useParams();

  // This is a template - in production, you'd fetch property data based on the ID
  const property = {
    id: id || "1",
    name: "2.27 Acres – Elko County, NV",
    acres: "2.27",
    county: "Elko County",
    state: "NV",
    apn: "123-456-789",
    zoning: "Rural Residential",
    roadAccess: "County-maintained dirt road",
    utilities: "Power nearby, great solar potential",
    taxes: "$45",
    cashPrice: "$5,999",
    downPayment: "$599",
    monthlyPayment: "$150",
    termLength: "36 months",
    description: [
      "This beautiful 2.27-acre parcel offers stunning desert views and endless possibilities. Located in Elko County, Nevada, this property is perfect for those seeking a peaceful retreat or investment opportunity.",
      "The land features relatively flat terrain with native desert vegetation. You'll enjoy wide-open skies, mountain views, and the freedom to create your own off-grid paradise.",
      "The nearest town is about 20 miles away, offering essential services while maintaining that remote, peaceful feel. This is truly a blank canvas for your land ownership dreams.",
    ],
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
    ],
    allowedUses: [
      { name: "Camping / Recreation", allowed: true },
      { name: "RV / Trailers", allowed: true },
      { name: "ATVs & Off-Road", allowed: true },
      { name: "Tiny Home / Cabin", allowed: true },
      { name: "Solar / Off-Grid", allowed: true },
      { name: "Full-time RV", allowed: false },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link to="/properties" className="hover:text-accent">Properties</Link> / {property.name}
        </div>

        {/* Main Image Gallery */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img 
              src={property.images[0]} 
              alt={property.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src={property.images[1]} 
                alt={`${property.name} view 2`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src={property.images[2]} 
                alt={`${property.name} view 3`}
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
                {property.name}
              </h1>
              <div className="space-y-4 text-muted-foreground">
                {property.description.map((paragraph, index) => (
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
                    <div className="text-muted-foreground">{property.acres} acres</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-muted-foreground">{property.county}, {property.state}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">APN</div>
                    <div className="text-muted-foreground">{property.apn}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Zoning</div>
                    <div className="text-muted-foreground">{property.zoning}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Road Access</div>
                    <div className="text-muted-foreground">{property.roadAccess}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Utilities</div>
                    <div className="text-muted-foreground">{property.utilities}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Annual Taxes</div>
                    <div className="text-muted-foreground">{property.taxes}/year</div>
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
                {property.allowedUses.map((use, index) => (
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
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Interactive map will be embedded here</p>
              </div>
            </section>
          </div>

          {/* Right Column - Pricing Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-muted rounded-lg p-6 space-y-6">
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                  Pricing & Terms
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Cash Price</div>
                    <div className="text-3xl font-bold text-foreground">{property.cashPrice}</div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-sm font-semibold text-foreground mb-2">Owner Financing Available</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Down Payment:</span>
                        <span className="font-semibold">{property.downPayment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly:</span>
                        <span className="font-semibold">{property.monthlyPayment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Term:</span>
                        <span className="font-semibold">{property.termLength}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Choose a discounted cash price or simple owner financing with no credit checks and no bank approvals. If you can make the down payment, you're approved.
              </p>

              <div className="space-y-3">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Reserve Now with Secure Checkout
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Ask a Question About This Property</Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                When you click "Reserve Now", you'll be taken to our secure checkout page where you can pay the down payment and lock in this property. Once the payment is confirmed, we'll contact you to finalize the paperwork and next steps.
              </p>

              <div className="border-t pt-4">
                <p className="text-xs text-muted-foreground">
                  <strong>Legal Note:</strong> You are purchasing from One World Trading LLC, the legal entity behind LandLow. Closing may be completed through a title/escrow company or via direct deed recording, depending on the property and your preferences.
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
