export interface Property {
  id: number;
  title: string;
  location: string;
  county: string;
  state: string;
  acres: number;
  cashPrice: number;
  monthlyPayment: number;
  downPayment: number;
  termLength: string;
  featured: boolean;
  apn: string;
  zoning: string;
  roadAccess: string;
  utilities: string;
  taxes: string;
  description: string[];
  images: string[];
  allowedUses: {
    name: string;
    allowed: boolean;
  }[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "10 Acres in Apache County",
    location: "Apache County, Arizona",
    county: "Apache County",
    state: "AZ",
    acres: 10,
    cashPrice: 12500,
    monthlyPayment: 299,
    downPayment: 2500,
    termLength: "36 months",
    featured: true,
    apn: "101-234-567",
    zoning: "Rural Residential",
    roadAccess: "County-maintained dirt road",
    utilities: "Power nearby, great solar potential",
    taxes: "$120",
    description: [
      "This beautiful 10-acre parcel in Apache County offers stunning desert views and endless possibilities. Perfect for those seeking a peaceful retreat or investment opportunity.",
      "The land features relatively flat terrain with native desert vegetation. You'll enjoy wide-open skies, mountain views, and the freedom to create your own off-grid paradise.",
      "The nearest town is about 15 miles away, offering essential services while maintaining that remote, peaceful feel. This is truly a blank canvas for your land ownership dreams.",
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
  },
  {
    id: 2,
    title: "5 Acres in Elko County",
    location: "Elko County, Nevada",
    county: "Elko County",
    state: "NV",
    acres: 5,
    cashPrice: 8900,
    monthlyPayment: 219,
    downPayment: 1900,
    termLength: "36 months",
    featured: false,
    apn: "202-345-678",
    zoning: "Rural Residential",
    roadAccess: "County-maintained dirt road",
    utilities: "Power nearby, great solar potential",
    taxes: "$85",
    description: [
      "This beautiful 5-acre parcel in Elko County offers stunning desert views and endless possibilities. Perfect for those seeking a peaceful retreat or investment opportunity.",
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
  },
  {
    id: 3,
    title: "20 Acres in Costilla County",
    location: "Costilla County, Colorado",
    county: "Costilla County",
    state: "CO",
    acres: 20,
    cashPrice: 24500,
    monthlyPayment: 549,
    downPayment: 4900,
    termLength: "36 months",
    featured: true,
    apn: "303-456-789",
    zoning: "Rural Residential",
    roadAccess: "County-maintained dirt road",
    utilities: "Power nearby, great solar potential",
    taxes: "$180",
    description: [
      "This beautiful 20-acre parcel in Costilla County offers stunning mountain views and endless possibilities. Perfect for those seeking a peaceful retreat or investment opportunity.",
      "The land features rolling terrain with native vegetation. You'll enjoy wide-open skies, mountain views, and the freedom to create your own off-grid paradise.",
      "The nearest town is about 25 miles away, offering essential services while maintaining that remote, peaceful feel. This is truly a blank canvas for your land ownership dreams.",
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
  },
  {
    id: 4,
    title: "2.5 Acres in Mohave County",
    location: "Mohave County, Arizona",
    county: "Mohave County",
    state: "AZ",
    acres: 2.5,
    cashPrice: 5900,
    monthlyPayment: 149,
    downPayment: 1200,
    termLength: "36 months",
    featured: false,
    apn: "404-567-890",
    zoning: "Rural Residential",
    roadAccess: "County-maintained dirt road",
    utilities: "Power nearby, great solar potential",
    taxes: "$55",
    description: [
      "This beautiful 2.5-acre parcel in Mohave County offers stunning desert views and endless possibilities. Perfect for those seeking a peaceful retreat or investment opportunity.",
      "The land features relatively flat terrain with native desert vegetation. You'll enjoy wide-open skies, mountain views, and the freedom to create your own off-grid paradise.",
      "The nearest town is about 18 miles away, offering essential services while maintaining that remote, peaceful feel. This is truly a blank canvas for your land ownership dreams.",
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
  },
  {
    id: 5,
    title: "40 Acres in Humboldt County",
    location: "Humboldt County, Nevada",
    county: "Humboldt County",
    state: "NV",
    acres: 40,
    cashPrice: 39900,
    monthlyPayment: 849,
    downPayment: 7900,
    termLength: "36 months",
    featured: true,
    apn: "505-678-901",
    zoning: "Rural Residential",
    roadAccess: "County-maintained dirt road",
    utilities: "Power nearby, great solar potential",
    taxes: "$320",
    description: [
      "This beautiful 40-acre parcel in Humboldt County offers stunning desert views and endless possibilities. Perfect for those seeking a peaceful retreat or investment opportunity.",
      "The land features rolling terrain with native desert vegetation. You'll enjoy wide-open skies, mountain views, and the freedom to create your own off-grid paradise.",
      "The nearest town is about 30 miles away, offering essential services while maintaining that remote, peaceful feel. This is truly a blank canvas for your land ownership dreams.",
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
  },
  {
    id: 6,
    title: "1 Acre in Luna County",
    location: "Luna County, New Mexico",
    county: "Luna County",
    state: "NM",
    acres: 1,
    cashPrice: 2900,
    monthlyPayment: 99,
    downPayment: 600,
    termLength: "36 months",
    featured: false,
    apn: "606-789-012",
    zoning: "Rural Residential",
    roadAccess: "County-maintained dirt road",
    utilities: "Power nearby, great solar potential",
    taxes: "$35",
    description: [
      "This beautiful 1-acre parcel in Luna County offers stunning desert views and endless possibilities. Perfect for those seeking a peaceful retreat or investment opportunity.",
      "The land features relatively flat terrain with native desert vegetation. You'll enjoy wide-open skies, mountain views, and the freedom to create your own off-grid paradise.",
      "The nearest town is about 12 miles away, offering essential services while maintaining that remote, peaceful feel. This is truly a blank canvas for your land ownership dreams.",
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
  },
];

