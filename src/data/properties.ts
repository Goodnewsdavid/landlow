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
  // Additional detailed fields
  subdivision?: string;
  address?: string;
  terrain?: string;
  annualTaxes?: string;
  backTaxes?: string;
  taxLiens?: string;
  hoa?: string;
  deedRestrictions?: string;
  closestCity?: string;
  closestTown?: string;
  closestGasStation?: string;
  closestHighway?: string;
  campingAllowed?: boolean;
  campingDays?: string;
  rvAllowed?: boolean;
  rvDays?: string;
  mobileHomesAllowed?: boolean;
  mobileHomeNote?: string;
  electric?: string;
  water?: string;
  sewer?: string;
  gas?: string;
  lot?: string;
  legalDescription?: string;
  trs?: string;
  gpsCenter?: string;
  gpsCorners?: {
    nw?: string;
    ne?: string;
    se?: string;
    sw?: string;
  };
  nearbyHighlights?: string[];
  timeLimitToBuild?: string;
  parcelDetails?: {
    parcelA?: {
      apn?: string;
      streetReference?: string;
      legalDescription?: string;
      trs?: string;
      gpsCenter?: string;
      gpsCorners?: {
        nw?: string;
        ne?: string;
        se?: string;
        sw?: string;
      };
    };
    parcelB?: {
      apn?: string;
      streetReference?: string;
      legalDescription?: string;
      trs?: string;
      gpsCenter?: string;
      gpsCorners?: {
        nw?: string;
        ne?: string;
        se?: string;
        sw?: string;
      };
    };
  };
  waste?: string;
  elevation?: string;
  dimensions?: string;
  buildable?: boolean;
  minimumBuildSize?: string;
  maximumBuildingHeight?: string;
  setbacks?: {
    front?: string;
    sides?: string;
    rear?: string;
  };
  restrictiveCovenants?: string;
  floodZone?: string;
  trash?: string;
  nearbyAttractions?: string[];
  rvWhileBuilding?: boolean;
  notes?: string[];
  assessorUseCode?: string;
  lots?: string;
  vegetation?: string;
  internetCable?: string;
  temporaryRvOccupancy?: string;
  borders?: string;
  countyUseCode?: string;
  shape?: string;
  mapLink?: string;
  billboardDisclosure?: string;
  dueDiligencePacketInfo?: string[];
  accessWarning?: string;
  naturalFeatures?: string;
  whyStandsOut?: string[];
  mineralRights?: string;
  views?: string;
  easements?: string;
  improvements?: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "2.27 Acres in Elko County, Nevada",
    location: "Elko (Ryndon), Nevada",
    county: "Elko County",
    state: "NV",
    acres: 2.27,
    cashPrice: 7500,
    monthlyPayment: 230,
    downPayment: 750,
    termLength: "60 months",
    featured: true,
    apn: "030-010-002",
    zoning: "Agriculture Residential (AR)",
    roadAccess: "Public road • dirt surface • county-maintained",
    utilities: "Electric: Power in the area (buyer to arrange service). Water: Well needed. Sewer: Septic needed. Gas: Propane.",
    taxes: "$33.89",
    annualTaxes: "$33.89",
    backTaxes: "None",
    taxLiens: "None",
    hoa: "None",
    deedRestrictions: "None",
    subdivision: "Meadow Valley Ranchos 7",
    address: "8th Street Ave, Elko, NV 89801",
    terrain: "Desert",
    closestCity: "Elko, NV (12.5 miles; ~25 minutes)",
    closestTown: "Ryndon, NV (2.0 miles; ~5 minutes)",
    closestGasStation: "Ryndon Country Store (2.1 miles; ~6 minutes)",
    closestHighway: "I-80 (Dwight D. Eisenhower Hwy)",
    campingAllowed: true,
    campingDays: "up to 28 days",
    rvAllowed: true,
    rvDays: "up to 28 days",
    mobileHomesAllowed: true,
    mobileHomeNote: "mobile home use requires standard dwelling utilities/fixtures to be available (electricity, gas, water, etc.)",
    electric: "Power in the area (buyer to arrange service)",
    water: "Well needed",
    sewer: "Septic needed",
    gas: "Propane",
    timeLimitToBuild: "180 days after the permit is issued",
    lot: "Number 5",
    legalDescription: "MEADOW VALLEY RANCHOS 1, BLOCK 10, LOT 2",
    trs: "Section 35, Township 36N, Range 56E",
    gpsCenter: "40.961, -115.6285",
    gpsCorners: {
      nw: "40.9614, -115.6291",
      ne: "40.9614, -115.6279",
      se: "40.9605, -115.6279",
      sw: "40.9605, -115.6291"
    },
    description: [
      "Meadow Valley Ranchos 7 • Year-round access • Low taxes • No HOA",
      "This 2.27-acre parcel in Meadow Valley Ranchos 7 offers open high-desert space with wide views and simple, low-carry ownership. A practical option for future build plans, weekend use, or a long-term hold.",
      "Buyers should always confirm intended use directly with Elko County Planning & Zoning before purchase."
    ],
    images: [
      "/assets/properties/property-1-1.jpg",
      "/assets/properties/property-1-2.jpg",
      "/assets/properties/property-1-3.jpg",
    ],
    allowedUses: [
      { name: "Camping / Recreation", allowed: true },
      { name: "RV / Trailers", allowed: true },
      { name: "Mobile Homes", allowed: true },
      { name: "Single-family dwellings (confirm with county for your exact plan)", allowed: true },
    ],
  },
  {
    id: 2,
    title: "2.28 Acres in Elko County, Nevada",
    location: "Elko, Nevada",
    county: "Elko County",
    state: "NV",
    acres: 2.28,
    cashPrice: 15000,
    monthlyPayment: 425,
    downPayment: 750,
    termLength: "60 months",
    featured: true,
    apn: "064-014-003 & 064-014-014",
    zoning: "Agriculture Residential (AR)",
    roadAccess: "Public road • dirt • county-maintained",
    utilities: "Water: Would need to drill a well. Sewer: Septic installation required. Electric: Contact Caribou Construction or Wells Rural Electric Co for service options in the area. Gas: Propane (Suburban Propane or Western States Propane). Waste: Elko Sanitation or Elko Landfill.",
    taxes: "$52.08",
    annualTaxes: "$26.04 each (about $52.08 total)",
    backTaxes: "No (both parcels)",
    taxLiens: "No (both parcels)",
    hoa: "None",
    subdivision: "Meadow Valley Ranchos Unit 9",
    terrain: "Desert",
    closestCity: "Elko, NV 89801 (6.3 miles; ~14 minutes)",
    closestTown: "Spring Creek, NV 89801 (18 miles; ~26 minutes)",
    closestGasStation: "Shell – Elko (5.1 miles; ~10 minutes)",
    closestHighway: "Dwight D. Eisenhower Hwy / I-80",
    campingAllowed: true,
    campingDays: "up to 28 days",
    rvAllowed: true,
    rvDays: "up to 28 days",
    mobileHomesAllowed: true,
    mobileHomeNote: "Mobile home use requires standard dwelling utilities/fixtures to be available (electricity, gas, water, etc.)",
    water: "Would need to drill a well",
    sewer: "Septic installation required",
    electric: "Contact Caribou Construction or Wells Rural Electric Co for service options in the area",
    gas: "Propane (Suburban Propane or Western States Propane)",
    waste: "Elko Sanitation or Elko Landfill",
    legalDescription: "Parcel A: Meadow Valley Ranchos Unit 9, Block 14, Lot 3. Parcel B: Meadow Valley Ranchos Unit 9, Block 14, Lot 14",
    trs: "Section 31, Township 34N, Range 55E",
    timeLimitToBuild: "180 days after the permit is issued",
    gpsCenter: "40.78455, -115.8203",
    gpsCorners: {
      nw: "40.7849, -115.8201",
      ne: "40.7849, -115.8206",
      se: "40.7841, -115.8201",
      sw: "40.7841, -115.8206"
    },
    parcelDetails: {
      parcelA: {
        apn: "064-014-003",
        streetReference: "0 Pearl Avenue, Elko, NV 89801",
        legalDescription: "Meadow Valley Ranchos Unit 9, Block 14, Lot 3",
        trs: "Section 31, Township 34N, Range 55E",
        gpsCenter: "40.78455, -115.8203",
        gpsCorners: {
          nw: "40.7849, -115.8201",
          ne: "40.7849, -115.8206",
          se: "40.7841, -115.8201",
          sw: "40.7841, -115.8206"
        }
      },
      parcelB: {
        apn: "064-014-014",
        streetReference: "0 Monitor Street, Elko, NV 89801",
        legalDescription: "Meadow Valley Ranchos Unit 9, Block 14, Lot 14",
        trs: "Section 31, Township 34N, Range 55E",
        gpsCenter: "40.7837, -115.8203",
        gpsCorners: {
          nw: "40.7841, -115.8201",
          ne: "40.7841, -115.8206",
          se: "40.7833, -115.8201",
          sw: "40.7833, -115.8206"
        }
      }
    },
    description: [
      "Meadow Valley Ranchos Unit 9 • Two adjoining parcels • County-maintained access • No HOA",
      "This offering includes two adjoining 1.14-acre parcels in Meadow Valley Ranchos Unit 9 (Elko County, NV) for 2.28 acres total. A clean, low-carry option for a future homesite, weekend use, or a long-term hold—with the flexibility of owning two lots side-by-side.",
      "Buyers should always confirm intended use directly with Elko County Planning & Zoning before purchase."
    ],
    images: [
      "/assets/properties/property-2-1.jpg",
      "/assets/properties/property-2-2.jpg",
      "/assets/properties/property-2-3.jpg",
    ],
    allowedUses: [
      { name: "Camping / Recreation", allowed: true },
      { name: "RV / Trailers", allowed: true },
      { name: "Mobile Homes", allowed: true },
      { name: "Single-family dwellings", allowed: true },
    ],
  },
  {
    id: 3,
    title: "1.14 Acres in Elko County, Nevada",
    location: "Elko, Nevada",
    county: "Elko County",
    state: "NV",
    acres: 1.14,
    cashPrice: 8000,
    monthlyPayment: 225,
    downPayment: 500,
    termLength: "60 months",
    featured: false,
    apn: "064-014-003",
    zoning: "Agriculture Residential (AR)",
    roadAccess: "Public road • dirt • county-maintained",
    utilities: "Water: Would need to drill a well. Sewer: Septic installation required. Electric: Contact Caribou Construction or Wells Rural Electric Co for service options in the area. Gas: Propane (Suburban Propane or Western States Propane). Waste: Elko Sanitation or Elko Landfill.",
    taxes: "$26.04",
    annualTaxes: "$26.04",
    backTaxes: "No",
    taxLiens: "No",
    hoa: "None",
    subdivision: "Meadow Valley Ranchos Unit 9",
    terrain: "Desert",
    address: "0 Pearl Avenue, Elko, NV 89801",
    closestCity: "Elko, NV 89801 (6.3 miles; ~14 minutes)",
    closestTown: "Spring Creek, NV 89801 (18 miles; ~26 minutes)",
    closestGasStation: "Shell – Elko (5.1 miles; ~10 minutes)",
    closestHighway: "Dwight D. Eisenhower Hwy / I-80",
    campingAllowed: true,
    campingDays: "up to 28 days",
    rvAllowed: true,
    rvDays: "up to 28 days",
    mobileHomesAllowed: true,
    mobileHomeNote: "Mobile home use requires standard dwelling utilities/fixtures to be available (electricity, gas, water, etc.)",
    water: "Would need to drill a well",
    sewer: "Septic installation required",
    electric: "Contact Caribou Construction or Wells Rural Electric Co for service options in the area",
    gas: "Propane (Suburban Propane or Western States Propane)",
    waste: "Elko Sanitation or Elko Landfill",
    timeLimitToBuild: "180 days after the permit is issued",
    legalDescription: "Meadow Valley Ranchos Unit 9, Block 14, Lot 3",
    trs: "Section 31, Township 34N, Range 55E",
    gpsCenter: "40.78455, -115.8203",
    gpsCorners: {
      nw: "40.7849, -115.8201",
      ne: "40.7849, -115.8206",
      se: "40.7841, -115.8201",
      sw: "40.7841, -115.8206"
    },
    description: [
      "Meadow Valley Ranchos Unit 9 • County-maintained access • No HOA",
      "This listing is for one 1.14-acre parcel in Meadow Valley Ranchos Unit 9 (Elko County, NV). A clean, low-carry option for weekend use, future build plans, or a long-term hold—without HOA restrictions.",
      "Buyers should always confirm intended use directly with Elko County Planning & Zoning before purchase."
    ],
    images: [
      "/assets/properties/property-3-1.jpg",
      "/assets/properties/property-3-2.jpg",
      "/assets/properties/property-3-3.jpg",
    ],
    allowedUses: [
      { name: "Camping / Recreation", allowed: true },
      { name: "RV / Trailers", allowed: true },
      { name: "Mobile Homes", allowed: true },
      { name: "Single-family dwellings", allowed: true },
    ],
  },
  {
    id: 4,
    title: "1.14 Acres in Elko County, Nevada",
    location: "Elko, Nevada",
    county: "Elko County",
    state: "NV",
    acres: 1.14,
    cashPrice: 8000,
    monthlyPayment: 225,
    downPayment: 500,
    termLength: "60 months",
    featured: false,
    apn: "064-014-014",
    zoning: "Agriculture Residential (AR)",
    roadAccess: "Public road • dirt • county-maintained",
    utilities: "Water: Would need to drill a well. Sewer: Septic installation required. Electric: Contact Caribou Construction or Wells Rural Electric Co for service options in the area. Gas: Propane (Suburban Propane or Western States Propane). Waste: Elko Sanitation or Elko Landfill.",
    taxes: "$26.04",
    annualTaxes: "$26.04",
    backTaxes: "No",
    taxLiens: "No",
    hoa: "None",
    subdivision: "Meadow Valley Ranchos Unit 9",
    terrain: "Desert",
    address: "0 Monitor Street, Elko, NV 89801",
    closestCity: "Elko, NV 89801 (6.3 miles; ~14 minutes)",
    closestTown: "Spring Creek, NV 89801 (18 miles; ~26 minutes)",
    closestGasStation: "Shell – Elko (5.1 miles; ~10 minutes)",
    closestHighway: "Dwight D. Eisenhower Hwy / I-80",
    campingAllowed: true,
    campingDays: "up to 28 days",
    rvAllowed: true,
    rvDays: "up to 28 days",
    mobileHomesAllowed: true,
    mobileHomeNote: "Mobile home use requires standard dwelling utilities/fixtures to be available (electricity, gas, water, etc.)",
    water: "Would need to drill a well",
    sewer: "Septic installation required",
    electric: "Contact Caribou Construction or Wells Rural Electric Co for service options in the area",
    gas: "Propane (Suburban Propane or Western States Propane)",
    waste: "Elko Sanitation or Elko Landfill",
    timeLimitToBuild: "180 days after the permit is issued",
    legalDescription: "Meadow Valley Ranchos Unit 9, Block 14, Lot 14",
    trs: "Section 31, Township 34N, Range 55E",
    gpsCenter: "40.7837, -115.8203",
    gpsCorners: {
      nw: "40.7841, -115.8201",
      ne: "40.7841, -115.8206",
      se: "40.7833, -115.8201",
      sw: "40.7833, -115.8206"
    },
    description: [
      "Meadow Valley Ranchos Unit 9 • County-maintained access • No HOA",
      "This listing is for one 1.14-acre parcel in Meadow Valley Ranchos Unit 9 (Elko County, NV). A clean, low-carry option for weekend use, future build plans, or a long-term hold—without HOA restrictions.",
      "Buyers should always confirm intended use directly with Elko County Planning & Zoning before purchase."
    ],
    images: [
      "/assets/properties/property-4-1.jpg",
      "/assets/properties/property-4-2.jpg",
      "/assets/properties/property-4-3.jpg",
    ],
    allowedUses: [
      { name: "Camping / Recreation", allowed: true },
      { name: "RV / Trailers", allowed: true },
      { name: "Mobile Homes", allowed: true },
      { name: "Single-family dwellings", allowed: true },
    ],
  },
  {
    id: 5,
    title: "0.50 Acres in Luna County, New Mexico",
    location: "Deming, New Mexico",
    county: "Luna County",
    state: "NM",
    acres: 0.50,
    cashPrice: 1080,
    monthlyPayment: 75,
    downPayment: 250,
    termLength: "18 months",
    featured: false,
    apn: "3040138305122",
    zoning: "Residential",
    roadAccess: "Dirt road • Palo Rd",
    utilities: "Water: Well needed. Electric: Not connected on the property (solar or local provider options available). Sewer: Septic system or advanced liquid waste system required. Gas: Propane. Trash: Private/haul service required.",
    taxes: "$13.96",
    annualTaxes: "$13.96 (2024)",
    backTaxes: "$24.43 (2024)",
    taxLiens: "$0.00",
    subdivision: "Deming Ranchettes Unit 32",
    legalDescription: "Deming Ranchettes Unit 32, Block 9, Tract 43",
    elevation: "~4,172 ft",
    dimensions: "112.45 ft x 195.39 ft x 111.48 ft x 194.36 ft",
    buildable: true,
    minimumBuildSize: "600 sq ft",
    maximumBuildingHeight: "One story",
    timeLimitToBuild: "6 months with a permit",
    setbacks: {
      front: "25 ft",
      sides: "15 ft",
      rear: "15 ft"
    },
    restrictiveCovenants: "Restrictive covenants apply",
    floodZone: "parcel is within a flood zone (confirm details before building)",
    water: "Well needed",
    electric: "Not connected on the property (solar or local provider options available)",
    sewer: "Septic system or advanced liquid waste system required",
    gas: "Propane",
    trash: "Private/haul service required",
    closestHighway: "HWY 70",
    nearbyAttractions: [
      "City of Rocks State Park",
      "Voiers \"Pit\" Park",
      "Deming Luna Mimbres Museum"
    ],
    campingAllowed: false,
    rvAllowed: false,
    rvWhileBuilding: true,
    gpsCenter: "32.265833, -107.565056",
    gpsCorners: {
      nw: "32.266100, -107.565236",
      ne: "32.266097, -107.564886",
      se: "32.265575, -107.564883",
      sw: "32.265578, -107.565233"
    },
    notes: [
      "If the property is less than ¾ acre, an Advanced Liquid Waste System is needed.",
      "We'll confirm the current payoff with the county before closing—message us if you want the latest numbers."
    ],
    description: [
      "Deming Ranchettes Unit 32 • Palo Rd access • Buildable residential lot",
      "This 0.50-acre parcel in Deming Ranchettes Unit 32 is a simple, low-carry option near Deming with dirt-road access via Palo Rd. Residential zoning allows a single-family dwelling (site-built or manufactured), with standard rural utility setup (well + septic)."
    ],
    images: [
      "/assets/properties/property-5-1.jpg",
      "/assets/properties/property-5-2.jpg",
      "/assets/properties/property-5-3.jpg",
    ],
    allowedUses: [
      { name: "One single-family dwelling", allowed: true },
      { name: "Site-built homes", allowed: true },
      { name: "Manufactured homes", allowed: true },
      { name: "RVs", allowed: false },
      { name: "Camping", allowed: false },
      { name: "RV while building (with permit)", allowed: true },
    ],
  },
  {
    id: 6,
    title: "0.51 Acres in Luna County, New Mexico",
    location: "Deming, New Mexico",
    county: "Luna County",
    state: "NM",
    acres: 0.51,
    cashPrice: 1080,
    monthlyPayment: 75,
    downPayment: 250,
    termLength: "18 months",
    featured: false,
    apn: "3039138254252",
    zoning: "Residential",
    roadAccess: "Dirt road • access via Geronimo Rd",
    utilities: "Water: Well needed. Sewer: Septic system or advanced liquid waste system required. Gas: Propane. Trash: Private/haul service required.",
    taxes: "$28.13",
    annualTaxes: "$28.13 (2024)",
    backTaxes: "$83.02",
    taxLiens: "$0.00",
    subdivision: "Deming Ranchettes Unit 33",
    legalDescription: "Deming Ranchettes Unit 33, Block 6, Tract 17",
    elevation: "~4,163 ft",
    dimensions: "150.25 ft x 145.11 ft x 150.40 ft x 145.24 ft",
    buildable: true,
    minimumBuildSize: "600 sq ft",
    maximumBuildingHeight: "One story",
    timeLimitToBuild: "6 months with a permit",
    setbacks: {
      front: "25 ft",
      sides: "15 ft",
      rear: "15 ft"
    },
    restrictiveCovenants: "Restrictive covenants apply",
    floodZone: "parcel is within a flood zone (confirm details before building)",
    water: "Well needed",
    sewer: "Septic system or advanced liquid waste system required",
    gas: "Propane",
    trash: "Private/haul service required",
    closestHighway: "HWY 70",
    nearbyAttractions: [
      "Deming Luna Mimbres Museum",
      "Rockhound State Park",
      "and other local recreation"
    ],
    campingAllowed: false,
    rvAllowed: false,
    rvWhileBuilding: true,
    gpsCenter: "32.262278, -107.546278",
    gpsCorners: {
      nw: "32.262442, -107.546511",
      ne: "32.262442, -107.546044",
      se: "32.262086, -107.546047",
      sw: "32.262072, -107.546506"
    },
    notes: [
      "Because the parcel is under 0.75 acres, an Advanced Liquid Waste System is required.",
      "We'll confirm the current payoff with the county before closing—message us if you want the latest numbers."
    ],
    description: [
      "Deming Ranchettes Unit 33 • Geronimo Rd access • Buildable residential lot",
      "This 0.51-acre parcel in Deming Ranchettes Unit 33 offers flat desert terrain, wide-open views, and simple access off Geronimo Rd. A straightforward option for a small homesite or manufactured build near Deming and Highway 70."
    ],
    images: [
      "/assets/properties/property-6-1.jpg",
      "/assets/properties/property-6-2.jpg",
      "/assets/properties/property-6-3.jpg",
    ],
    allowedUses: [
      { name: "Site-built homes", allowed: true },
      { name: "Manufactured homes", allowed: true },
      { name: "RVs", allowed: false },
      { name: "Camping", allowed: false },
      { name: "RV while building (with permit)", allowed: true },
    ],
  },
  {
    id: 7,
    title: "0.30 Acres in Cochise County, Arizona",
    location: "Douglas, Arizona",
    county: "Cochise County",
    state: "AZ",
    acres: 0.30,
    cashPrice: 9500,
    monthlyPayment: 225,
    downPayment: 750,
    termLength: "60 months",
    featured: false,
    apn: "406-23-340 and 406-23-341",
    zoning: "MH-72",
    assessorUseCode: "Multi-Family Residential",
    roadAccess: "E Via Ocotillo • Dirt • County",
    address: "E Via Ocotillo, Douglas, AZ 85607",
    utilities: "Water: Well needed. Septic: Septic system needed. Electric: Available nearby. Gas: Southwest Gas Corporation (service availability to be confirmed for your build). Trash: Private trash service required. Internet/Cable: Service options in the area (availability depends on exact build plan).",
    taxes: "$0.00",
    backTaxes: "$0.00",
    taxLiens: "None found",
    hoa: "No",
    subdivision: "Cochise College Park #6",
    lots: "687 & 688",
    terrain: "Desert",
    vegetation: "Light",
    elevation: "~4,180 ft",
    water: "Well needed",
    sewer: "Septic system needed",
    electric: "Available nearby",
    gas: "Southwest Gas Corporation (service availability to be confirmed for your build)",
    trash: "Private trash service required",
    internetCable: "Service options in the area (availability depends on exact build plan)",
    closestCity: "Douglas, AZ: ~6.5 miles",
    closestTown: "Pirtleville, AZ: ~6.6 miles",
    nearbyAttractions: [
      "Leslie Canyon National Wildlife Refuge",
      "and other local landmarks"
    ],
    campingAllowed: true,
    campingDays: "with restrictions",
    rvAllowed: true,
    temporaryRvOccupancy: "Temporary occupancy of one RV is allowed for up to 6 months (permit/rules apply)",
    gpsCenter: "31.429315, -109.534842",
    gpsCorners: {
      nw: "31.429457, -109.535134",
      ne: "31.429457, -109.534745",
      se: "31.429157, -109.534542",
      sw: "31.429157, -109.534925"
    },
    notes: [
      "Always confirm your intended use (home type, permits, RV rules, setbacks, utilities) directly with Cochise County before purchase."
    ],
    description: [
      "Douglas, AZ • Cochise College Park #6 • Two adjoining parcels • County-road access",
      "This offering includes two side-by-side 0.15-acre parcels in Cochise College Park #6 for 0.30 acres total near Douglas, Arizona. A clean, simple setup with dirt-road access, open desert terrain, and mountain views."
    ],
    images: [
      "/assets/properties/property-7-1.jpg",
      "/assets/properties/property-7-2.jpg",
      "/assets/properties/property-7-3.jpg",
    ],
    allowedUses: [
      { name: "Camping (with restrictions)", allowed: true },
      { name: "Temporary RV occupancy (up to 6 months with permit)", allowed: true },
    ],
  },
  {
    id: 8,
    title: "0.15 Acres — Cochise College Park #6 (Douglas, AZ)",
    location: "Douglas, Arizona",
    county: "Cochise County",
    state: "AZ",
    acres: 0.15,
    cashPrice: 5500,
    monthlyPayment: 175,
    downPayment: 750,
    termLength: "48 months",
    featured: false,
    apn: "406-23-340",
    zoning: "MH-72",
    roadAccess: "E Via Ocotillo • Dirt road with year-round access",
    address: "E Via Ocotillo, Douglas, AZ 85607",
    utilities: "Power: Available nearby. Water: Well needed. Sewer: Septic required. Gas: Service in the area (confirm availability for your exact plan).",
    taxes: "",
    hoa: "No HOA noted",
    subdivision: "Cochise College Park #6",
    terrain: "Flat desert terrain with sparse vegetation and distant mountain views",
    vegetation: "Sparse",
    elevation: "~4,180 ft",
    floodZone: "Zone X (no flood hazard)",
    water: "Well needed",
    sewer: "Septic required",
    electric: "Available nearby",
    gas: "Service in the area (confirm availability for your exact plan)",
    closestCity: "Douglas: ~6.5 miles",
    closestTown: "Pirtleville: ~6.6 miles",
    nearbyAttractions: [
      "Cochise College (Douglas campus)"
    ],
    gpsCenter: "31.429315, -109.534842",
    notes: [
      "Always confirm intended use, permits, setbacks, and any county requirements before building.",
      "No build timeframe noted"
    ],
    description: [
      "A clean, buildable desert parcel in Cochise College Park #6 with MH-72 zoning, year-round road access, and open mountain views. This is one of two adjoining lots in the neighborhood (offered here as a single parcel)."
    ],
    images: [
      "/assets/properties/property-8-1.jpg",
      "/assets/properties/property-8-2.jpg",
      "/assets/properties/property-8-3.jpg",
    ],
    allowedUses: [
      { name: "Mobile homes", allowed: true },
      { name: "Manufactured homes", allowed: true },
      { name: "Modular homes", allowed: true },
      { name: "Site-built homes", allowed: true },
    ],
  },
  {
    id: 9,
    title: "0.15 Acres — Cochise College Park #6 (Douglas, AZ)",
    location: "Douglas, Arizona",
    county: "Cochise County",
    state: "AZ",
    acres: 0.15,
    cashPrice: 5500,
    monthlyPayment: 175,
    downPayment: 750,
    termLength: "48 months",
    featured: false,
    apn: "406-23-341",
    zoning: "MH-72",
    roadAccess: "E Via Ocotillo • Dirt road with year-round access",
    address: "E Via Ocotillo, Douglas, AZ 85607",
    utilities: "Power: Available nearby. Water: Well needed. Sewer: Septic required. Gas: Service in the area (confirm availability for your exact plan).",
    taxes: "",
    hoa: "No HOA noted",
    subdivision: "Cochise College Park #6",
    terrain: "Flat desert terrain with sparse vegetation and distant mountain views",
    vegetation: "Sparse",
    elevation: "~4,180 ft",
    floodZone: "Zone X (no flood hazard)",
    water: "Well needed",
    sewer: "Septic required",
    electric: "Available nearby",
    gas: "Service in the area (confirm availability for your exact plan)",
    closestCity: "Douglas: ~6.5 miles",
    closestTown: "Pirtleville: ~6.6 miles",
    nearbyAttractions: [
      "Cochise College (Douglas campus)"
    ],
    gpsCenter: "31.429315, -109.534842",
    notes: [
      "Always confirm intended use, permits, setbacks, and any county requirements before building.",
      "No build timeframe noted",
      "This lot sits next to APN 406-23-340 (adjoining parcel), giving you the option to own one lot now or pair it with the neighbor for extra space and flexibility."
    ],
    description: [
      "A clean, buildable desert parcel in Cochise College Park #6 with MH-72 zoning, year-round road access, and open mountain views. This lot sits next to APN 406-23-340 (adjoining parcel), giving you the option to own one lot now or pair it with the neighbor for extra space and flexibility."
    ],
    images: [
      "/assets/properties/property-9-1.jpg",
      "/assets/properties/property-9-2.jpg",
      "/assets/properties/property-9-3.jpg",
    ],
    allowedUses: [
      { name: "Mobile homes", allowed: true },
      { name: "Manufactured homes", allowed: true },
      { name: "Modular homes", allowed: true },
      { name: "Site-built homes", allowed: true },
    ],
  },
  {
    id: 10,
    title: "0.18 Acres — Douglas, Arizona",
    location: "Douglas, Arizona",
    county: "Cochise County",
    state: "AZ",
    acres: 0.18,
    cashPrice: 4500,
    monthlyPayment: 170,
    downPayment: 550,
    termLength: "48 months",
    featured: false,
    apn: "410-35-072",
    zoning: "SFR (Single-Family Residential)",
    roadAccess: "County dirt road • Year-round access noted",
    address: "Douglas, AZ 85607",
    utilities: "Power: Nearby (APS). Gas: Nearby (Southwest Gas). Water: Contact Douglas Water for service details (availability depends on connection distance/fees). Sewer: Septic needed (if not on municipal sewer at the lot). Internet/Phone: Megacable (availability to be confirmed for the exact address). Trash: Private service (CM Hauling).",
    taxes: "",
    hoa: "None",
    subdivision: "Douglas Terrace",
    terrain: "Flat, rectangular desert parcel",
    elevation: "~4,080 ft",
    borders: "Public land (adds buffer/privacy)",
    water: "Contact Douglas Water for service details (availability depends on connection distance/fees)",
    sewer: "Septic needed (if not on municipal sewer at the lot)",
    electric: "Nearby (APS)",
    gas: "Nearby (Southwest Gas)",
    internetCable: "Megacable (availability to be confirmed for the exact address)",
    trash: "Private service (CM Hauling)",
    closestCity: "Douglas: ~1.5 miles (~4 minutes)",
    closestTown: "Pirtleville: ~3.5 miles (~10 minutes)",
    nearbyAttractions: [
      "Slaughter Ranch (~16 miles)",
      "Leslie Canyon (~19.7 miles)"
    ],
    description: [
      "Douglas Terrace • Borders public land • No HOA • Near town",
      "A clean 0.18-acre residential parcel in Douglas Terrace with county-road access, mountain views, and a public land border for added privacy. A straightforward option for a small build site or long-term hold close to town."
    ],
    images: [
      "/assets/properties/property-10-1.jpg",
      "/assets/properties/property-10-2.jpg",
      "/assets/properties/property-10-3.jpg",
    ],
    allowedUses: [
      { name: "Single-family home (confirm setbacks and permitting requirements with the county)", allowed: true },
    ],
  },
  {
    id: 11,
    title: "2.41 Acres in Imlay, NV (Pershing County)",
    location: "Imlay, Nevada",
    county: "Pershing County",
    state: "NV",
    acres: 2.41,
    cashPrice: 15000,
    monthlyPayment: 350,
    downPayment: 1500,
    termLength: "60 months",
    featured: false,
    apn: "006-063-03",
    zoning: "HDS / General Commercial (GC)",
    countyUseCode: "120 – Vacant – Single Family Residential (platted subdivision)",
    roadAccess: "Paved frontage road • County-maintained",
    address: "Imlay, NV 89418",
    utilities: "Electric: Available nearby. Water: Well or community water options may be available in the area. Septic: Typical for parcels outside city sewer service. Gas: Propane (natural gas is limited in the region). Internet/Phone: Generally available.",
    taxes: "~$20",
    annualTaxes: "~$20",
    subdivision: "Golden West #1",
    terrain: "Flat desert ground (easy to work with)",
    shape: "Square",
    elevation: "~4,200 ft",
    vegetation: "Light",
    water: "Well or community water options may be available in the area",
    sewer: "Typical for parcels outside city sewer service",
    electric: "Available nearby",
    gas: "Propane (natural gas is limited in the region)",
    internetCable: "Generally available",
    closestCity: "Winnemucca, NV – ~30 minutes",
    closestTown: "Lovelock, NV – ~35 minutes",
    nearbyAttractions: [
      "Lightning Mountain Monument – ~3 minutes",
      "Rye Patch State Recreation Area – ~17 minutes"
    ],
    mapLink: "https://maps.app.goo.gl/pyVXuvGbriaNKBnS6",
    billboardDisclosure: "A professionally maintained YESCO billboard is located on a portion of the parcel under a recorded easement. The billboard is NOT included in the sale. No billboard rights and no advertising income convey. The billboard company handles maintenance and operations under the easement. The remaining land is usable, subject to zoning and easement restrictions.",
    dueDiligencePacketInfo: [
      "Parcel maps and GPS coordinates",
      "Zoning summary and key notes",
      "Tax verification",
      "Utility notes",
      "Access confirmation",
      "Recorded easement information"
    ],
    campingAllowed: false,
    rvAllowed: false,
    mobileHomesAllowed: false,
    notes: [
      "Camping, RV living, and mobile homes are not allowed unless tied to an approved commercial use and permitted by the county (e.g., an approved RV park with a Special Use Permit).",
      "GC zoning commonly supports (some uses may require permits and/or site plan approval): Retail and service businesses, Automotive sales and repair, Warehousing / storage, Restaurants and travel-oriented services, Professional offices and mixed commercial uses"
    ],
    description: [
      "Easy I-80 Access • General Commercial (GC) Zoning • Ultra-Low Taxes • DD Packet Included",
      "This 2.41-acre parcel sits just off Interstate-80 near Imlay, Nevada with paved frontage road access, open desert terrain, and wide mountain views. With General Commercial (GC) zoning and extremely low annual taxes, this is a strong fit for buyers looking for a low-holding-cost Nevada parcel with practical access and flexible commercial-use potential."
    ],
    images: [
      "/assets/properties/property-11-1.jpg",
      "/assets/properties/property-11-2.jpg",
      "/assets/properties/property-11-3.jpg",
    ],
    allowedUses: [
      { name: "Retail and service businesses", allowed: true },
      { name: "Automotive sales and repair", allowed: true },
      { name: "Warehousing / storage", allowed: true },
      { name: "Restaurants and travel-oriented services", allowed: true },
      { name: "Professional offices and mixed commercial uses", allowed: true },
      { name: "Camping", allowed: false },
      { name: "RV living", allowed: false },
      { name: "Mobile homes", allowed: false },
    ],
  },
  {
    id: 12,
    title: "40.02 Acres — Pershing County, Nevada",
    location: "Lovelock, Nevada (region)",
    county: "Pershing County",
    state: "NV",
    acres: 40.02,
    cashPrice: 15000,
    monthlyPayment: 350,
    downPayment: 1500,
    termLength: "60 months",
    featured: true,
    apn: "003-630-10",
    zoning: "AMR (Agriculture, Mining, Recreation)",
    roadAccess: "Landlocked – no recorded road/easement (typical rural NV)",
    accessWarning: "Landlocked – no recorded road/easement (typical rural NV). Perfect for rec/investors who know the game: ATV in, negotiate an easement later, or hold cheap (the low carry cost is a big part of the appeal).",
    utilities: "Water: Private well or limited local options. Septic: Septic system required. Electric: Available in the area (distance-dependent). Gas: Propane (no natural gas service). Trash: Haul-your-own. Internet/Phone: Service varies by carrier and terrain.",
    taxes: "~$35",
    annualTaxes: "~$35",
    hoa: "None",
    terrain: "High desert with sloped sections",
    shape: "Square",
    vegetation: "Light",
    elevation: "~5,320–5,360 ft",
    naturalFeatures: "Creek running through the property",
    water: "Private well or limited local options",
    sewer: "Septic system required",
    electric: "Available in the area (distance-dependent)",
    gas: "Propane (no natural gas service)",
    trash: "Haul-your-own",
    internetCable: "Service varies by carrier and terrain",
    closestCity: "Lovelock, NV (region)",
    nearbyAttractions: [
      "Lightning Mountain Monument",
      "Rye Patch State Recreation Area",
      "Star Peak",
      "Mt. Tobin",
      "Humboldt Museum (Winnemucca area)"
    ],
    whyStandsOut: [
      "40 acres in Nevada at a price point that keeps carrying costs low",
      "Creek + mountains + seclusion (rare combo for an affordable hold)",
      "AMR zoning = long-term flexibility for the right buyer",
      "Ultra-low taxes help you hold long-term without pressure",
      "No HOA, no neighborhood restrictions—just land and room to breathe"
    ],
    dueDiligencePacketInfo: [
      "Parcel maps and GPS corner coordinates",
      "Zoning and allowed-use summary",
      "Tax verification",
      "Utility and infrastructure notes",
      "Access disclosures",
      "Environmental and terrain notes"
    ],
    campingAllowed: true,
    rvAllowed: true,
    notes: [
      "Always confirm your exact plan with Pershing County before starting any use or improvements.",
      "This is not a 'suburban build lot.' It's a remote recreational / legacy hold with a standout natural feature and a long runway."
    ],
    description: [
      "Creek + Mountain Views • AMR Zoning • Ultra-Low Taxes • No HOA • Remote Privacy Hold",
      "This 40.02-acre Nevada parcel is a true high-desert escape: wide-open space, mountain views, and a creek running through the property. Zoned AMR (Agriculture, Mining, Recreation) with ultra-low annual taxes (~$35/year), it's built for the right buyer—someone who wants privacy, acreage, and long-term optionality and understands rural Nevada land.",
      "This is not a 'suburban build lot.' It's a remote recreational / legacy hold with a standout natural feature and a long runway."
    ],
    images: [
      "/assets/properties/property-12-1.jpg",
      "/assets/properties/property-12-2.jpg",
      "/assets/properties/property-12-3.jpg",
    ],
    allowedUses: [
      { name: "Recreation and camping-style use", allowed: true },
      { name: "RV use and temporary occupancy (rules vary by duration/setup)", allowed: true },
      { name: "Agricultural use (farming, ranching, livestock)", allowed: true },
      { name: "Mining and mineral-related uses", allowed: true },
      { name: "Cabins, lodges, and other recreational improvements (permit-dependent)", allowed: true },
      { name: "Renewable energy projects (solar/wind)", allowed: true },
      { name: "Single-family residence and related housing uses (often permit-dependent)", allowed: true },
    ],
  },
  {
    id: 13,
    title: "20 Acres Pershing NV – Winnemucca MDR w/ County Road + Mountain Views!",
    location: "Winnemucca, Nevada",
    county: "Pershing County",
    state: "NV",
    acres: 20.00,
    cashPrice: 20000,
    monthlyPayment: 400,
    downPayment: 4000,
    termLength: "60 months",
    featured: true,
    apn: "009-130-17",
    zoning: "Medium Density Rural (MDR)",
    roadAccess: "Good Choice Mc Rd • Dirt • County",
    address: "Winnemucca, NV 89445",
    utilities: "Water: Private well or limited community options. Septic: Septic system required (soil/engineering requirements may apply). Electric: Available in the area (distance-dependent). Gas: Natural gas is limited in rural Pershing County; propane is typical. Trash: Trash service or haul-your-own. Telephone / Internet: Usually available (service varies by carrier/location).",
    taxes: "$85.23",
    annualTaxes: "$85.23",
    backTaxes: "$0",
    taxLiens: "None noted",
    hoa: "No",
    deedRestrictions: "Not found / No",
    mineralRights: "Not found (verify before purchase if this matters to you)",
    subdivision: "",
    terrain: "Desert (flat/low-slope noted)",
    shape: "Rectangle",
    views: "Mountains",
    legalDescription: "T34 R37 Sec 24",
    water: "Private well or limited community options",
    sewer: "Septic system required (soil/engineering requirements may apply)",
    electric: "Available in the area (distance-dependent)",
    gas: "Natural gas is limited in rural Pershing County; propane is typical",
    trash: "Trash service or haul-your-own",
    internetCable: "Usually available (service varies by carrier/location)",
    closestCity: "Winnemucca: ~14 miles (~21 minutes)",
    closestTown: "Mill City: ~30.7 miles (~35 minutes)",
    nearbyAttractions: [
      "Rye Patch State Recreation Area",
      "Lightning Mountain Monument",
      "Star Peak",
      "Mt. Tobin",
      "and local Winnemucca amenities"
    ],
    campingAllowed: true,
    campingDays: "Generally restricted unless it's tied to an approved recreational or agricultural use, and may require a Special Use Permit",
    rvAllowed: true,
    rvDays: "Typically allowed for temporary use (for example, during construction or tied to a permitted use)",
    mobileHomesAllowed: true,
    mobileHomeNote: "Allowed with zoning standards (setbacks/foundation/utility requirements may apply)",
    gpsCenter: "40.806080, -117.763410",
    gpsCorners: {
      nw: "40.806988, -117.765746",
      ne: "40.806913, -117.761101",
      se: "40.805150, -117.761106",
      sw: "40.805284, -117.765743"
    },
    dueDiligencePacketInfo: [
      "Parcel maps and GPS coordinates",
      "Zoning and use summary",
      "Tax and back-tax verification",
      "Utility notes and local service context",
      "Access notes and road frontage details"
    ],
    notes: [
      "Always verify your exact plan (setbacks, permits, utilities, building standards, and any special use requirements) directly with Pershing County before purchase.",
      "If your main goal is camping/RV recreation, confirm the county's current interpretation for MDR before you buy."
    ],
    description: [
      "APN 009-130-17 | $85 Taxes | No HOA | Build/Hold Ready!",
      "Your Nevada ranch dream starts here: 20 usable acres near Winnemucca with county dirt-road frontage on Good Choice Mc Rd, a clean rectangular layout, and wide-open mountain views. Zoned Medium Density Rural (MDR), this property gives you real flexibility—build a home, place a manufactured/modular setup, add an ADU, or use it for small-scale farming and personal livestock (verify your exact plan with the county).",
      "No HOA. No neighborhood restrictions. Just Nevada space you can use now and hold long-term with straightforward carrying costs."
    ],
    images: [
      "/assets/properties/property-13-1.jpg",
      "/assets/properties/property-13-2.jpg",
      "/assets/properties/property-13-3.jpg",
    ],
    allowedUses: [
      { name: "Single-family homes", allowed: true },
      { name: "ADUs (accessory dwelling units)", allowed: true },
      { name: "Manufactured / modular / mobile homes", allowed: true },
      { name: "Small-scale farming and personal-use livestock", allowed: true },
      { name: "Agricultural structures (barns, greenhouses)", allowed: true },
      { name: "Storage buildings and home-based businesses", allowed: true },
      { name: "Solar panels and private outdoor recreation", allowed: true },
    ],
  },
  {
    id: 14,
    title: "1.85 Acres in California City, CA (Kern County) — R-4 Zoned Infill Lot on Shirley Dr",
    location: "California City, California",
    county: "Kern County",
    state: "CA",
    acres: 1.85,
    cashPrice: 5000,
    monthlyPayment: 120,
    downPayment: 1000,
    termLength: "60 months",
    featured: false,
    apn: "283-071-11-00-3",
    zoning: "R-4",
    roadAccess: "Shirley Dr / Shirley Ct • Dirt • City",
    utilities: "Water / Sewer: City-provided domestic water and wastewater service (availability/connection fees should be verified). Electric: Available in the area. Natural Gas: Service provided by Southern California Gas (verify availability at the parcel). Internet / Phone: Available in the area. Waste / Trash: Private service noted (Lost City Junk Removal).",
    taxes: "$30.09",
    annualTaxes: "$30.09/year",
    address: "Shirley Dr / Shirley Ct, California City, CA 93505",
    terrain: "Desert • Light vegetation • Generally flat (no slope noted)",
    shape: "Rectangle",
    views: "Mountain views",
    elevation: "~2,690 ft",
    hoa: "None",
    easements: "None noted",
    deedRestrictions: "None noted",
    improvements: "None",
    legalDescription: "Tract 3193, Block, Lot 210 (Sec 11 / R39E / T32S)",
    timeLimitToBuild: "Permits can become invalid if work is not started within 12 months of issuance (per the provided build-code note)",
    gpsCenter: "35.160430, -117.769840",
    gpsCorners: {
      nw: "35.160592, -117.770524",
      ne: "35.160941, -117.770130",
      se: "35.160263, -117.769191",
      sw: "35.159864, -117.769733"
    },
    nearbyHighlights: [
      "Desert Tortoise Research Natural Area",
      "Garlock Desert Bike Route (West End)",
      "Rand Desert Museum (Randsburg)",
      "Grass Valley Wilderness"
    ],
    water: "City-provided domestic water and wastewater service (verify availability/connection fees)",
    sewer: "City-provided domestic water and wastewater service (verify availability/connection fees)",
    electric: "Available in the area",
    gas: "Service provided by Southern California Gas (verify availability at the parcel)",
    campingAllowed: false,
    rvAllowed: false,
    mobileHomesAllowed: true,
    mobileHomeNote: "Mobile/manuf homes OK w/permanent foundation + full permits",
    description: [
      "R-4 Zoned Infill Lot on Shirley Dr",
      "A clean 1.85-acre rectangular parcel in California City with city road frontage and utilities available in the area. Zoned R-4, this is a strong option for a buyer looking for a residential build/hold—without HOA restrictions.",
      "RV/Camping Rules (City Strict – Builders Only): No camping/RV living (tents/vehicles prohibited except construction temp w/permit). Mobile/manuf homes OK w/permanent foundation + full permits. Perfect for builders/investors – not rec holds.",
      "Build timeline note: Permits can become invalid if work is not started within 12 months of issuance (per the provided build-code note)."
    ],
    images: [
      "/assets/properties/property-14-1.jpg",
      "/assets/properties/property-14-2.jpg",
      "/assets/properties/property-14-3.jpg",
    ],
    allowedUses: [
      { name: "Single-family home", allowed: true },
      { name: "Potential two-unit (SB-9) pathway", allowed: true },
      { name: "Group care facility (up to 6 people)", allowed: true },
      { name: "Employee / farmworker housing", allowed: true },
      { name: "Camping / RV living", allowed: false },
      { name: "Mobile homes (with permanent foundation + permits)", allowed: true },
    ],
  },
  {
    id: 15,
    title: "1.99 Acres in California City, CA (Kern County) — R-4 Zoned Lot on Hassel Ct",
    location: "California City, California",
    county: "Kern County",
    state: "CA",
    acres: 1.99,
    cashPrice: 5000,
    monthlyPayment: 120,
    downPayment: 1000,
    termLength: "60 months",
    featured: false,
    apn: "283-190-03-00-8",
    zoning: "R-4",
    roadAccess: "Hassel Ct • Dirt • City",
    utilities: "Water / Sewer: City-provided domestic water + wastewater service (verify connection availability/fees). Electric: Available in the area. Natural Gas: Provided by Southern California Gas (verify availability at the parcel). Internet / Phone: Available in the area. Trash: Private service noted (Lost City Junk Removal).",
    taxes: "$32.71",
    annualTaxes: "$32.71/year",
    taxLiens: "Yes (buyers should confirm current status during escrow)",
    address: "Hassel Ct, California City, CA 93505",
    terrain: "Desert • Light vegetation • Generally flat",
    shape: "Polygon",
    views: "Mountain views",
    elevation: "~2,690 ft",
    hoa: "None",
    easements: "None noted",
    deedRestrictions: "None noted",
    mineralRights: "Not found",
    improvements: "None",
    legalDescription: "Tract 3193, Block, Lot 389 (Sec 15 / R39E / T32S)",
    timeLimitToBuild: "Permits can become invalid if work isn't started within 12 months of issuance (per the provided code note)",
    gpsCenter: "35.152910, -117.788580",
    gpsCorners: {
      nw: "35.152151, -117.788907",
      ne: "35.153333, -117.788628",
      se: "35.152419, -117.787834",
      sw: "35.152241, -117.788145"
    },
    nearbyHighlights: [
      "Desert Tortoise Research Natural Area",
      "Garlock Desert Bike Route (West End)",
      "Rand Desert Museum (Randsburg)",
      "Grass Valley Wilderness"
    ],
    water: "City-provided domestic water + wastewater service (verify connection availability/fees)",
    sewer: "City-provided domestic water + wastewater service (verify connection availability/fees)",
    electric: "Available in the area",
    gas: "Provided by Southern California Gas (verify availability at the parcel)",
    campingAllowed: false,
    rvAllowed: false,
    mobileHomesAllowed: true,
    mobileHomeNote: "Mobile/manuf homes OK w/permanent foundation + full permits",
    description: [
      "R-4 Zoned Lot on Hassel Ct",
      "A clean 1.99-acre parcel in California City with city dirt-road frontage and utilities available in the area. Zoned R-4, this property is best suited for a residential build/hold strategy—no HOA restrictions and low annual carrying costs.",
      "RV/Camping Rules (City Strict – Builders Only): No camping/RV living (tents/vehicles prohibited except construction temp w/permit). Mobile/manuf homes OK w/permanent foundation + full permits. Perfect for builders/investors – not rec holds.",
      "Build timeline note: Under the provided code note, permits can become invalid if work isn't started within 12 months of issuance."
    ],
    images: [
      "/assets/properties/property-15-1.jpg",
      "/assets/properties/property-15-2.jpg",
      "/assets/properties/property-15-3.jpg",
    ],
    allowedUses: [
      { name: "Single-family home", allowed: true },
      { name: "Potential two-unit (SB-9) pathway", allowed: true },
      { name: "Group care facility (up to 6 people)", allowed: true },
      { name: "Employee / farmworker housing", allowed: true },
      { name: "Camping / RV living", allowed: false },
      { name: "Mobile homes (with permanent foundation + permits)", allowed: true },
    ],
  },
];
