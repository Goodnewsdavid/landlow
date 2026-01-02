import { Link, useParams, Navigate } from "react-router-dom";
import { Check, FileText, MapPin, Ruler, X, Home, Building, Car, Zap, Droplet, Wrench, DollarSign } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { properties } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();

  const property = properties?.find((p) => p.id === Number(id));

  if (!property) {
    return <Navigate to="/properties" replace />;
  }

  const formattedProperty = {
    ...property,
    name: property.title || "",
    acres: (property.acres || 0).toString(),
    cashPrice: `$${(property.cashPrice || 0).toLocaleString()}`,
    downPayment: `$${(property.downPayment || 0).toLocaleString()}`,
    monthlyPayment: `$${(property.monthlyPayment || 0).toLocaleString()}`,
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
            {formattedProperty.images && formattedProperty.images[0] ? (
              <img 
                src={formattedProperty.images[0]} 
                alt={formattedProperty.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50" />
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((idx) => (
              <div key={idx} className="aspect-video bg-muted rounded-lg overflow-hidden">
                {formattedProperty.images && formattedProperty.images[idx] ? (
                  <img 
                    src={formattedProperty.images[idx]} 
                    alt={`${formattedProperty.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50" />
                )}
              </div>
            ))}
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
              {formattedProperty.subdivision && (
                <p className="text-lg text-muted-foreground mb-4">{formattedProperty.subdivision}</p>
              )}
              <div className="space-y-4 text-muted-foreground">
                {formattedProperty.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Key Facts */}
            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                Key Facts
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {formattedProperty.apn && (
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">APN</div>
                      <div className="text-muted-foreground">{formattedProperty.apn}</div>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">County</div>
                    <div className="text-muted-foreground">{formattedProperty.county}, {formattedProperty.state}</div>
                  </div>
                </div>
                {formattedProperty.subdivision && (
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Subdivision</div>
                      <div className="text-muted-foreground">{formattedProperty.subdivision}</div>
                    </div>
                  </div>
                )}
                {formattedProperty.address && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Address</div>
                      <div className="text-muted-foreground">{formattedProperty.address}</div>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <Ruler className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Acreage</div>
                    <div className="text-muted-foreground">{formattedProperty.acres} acres</div>
                  </div>
                </div>
                {formattedProperty.terrain && (
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Terrain</div>
                      <div className="text-muted-foreground">{formattedProperty.terrain}</div>
                    </div>
                  </div>
                )}
                {formattedProperty.roadAccess && (
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Road Access</div>
                      <div className="text-muted-foreground">{formattedProperty.roadAccess}</div>
                    </div>
                  </div>
                )}
                {formattedProperty.annualTaxes && (
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Annual Taxes</div>
                      <div className="text-muted-foreground">{formattedProperty.annualTaxes}</div>
                    </div>
                  </div>
                )}
                {formattedProperty.hoa && (
                  <div className="flex items-start gap-3">
                    <Home className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">HOA/POA</div>
                      <div className="text-muted-foreground">{formattedProperty.hoa}</div>
                    </div>
                  </div>
                )}
                {formattedProperty.zoning && (
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Zoning</div>
                      <div className="text-muted-foreground">{formattedProperty.zoning}</div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Location & Nearby */}
            {(formattedProperty.closestCity || formattedProperty.closestTown || formattedProperty.closestGasStation || formattedProperty.closestHighway) && (
              <section>
                <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                  Location & Nearby
                </h2>
                <div className="space-y-3">
                  {formattedProperty.closestCity && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Closest major city</div>
                        <div className="text-muted-foreground">{formattedProperty.closestCity}</div>
                      </div>
                    </div>
                  )}
                  {formattedProperty.closestTown && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Closest small town</div>
                        <div className="text-muted-foreground">{formattedProperty.closestTown}</div>
                      </div>
                    </div>
                  )}
                  {formattedProperty.closestGasStation && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Closest gas station</div>
                        <div className="text-muted-foreground">{formattedProperty.closestGasStation}</div>
                      </div>
                    </div>
                  )}
                  {formattedProperty.closestHighway && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Closest highway</div>
                        <div className="text-muted-foreground">{formattedProperty.closestHighway}</div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Zoning & Use */}
            {formattedProperty.zoning && (
              <section>
                <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                  Zoning & Use
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-foreground mb-2">Zoning / Property use code</div>
                    <div className="text-muted-foreground">{formattedProperty.zoning}</div>
                  </div>
                  {formattedProperty.timeLimitToBuild && (
                    <div>
                      <div className="font-semibold text-foreground mb-2">Time limit to build</div>
                      <div className="text-muted-foreground">{formattedProperty.timeLimitToBuild}</div>
                    </div>
                  )}
                  {formattedProperty.allowedUses && formattedProperty.allowedUses.length > 0 && (
                    <div>
                      <div className="font-semibold text-foreground mb-2">What can be built</div>
                      <div className="grid sm:grid-cols-2 gap-3">
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
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Camping & RV */}
            {(formattedProperty.campingAllowed !== undefined || formattedProperty.rvAllowed !== undefined || formattedProperty.mobileHomesAllowed !== undefined) && (
              <section>
                <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                  Camping, RV & Mobile Homes
                </h2>
                <div className="space-y-3">
                  {formattedProperty.campingAllowed !== undefined && (
                    <div className="flex items-center gap-3">
                      {formattedProperty.campingAllowed ? (
                        <Check className="w-5 h-5 text-accent" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <span className={formattedProperty.campingAllowed ? "text-foreground" : "text-muted-foreground"}>
                          Camping allowed
                        </span>
                        {formattedProperty.campingDays && (
                          <span className="text-muted-foreground ml-2">({formattedProperty.campingDays})</span>
                        )}
                      </div>
                    </div>
                  )}
                  {formattedProperty.rvAllowed !== undefined && (
                    <div className="flex items-center gap-3">
                      {formattedProperty.rvAllowed ? (
                        <Check className="w-5 h-5 text-accent" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <span className={formattedProperty.rvAllowed ? "text-foreground" : "text-muted-foreground"}>
                          RV allowed
                        </span>
                        {formattedProperty.rvDays && (
                          <span className="text-muted-foreground ml-2">({formattedProperty.rvDays})</span>
                        )}
                      </div>
                    </div>
                  )}
                  {formattedProperty.mobileHomesAllowed !== undefined && (
                    <div className="flex items-center gap-3">
                      {formattedProperty.mobileHomesAllowed ? (
                        <Check className="w-5 h-5 text-accent" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <span className={formattedProperty.mobileHomesAllowed ? "text-foreground" : "text-muted-foreground"}>
                          Mobile homes allowed
                        </span>
                        {formattedProperty.mobileHomeNote && (
                          <div className="text-sm text-muted-foreground mt-1">{formattedProperty.mobileHomeNote}</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Utilities */}
            {(formattedProperty.electric || formattedProperty.water || formattedProperty.sewer || formattedProperty.gas || formattedProperty.utilities) && (
              <section>
                <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                  Utilities
                </h2>
                <div className="space-y-3">
                  {formattedProperty.electric && (
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Electric</div>
                        <div className="text-muted-foreground">{formattedProperty.electric}</div>
                      </div>
                    </div>
                  )}
                  {formattedProperty.water && (
                    <div className="flex items-start gap-3">
                      <Droplet className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Water</div>
                        <div className="text-muted-foreground">{formattedProperty.water}</div>
                      </div>
                    </div>
                  )}
                  {formattedProperty.sewer && (
                    <div className="flex items-start gap-3">
                      <Wrench className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Sewer</div>
                        <div className="text-muted-foreground">{formattedProperty.sewer}</div>
                      </div>
                    </div>
                  )}
                  {formattedProperty.gas && (
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Gas</div>
                        <div className="text-muted-foreground">{formattedProperty.gas}</div>
                      </div>
                    </div>
                  )}
                  {formattedProperty.waste && (
                    <div className="flex items-start gap-3">
                      <Wrench className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Waste</div>
                        <div className="text-muted-foreground">{formattedProperty.waste}</div>
                      </div>
                    </div>
                  )}
                  {formattedProperty.utilities && !formattedProperty.electric && !formattedProperty.water && !formattedProperty.sewer && !formattedProperty.gas && (
                    <div className="text-muted-foreground">{formattedProperty.utilities}</div>
                  )}
                </div>
              </section>
            )}

            {/* Parcel Details (for properties with multiple parcels) */}
            {formattedProperty.parcelDetails && (
              <section>
                <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                  Parcel Details
                </h2>
                <div className="space-y-6">
                  {formattedProperty.parcelDetails.parcelA && (
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-3">Parcel A — APN {formattedProperty.parcelDetails.parcelA.apn}</h3>
                      <div className="space-y-2 text-sm">
                        {formattedProperty.parcelDetails.parcelA.streetReference && (
                          <div>
                            <span className="font-semibold text-foreground">Street reference: </span>
                            <span className="text-muted-foreground">{formattedProperty.parcelDetails.parcelA.streetReference}</span>
                          </div>
                        )}
                        {formattedProperty.parcelDetails.parcelA.legalDescription && (
                          <div>
                            <span className="font-semibold text-foreground">Legal description: </span>
                            <span className="text-muted-foreground">{formattedProperty.parcelDetails.parcelA.legalDescription}</span>
                          </div>
                        )}
                        {formattedProperty.parcelDetails.parcelA.trs && (
                          <div>
                            <span className="font-semibold text-foreground">TRS: </span>
                            <span className="text-muted-foreground">{formattedProperty.parcelDetails.parcelA.trs}</span>
                          </div>
                        )}
                        {formattedProperty.parcelDetails.parcelA.gpsCenter && (
                          <div>
                            <span className="font-semibold text-foreground">GPS Center: </span>
                            <span className="text-muted-foreground">{formattedProperty.parcelDetails.parcelA.gpsCenter}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {formattedProperty.parcelDetails.parcelB && (
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-3">Parcel B — APN {formattedProperty.parcelDetails.parcelB.apn}</h3>
                      <div className="space-y-2 text-sm">
                        {formattedProperty.parcelDetails.parcelB.streetReference && (
                          <div>
                            <span className="font-semibold text-foreground">Street reference: </span>
                            <span className="text-muted-foreground">{formattedProperty.parcelDetails.parcelB.streetReference}</span>
                          </div>
                        )}
                        {formattedProperty.parcelDetails.parcelB.legalDescription && (
                          <div>
                            <span className="font-semibold text-foreground">Legal description: </span>
                            <span className="text-muted-foreground">{formattedProperty.parcelDetails.parcelB.legalDescription}</span>
                          </div>
                        )}
                        {formattedProperty.parcelDetails.parcelB.trs && (
                          <div>
                            <span className="font-semibold text-foreground">TRS: </span>
                            <span className="text-muted-foreground">{formattedProperty.parcelDetails.parcelB.trs}</span>
                          </div>
                        )}
                        {formattedProperty.parcelDetails.parcelB.gpsCenter && (
                          <div>
                            <span className="font-semibold text-foreground">GPS Center: </span>
                            <span className="text-muted-foreground">{formattedProperty.parcelDetails.parcelB.gpsCenter}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Parcel Identifiers (for single parcel properties) */}
            {!formattedProperty.parcelDetails && (formattedProperty.lot || formattedProperty.legalDescription || formattedProperty.trs) && (
              <section>
                <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                  Parcel Identifiers
                </h2>
                <div className="space-y-3">
                  {formattedProperty.lot && (
                    <div>
                      <div className="font-semibold text-foreground">Lot</div>
                      <div className="text-muted-foreground">{formattedProperty.lot}</div>
                    </div>
                  )}
                  {formattedProperty.legalDescription && (
                    <div>
                      <div className="font-semibold text-foreground">Legal description</div>
                      <div className="text-muted-foreground">{formattedProperty.legalDescription}</div>
                    </div>
                  )}
                  {formattedProperty.trs && (
                    <div>
                      <div className="font-semibold text-foreground">TRS</div>
                      <div className="text-muted-foreground">{formattedProperty.trs}</div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* GPS Coordinates */}
            {formattedProperty.gpsCenter && (
              <section>
                <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                  GPS Coordinates
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-foreground">Center point</div>
                    <div className="text-muted-foreground">{formattedProperty.gpsCenter}</div>
                  </div>
                  {formattedProperty.gpsCorners && (
                    <div>
                      <div className="font-semibold text-foreground mb-2">Corners</div>
                      <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        {formattedProperty.gpsCorners.nw && (
                          <div>NW: {formattedProperty.gpsCorners.nw}</div>
                        )}
                        {formattedProperty.gpsCorners.ne && (
                          <div>NE: {formattedProperty.gpsCorners.ne}</div>
                        )}
                        {formattedProperty.gpsCorners.se && (
                          <div>SE: {formattedProperty.gpsCorners.se}</div>
                        )}
                        {formattedProperty.gpsCorners.sw && (
                          <div>SW: {formattedProperty.gpsCorners.sw}</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Nearby Highlights */}
            {formattedProperty.nearbyHighlights && formattedProperty.nearbyHighlights.length > 0 && (
              <section>
                <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                  Nearby Area Highlights
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {formattedProperty.nearbyHighlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* How to Reserve */}
            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                How to Reserve
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You can reserve securely online through GeekPay (Stripe-powered checkout). After reservation, we'll send the purchase documents and next steps.
                </p>
              </div>
            </section>

            {/* Request the Full Info Packet */}
            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                Request the Full Info Packet
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Message us and we'll send:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Driving directions</li>
                  <li>Full due diligence info</li>
                </ul>
                <div className="mt-4">
                  <Button asChild variant="outline" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link to="/contact">Contact Us for Full Info Packet</Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Map Section */}
            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                Location Map
              </h2>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                {formattedProperty.gpsCenter ? (
                  <a
                    href={`https://www.google.com/maps?q=${formattedProperty.gpsCenter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img 
                      src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/${formattedProperty.gpsCenter.split(',')[1]},${formattedProperty.gpsCenter.split(',')[0]},12,0/800x400?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`}
                      alt={`Map showing location of ${formattedProperty.name}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://staticmap.openstreetmap.de/staticmap.php?center=${encodeURIComponent(formattedProperty.county + ',' + formattedProperty.state)}&zoom=10&size=800x400&maptype=mapnik`;
                      }}
                    />
                  </a>
                ) : (
                  <img 
                    src={`https://staticmap.openstreetmap.de/staticmap.php?center=${encodeURIComponent(formattedProperty.county + ',' + formattedProperty.state)}&zoom=10&size=800x400&maptype=mapnik`}
                    alt={`Map showing location of ${formattedProperty.name} in ${formattedProperty.county}, ${formattedProperty.state}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop";
                    }}
                  />
                )}
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
                    <div className="text-sm text-white">Cash Price</div>
                    <div className="text-3xl font-bold text-white">{formattedProperty.cashPrice}</div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="text-sm font-semibold text-white mb-2">Owner Financing Available</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white">Down Payment:</span>
                        <span className="font-semibold text-white">{formattedProperty.downPayment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white">Monthly:</span>
                        <span className="font-semibold text-white">{formattedProperty.monthlyPayment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white">Term:</span>
                        <span className="font-semibold text-white">{formattedProperty.termLength}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-white">
                Choose a discounted cash price or simple owner financing with no credit checks and no bank approvals. If you can make the down payment, you're approved.
              </p>

              <div className="space-y-3">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                  <Link to={`/checkout/${formattedProperty.id}`}>Reserve Now with Secure Checkout</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Ask a Question About This Property</Link>
                </Button>
              </div>

              <p className="text-xs text-white">
                When you click "Reserve Now", you'll be taken to our secure checkout page where you can pay the down payment and lock in this property. Once the payment is confirmed, we'll contact you to finalize the paperwork and next steps.
              </p>

              <div className="border-t border-border pt-4">
                <p className="text-xs text-white">
                  <strong className="text-foreground">Legal Note:</strong> You are purchasing from One World Trading LLC, the legal entity behind LandLow. Closing may be completed through a title/escrow company or via direct deed recording, depending on the property and your preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
