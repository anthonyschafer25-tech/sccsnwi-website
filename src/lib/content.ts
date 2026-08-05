// Structured content for all service and city pages
// Used by the dynamic [slug] route to generate ~110 pages

export interface ServiceContent {
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: {
    heading: string;
    body: string;
  }[];
  relatedServices: string[];
}

export const SERVICES: Record<string, ServiceContent> = {
  "water-damage-restoration": {
    slug: "water-damage-restoration",
    title: "Water Damage Restoration",
    description:
      "Emergency water damage restoration in NW Indiana. 24/7 water extraction, structural drying, and full restoration. IICRC certified. Call (219) 779-8198.",
    heroTitle: "Water damage stops here.",
    heroSubtitle:
      "Emergency water extraction and complete structural drying. We respond within 60 minutes, 24 hours a day.",
    sections: [
      {
        heading: "When water damage happens",
        body: "Whether from a burst pipe, appliance failure, storm flooding, or sewage backup, water damage escalates fast. Within hours, water spreads through walls, floors, and cavities. Within days, mold can begin growing. Our IICRC-certified technicians arrive quickly with industrial-grade extraction and drying equipment to stop the damage and begin restoration.",
      },
      {
        heading: "Our water damage process",
        body: "1. Emergency contact and dispatch. 2. Water extraction using truck-mounted and portable units. 3. Moisture mapping with thermal imaging and moisture meters. 4. Structural drying with high-volume air movers and dehumidifiers. 5. Sanitization and antimicrobial treatment. 6. Restoration and reconstruction as needed.",
      },
      {
        heading: "We work with your insurance",
        body: "We document everything and work directly with your insurance company. Our detailed reports, moisture readings, and photo documentation help ensure your claim is processed correctly.",
      },
    ],
    relatedServices: [
      "flood-clean-up",
      "water-removal",
      "structural-drying",
      "mold-remediation",
      "content-cleaning-storage",
    ],
  },
  "fire-damage-restoration": {
    slug: "fire-damage-restoration",
    title: "Fire Damage Restoration",
    description:
      "Professional fire damage restoration in NW Indiana. Smoke cleanup, soot removal, structural repairs. 24/7 emergency response. Call (219) 779-8198.",
    heroTitle: "After the fire, we rebuild.",
    heroSubtitle:
      "Complete fire damage restoration including smoke cleanup, soot removal, structural repairs, and content restoration.",
    sections: [
      {
        heading: "Fire damage is more than what burned",
        body: "Smoke and soot penetrate far beyond the visible fire damage, embedding in walls, carpets, furniture, and HVAC systems. Within hours, acidic soot residues begin permanently damaging surfaces. Our certified fire restoration team acts fast to assess the full extent of damage, secure the property, and begin cleanup.",
      },
      {
        heading: "Our fire restoration process",
        body: "1. Emergency board-up and tarping to secure the property. 2. Damage assessment and inventory. 3. Water removal from firefighting efforts. 4. Smoke and soot cleanup using specialized techniques. 5. Odor removal with thermal fogging and ozone treatment. 6. Content cleaning, pack-out, and storage. 7. Structural repairs and reconstruction.",
      },
      {
        heading: "Smoke damage you can't see",
        body: "Smoke travels through wall cavities, electrical outlets, and ductwork. We use thermal fogging, air scrubbers, and specialized cleaning agents to reach smoke residue that surface cleaning misses. For properties with HVAC systems, we inspect and clean ductwork to prevent recontamination.",
      },
    ],
    relatedServices: [
      "smoke-damage",
      "soot-removal",
      "smoke-testing",
      "content-cleaning-storage",
      "structural-drying",
    ],
  },
  "mold-inspection-and-testing": {
    slug: "mold-inspection-and-testing",
    title: "Mold Inspection and Testing",
    description:
      "Advanced particle-ID mold testing in NW Indiana. Find hidden mold other inspections miss. IICRC certified. Call (219) 779-8198.",
    heroTitle: "Find the mold other tests miss.",
    heroSubtitle:
      "Advanced particle-ID mold testing goes beyond standard air samples to identify exactly what's growing and where.",
    sections: [
      {
        heading: "Why standard mold tests fall short",
        body: "Standard air samples and surface swabs often miss mold growing behind walls, in crawl spaces, and inside HVAC systems. They tell you mold is present but not exactly what species, how much, or where it originated. Our particle-ID technology identifies mold at the microscopic level, giving you a complete picture.",
      },
      {
        heading: "Our mold testing process",
        body: "1. Visual inspection of the entire property. 2. Moisture mapping using thermal imaging and moisture meters. 3. Air quality sampling with spore trap analysis. 4. Surface sampling with tape lifts and swabs. 5. Particle-ID analysis for species identification. 6. Detailed lab report with findings and recommendations.",
      },
      {
        heading: "When to test for mold",
        body: "Test if you notice a musty smell with no visible source, have had water damage in the past year, see discoloration on walls or ceilings, or have family members with unexplained respiratory issues. Mold often grows where you can't see it.",
      },
    ],
    relatedServices: [
      "mold-remediation",
      "mold-mitigation",
      "air-quality-testing-to-measure-mold-levels",
      "water-damage-restoration",
    ],
  },
  "mold-remediation": {
    slug: "mold-remediation",
    title: "Mold Remediation",
    description:
      "Professional mold remediation in NW Indiana. Complete mold removal with containment, HEPA filtration, and source elimination. Call (219) 779-8198.",
    heroTitle: "Remove mold at the source.",
    heroSubtitle:
      "Complete mold remediation with containment, HEPA air filtration, and source elimination. Not just cleanup.",
    sections: [
      {
        heading: "Why mold keeps coming back",
        body: "Most mold 'removal' only addresses visible growth. Without solving the moisture problem and removing spores from the air, mold returns within weeks. Our remediation targets the root cause: we identify and fix the moisture source, contain the affected area, filter the air, remove contaminated materials, and treat surfaces to prevent regrowth.",
      },
      {
        heading: "Our remediation process",
        body: "1. Containment of the affected area with negative air pressure. 2. HEPA air filtration to capture airborne spores. 3. Removal of contaminated porous materials. 4. HEPA vacuuming and antimicrobial treatment of structural materials. 5. Moisture source correction. 6. Post-remediation verification testing.",
      },
    ],
    relatedServices: [
      "mold-inspection-and-testing",
      "mold-mitigation",
      "water-damage-restoration",
      "structural-drying",
    ],
  },
  "mold-mitigation": {
    slug: "mold-mitigation",
    title: "Mold Mitigation",
    description:
      "Prevent future mold growth in your NW Indiana property. Moisture control, ventilation improvement, and preventative treatment. Call (219) 779-8198.",
    heroTitle: "Stop mold before it starts.",
    heroSubtitle:
      "Preventative moisture control, ventilation improvement, and antimicrobial treatment to keep mold from returning.",
    sections: [
      {
        heading: "Prevention is better than remediation",
        body: "After mold remediation, or in properties at risk for mold growth, mitigation measures prevent future problems. We assess moisture sources, ventilation, humidity levels, and building envelope integrity to create a prevention plan.",
      },
      {
        heading: "Mitigation services",
        body: "Crawl space encapsulation. Dehumidifier installation. Ventilation improvement. Vapor barrier installation. Sump pump systems. Antimicrobial preventative treatments. Moisture monitoring systems.",
      },
    ],
    relatedServices: [
      "mold-remediation",
      "mold-inspection-and-testing",
      "water-damage-restoration",
      "structural-drying",
    ],
  },
  "smoke-damage": {
    slug: "smoke-damage",
    title: "Smoke Damage Restoration",
    description:
      "Professional smoke damage cleanup in NW Indiana. Residue removal, thermal fogging, ozone treatment. Call (219) 779-8198.",
    heroTitle: "Clear the smoke for good.",
    heroSubtitle:
      "Complete smoke residue cleanup, thermal fogging, and ozone treatment to eliminate smoke damage and odor.",
    sections: [
      {
        heading: "Smoke damage is corrosive",
        body: "Smoke residue is acidic and begins corroding surfaces within hours. Metal fixtures tarnish, paint discolors, and fabrics become permanently stained. Quick action prevents permanent damage.",
      },
      {
        heading: "Our smoke damage process",
        body: "1. Assessment of affected areas and materials. 2. Dry sponge cleaning for loose soot. 3. Wet cleaning with specialized degreasers. 4. Thermal fogging to neutralize embedded odors. 5. Ozone or hydroxyl treatment for persistent odors. 6. Air scrubbing with HEPA filtration.",
      },
    ],
    relatedServices: [
      "fire-damage-restoration",
      "soot-removal",
      "smoke-testing",
      "content-cleaning-storage",
    ],
  },
  "smoke-testing": {
    slug: "smoke-testing",
    title: "Smoke Testing",
    description:
      "Professional smoke testing in NW Indiana to identify hidden smoke pathways and damage. Call (219) 779-8198.",
    heroTitle: "Find smoke where you can't see it.",
    heroSubtitle:
      "Specialized testing to identify hidden smoke pathways, assess damage extent, and plan effective restoration.",
    sections: [
      {
        heading: "Why smoke testing matters",
        body: "After a fire, smoke travels through wall cavities, electrical conduits, plumbing chases, and HVAC ductwork. What looks like minor damage in one room may mask extensive hidden smoke contamination throughout the structure. Testing identifies the full extent before restoration begins, preventing costly surprises later.",
      },
      {
        heading: "Testing methods",
        body: "Thermal imaging to detect temperature anomalies indicating hidden damage. Borescope inspection of wall cavities. Air sampling for particulate analysis. Surface pH testing to measure corrosive residue. HVAC system inspection and testing.",
      },
    ],
    relatedServices: [
      "fire-damage-restoration",
      "smoke-damage",
      "soot-removal",
    ],
  },
  "soot-removal": {
    slug: "soot-removal",
    title: "Soot Removal",
    description:
      "Professional soot removal in NW Indiana. Complete cleanup of walls, ceilings, contents, and HVAC systems. Call (219) 779-8198.",
    heroTitle: "Remove every trace of soot.",
    heroSubtitle:
      "Professional soot cleanup from walls, ceilings, contents, and HVAC systems using specialized techniques.",
    sections: [
      {
        heading: "Soot is not just dirt",
        body: "Soot contains acidic compounds that etch glass, corrode metal, and permanently stain porous surfaces. Different types of soot, wet or dry, protein or petroleum-based, require different cleaning approaches. Using the wrong method can make the damage worse.",
      },
      {
        heading: "Our soot removal process",
        body: "1. Identify soot type to determine the correct cleaning method. 2. HEPA vacuuming of loose soot particles. 3. Dry chemical sponge cleaning for initial residue removal. 4. Wet cleaning with appropriate degreasing agents. 5. HVAC system cleaning to prevent recontamination. 6. Final air scrubbing.",
      },
    ],
    relatedServices: [
      "fire-damage-restoration",
      "smoke-damage",
      "content-cleaning-storage",
    ],
  },
  "structural-drying": {
    slug: "structural-drying",
    title: "Structural Drying",
    description:
      "Professional structural drying in NW Indiana. Industrial dehumidification and air movement. IICRC certified. Call (219) 779-8198.",
    heroTitle: "Dry it right, dry it fast.",
    heroSubtitle:
      "Industrial-grade dehumidification and high-volume air movement to dry building materials completely.",
    sections: [
      {
        heading: "Why complete drying matters",
        body: "Surfaces may feel dry to the touch while structural materials underneath remain saturated. Wood framing, subflooring, and drywall can harbor moisture for weeks, leading to warping, deterioration, and mold growth. Proper structural drying requires professional equipment and monitoring.",
      },
      {
        heading: "Our drying process",
        body: "1. Moisture mapping with thermal imaging and penetrating meters. 2. Strategic placement of high-volume air movers. 3. Commercial dehumidification (refrigerant or desiccant as needed). 4. Daily moisture monitoring with documented readings. 5. Equipment adjustment based on drying progress. 6. Final verification that materials have reached dry standard.",
      },
    ],
    relatedServices: [
      "water-damage-restoration",
      "flood-clean-up",
      "water-removal",
      "mold-remediation",
    ],
  },
  "content-cleaning-storage": {
    slug: "content-cleaning-storage",
    title: "Content Cleaning and Storage",
    description:
      "Professional content cleaning and secure storage in NW Indiana. Pack-out, cleaning, and storage during restoration. Call (219) 779-8198.",
    heroTitle: "Your belongings, cleaned and safe.",
    heroSubtitle:
      "Professional pack-out, cleaning, and secure storage of personal belongings during restoration.",
    sections: [
      {
        heading: "More than just moving boxes",
        body: "During water or fire restoration, your belongings need to be protected from further damage and cleaned of soot, smoke residue, or mold contamination. Our content restoration team carefully inventories, packs, cleans, and stores your items until your property is ready.",
      },
      {
        heading: "Our content services",
        body: "Complete inventory with photo documentation. Professional packing and transport. Ultrasonic cleaning for non-porous items. Dry cleaning for soft goods. Ozone treatment for odor removal. Climate-controlled secure storage. Return and replacement when restoration is complete.",
      },
    ],
    relatedServices: [
      "fire-damage-restoration",
      "water-damage-restoration",
      "mold-remediation",
    ],
  },
  "flood-clean-up": {
    slug: "flood-clean-up",
    title: "Flood Clean Up",
    description:
      "Emergency flood clean up in NW Indiana. Rapid water removal, sanitization, and drying. 24/7 response. Call (219) 779-8198.",
    heroTitle: "Flood water out. Fast.",
    heroSubtitle:
      "Emergency flood water removal, sanitization, and complete drying. We handle the contaminated water so you don't have to.",
    sections: [
      {
        heading: "Flood water is dangerous",
        body: "Flood water often contains sewage, chemicals, and bacteria. Category 3 water (black water) requires special handling, protective equipment, and thorough sanitization. Do not attempt to clean flood water yourself without proper protection.",
      },
      {
        heading: "Our flood cleanup process",
        body: "1. Safety assessment and category classification. 2. Water extraction with high-capacity pumps. 3. Removal of unsalvageable contaminated materials. 4. Antimicrobial and disinfectant application. 5. Structural drying with industrial equipment. 6. Post-remediation verification.",
      },
    ],
    relatedServices: [
      "water-damage-restoration",
      "water-removal",
      "structural-drying",
      "mold-remediation",
    ],
  },
  "water-removal": {
    slug: "water-removal",
    title: "Water Removal",
    description:
      "Emergency water removal in NW Indiana. High-capacity extraction of standing water. 24/7 response. Call (219) 779-8198.",
    heroTitle: "Standing water out. Now.",
    heroSubtitle:
      "High-capacity truck-mounted and portable extraction units remove standing water fast to limit damage.",
    sections: [
      {
        heading: "Every minute counts",
        body: "Standing water seeps into flooring, wicks up drywall, and saturates structural materials. The longer it sits, the more extensive and expensive the damage becomes. Our high-capacity extraction equipment removes hundreds of gallons per minute.",
      },
      {
        heading: "Our extraction equipment",
        body: "Truck-mounted extraction units for large volumes. Portable extraction for tight or multi-story access. Submersible pumps for deep standing water. Weighted extraction tools for carpet. Hard surface wands for hardwood and tile.",
      },
    ],
    relatedServices: [
      "water-damage-restoration",
      "flood-clean-up",
      "structural-drying",
    ],
  },
  "junk-removal": {
    slug: "junk-removal",
    title: "Junk Removal",
    description:
      "Junk removal in NW Indiana. Removal and disposal of damaged materials, debris, and unwanted items. Call (219) 779-8198.",
    heroTitle: "Clear the debris.",
    heroSubtitle:
      "Removal and responsible disposal of damaged materials, construction debris, and unwanted items.",
    sections: [
      {
        heading: "Post-disaster cleanup",
        body: "After water or fire damage, you're often left with saturated carpet, damaged drywall, ruined furniture, and construction debris. We remove and dispose of it all, sorting recyclable materials when possible.",
      },
      {
        heading: "What we remove",
        body: "Water-damaged carpet, pad, and flooring. Fire-damaged materials. Drywall and insulation. Furniture and appliances. Construction debris. General household junk.",
      },
    ],
    relatedServices: [
      "water-damage-restoration",
      "fire-damage-restoration",
      "content-cleaning-storage",
    ],
  },
  "crime-scene-cleanup": {
    slug: "crime-scene-cleanup",
    title: "Crime Scene Cleanup",
    description:
      "Discreet crime scene and trauma cleanup in NW Indiana. Certified biohazard remediation. 24/7 availability. Call (219) 779-8198.",
    heroTitle: "We handle what no one should have to.",
    heroSubtitle:
      "Discreet, certified biohazard and trauma scene remediation. Available 24/7 with complete confidentiality.",
    sections: [
      {
        heading: "Compassionate, professional cleanup",
        body: "Crime scene and trauma cleanup requires specialized training, equipment, and a compassionate approach. Our technicians are certified in biohazard remediation and handle each situation with the discretion and respect your family deserves during a difficult time.",
      },
      {
        heading: "Our trauma cleanup services",
        body: "Biohazard remediation and disposal. Bloodborne pathogen cleanup. Tear gas and fingerprint dust cleanup. Odor removal and sanitization. Complete restoration to safe, habitable condition. We work discreetly with unmarked vehicles and can coordinate with law enforcement and insurance.",
      },
    ],
    relatedServices: [
      "content-cleaning-storage",
      "structural-drying",
    ],
  },
  "air-quality-testing-to-measure-mold-levels": {
    slug: "air-quality-testing-to-measure-mold-levels",
    title: "Air Quality Testing",
    description:
      "Indoor air quality testing in NW Indiana. Measure mold spore levels and identify contamination. Call (219) 779-8198.",
    heroTitle: "Know what you're breathing.",
    heroSubtitle:
      "Indoor air quality testing to measure mold spore levels, identify contamination, and guide remediation.",
    sections: [
      {
        heading: "Indoor air can be worse than outdoor",
        body: "Modern homes are built tight for energy efficiency, which can trap contaminants indoors. Mold spores, VOCs, and particulates accumulate without proper ventilation. Air quality testing identifies what's in your air and at what concentration.",
      },
      {
        heading: "What we test for",
        body: "Mold spore types and concentrations. Comparison of indoor vs. outdoor baseline levels. Particulate matter (PM2.5, PM10). Volatile organic compounds (VOCs). Carbon dioxide levels indicating poor ventilation. Humidity levels affecting mold growth potential.",
      },
    ],
    relatedServices: [
      "mold-inspection-and-testing",
      "mold-remediation",
      "mold-mitigation",
    ],
  },
};

// City content for location pages
export interface CityContent {
  slug: string;
  name: string;
  county: string;
  description: string;
}

export const CITIES: CityContent[] = [
  { slug: "valparaiso", name: "Valparaiso", county: "Porter", description: "County seat of Porter County. SCCS NWI headquarters." },
  { slug: "portage", name: "Portage", county: "Porter", description: "Located on the southern shore of Lake Michigan." },
  { slug: "chesterton", name: "Chesterton", county: "Porter", description: "Gateway to the Indiana Dunes." },
  { slug: "michigan-city", name: "Michigan City", county: "La Porte", description: "Lake Michigan community with historic districts." },
  { slug: "crown-point", name: "Crown Point", county: "Lake", description: "County seat of Lake County." },
  { slug: "merrillville", name: "Merrillville", county: "Lake", description: "Major retail hub for Northwest Indiana." },
  { slug: "hobart", name: "Hobart", county: "Lake", description: "Located along the Deep River." },
  { slug: "la-porte", name: "La Porte", county: "La Porte", description: "County seat of La Porte County." },
  { slug: "gary", name: "Gary", county: "Lake", description: "Largest city in Northwest Indiana." },
  { slug: "hammond", name: "Hammond", county: "Lake", description: "Located along the Illinois border." },
  { slug: "schererville", name: "Schererville", county: "Lake", description: "Growing commercial center in Lake County." },
  { slug: "munster", name: "Munster", county: "Lake", description: "Suburban community bordering Illinois." },
  { slug: "highland", name: "Highland", county: "Lake", description: "Located along the Little Calumet River." },
  { slug: "griffith", name: "Griffith", county: "Lake", description: "Historic railroad town." },
  { slug: "dyer", name: "Dyer", county: "Lake", description: "Located on the Illinois-Indiana state line." },
  { slug: "saint-john", name: "Saint John", county: "Lake", description: "Growing community in central Lake County." },
  { slug: "cedar-lake", name: "Cedar Lake", county: "Lake", description: "Centered around the lake of the same name." },
  { slug: "lowell", name: "Lowell", county: "Lake", description: "Located in southern Lake County." },
  { slug: "east-chicago", name: "East Chicago", county: "Lake", description: "Industrial city on Lake Michigan." },
  { slug: "whiting", name: "Whiting", county: "Lake", description: "Home of the Pierogi Fest." },
  { slug: "lake-station", name: "Lake Station", county: "Lake", description: "Located along the Deep River." },
  { slug: "winfield", name: "Winfield", county: "Lake", description: "Located in central Lake County." },
  { slug: "hebron", name: "Hebron", county: "Porter", description: "Located in southern Porter County." },
  { slug: "kouts", name: "Kouts", county: "Porter", description: "Located in southern Porter County." },
  { slug: "porter", name: "Porter", county: "Porter", description: "Town adjacent to Indiana Dunes State Park." },
  { slug: "wheeler", name: "Wheeler", county: "Porter", description: "Located in central Porter County." },
  { slug: "south-haven", name: "South Haven", county: "Porter", description: "Located in northern Porter County." },
  { slug: "lakes-of-the-four-seasons", name: "Lakes of the Four Seasons", county: "Porter", description: "Private community in Porter County." },
  { slug: "westville", name: "Westville", county: "La Porte", description: "Located in central La Porte County." },
  { slug: "demotte", name: "DeMotte", county: "Jasper", description: "Located in Jasper County, near the Porter County line." },
  { slug: "wheatfield", name: "Wheatfield", county: "Jasper", description: "Located in Jasper County." },
  { slug: "rensselaer", name: "Rensselaer", county: "Jasper", description: "County seat of Jasper County." },
  { slug: "remington", name: "Remington", county: "Jasper", description: "Located in southern Jasper County." },
  { slug: "miller-beach", name: "Miller Beach", county: "Lake", description: "Lakefront neighborhood of Gary." },
];

// Generate city-service combo pages like "mold-inspection-and-testing-portage-in"
export interface CityServicePage {
  oldSlug: string;
  service: string;
  city: string;
  cityName: string;
  serviceTitle: string;
}

export const CITY_SERVICE_PAGES: CityServicePage[] = [
  // Mold
  { oldSlug: "mold-inspection-and-testing-portage-in", service: "mold-inspection-and-testing", city: "portage", cityName: "Portage", serviceTitle: "Mold Inspection and Testing" },
  { oldSlug: "mold-inspection-and-testing-valparaiso", service: "mold-inspection-and-testing", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Mold Inspection and Testing" },
  { oldSlug: "mold-remediation-valparaiso-in", service: "mold-remediation", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Mold Remediation" },
  { oldSlug: "mold-mitigation-valparaiso", service: "mold-mitigation", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Mold Mitigation" },
  { oldSlug: "mold-removal-chesterton-in", service: "mold-remediation", city: "chesterton", cityName: "Chesterton", serviceTitle: "Mold Remediation" },
  { oldSlug: "mold-removal-portage--in", service: "mold-remediation", city: "portage", cityName: "Portage", serviceTitle: "Mold Remediation" },
  // Water
  { oldSlug: "water-damage-restoration-portage-in", service: "water-damage-restoration", city: "portage", cityName: "Portage", serviceTitle: "Water Damage Restoration" },
  { oldSlug: "water-damage-restoration-valparaiso", service: "water-damage-restoration", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Water Damage Restoration" },
  { oldSlug: "water-damage-restoration-in-chesterton-in", service: "water-damage-restoration", city: "chesterton", cityName: "Chesterton", serviceTitle: "Water Damage Restoration" },
  { oldSlug: "water-removal-chesterton", service: "water-removal", city: "chesterton", cityName: "Chesterton", serviceTitle: "Water Removal" },
  { oldSlug: "water-removal-valparaiso", service: "water-removal", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Water Removal" },
  { oldSlug: "flood-clean-up-in-chesterton-in", service: "flood-clean-up", city: "chesterton", cityName: "Chesterton", serviceTitle: "Flood Clean Up" },
  { oldSlug: "flood-clean-up-in-portage-in", service: "flood-clean-up", city: "portage", cityName: "Portage", serviceTitle: "Flood Clean Up" },
  { oldSlug: "flood-clean-up-in-valparaiso-in", service: "flood-clean-up", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Flood Clean Up" },
  // Fire
  { oldSlug: "fire-damage-restoration-chesterton--in", service: "fire-damage-restoration", city: "chesterton", cityName: "Chesterton", serviceTitle: "Fire Damage Restoration" },
  { oldSlug: "fire-damage-restoration-valparaiso-in", service: "fire-damage-restoration", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Fire Damage Restoration" },
  { oldSlug: "smoke-damage-chesterton-in", service: "smoke-damage", city: "chesterton", cityName: "Chesterton", serviceTitle: "Smoke Damage Restoration" },
  { oldSlug: "smoke-damage-valparaiso-in", service: "smoke-damage", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Smoke Damage Restoration" },
  { oldSlug: "smoke-testing-chesterton-in", service: "smoke-testing", city: "chesterton", cityName: "Chesterton", serviceTitle: "Smoke Testing" },
  { oldSlug: "smoke-testing-valparaiso-in", service: "smoke-testing", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Smoke Testing" },
  { oldSlug: "soot-removal-chesterton-in", service: "soot-removal", city: "chesterton", cityName: "Chesterton", serviceTitle: "Soot Removal" },
  { oldSlug: "soot-removal-valparaiso-in", service: "soot-removal", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Soot Removal" },
  // Structural
  { oldSlug: "structural-drying-in-chesterton", service: "structural-drying", city: "chesterton", cityName: "Chesterton", serviceTitle: "Structural Drying" },
  { oldSlug: "structural-drying-valparaiso", service: "structural-drying", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Structural Drying" },
  // Content cleaning
  { oldSlug: "content-cleaning-storage-chesterton-in", service: "content-cleaning-storage", city: "chesterton", cityName: "Chesterton", serviceTitle: "Content Cleaning and Storage" },
  { oldSlug: "content-cleaning-storage-valparaiso-in", service: "content-cleaning-storage", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Content Cleaning and Storage" },
  // Junk
  { oldSlug: "junk-removal-chesterton", service: "junk-removal", city: "chesterton", cityName: "Chesterton", serviceTitle: "Junk Removal" },
  { oldSlug: "junk-removal-michigan-city--in", service: "junk-removal", city: "michigan-city", cityName: "Michigan City", serviceTitle: "Junk Removal" },
  { oldSlug: "junk-removal-merrillville-in", service: "junk-removal", city: "merrillville", cityName: "Merrillville", serviceTitle: "Junk Removal" },
  { oldSlug: "junk-removal-portage", service: "junk-removal", city: "portage", cityName: "Portage", serviceTitle: "Junk Removal" },
  { oldSlug: "junk-removal-valparaiso", service: "junk-removal", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Junk Removal" },
  // Trauma
  { oldSlug: "trauma-and-crime-scene-cleanup-chesterton", service: "crime-scene-cleanup", city: "chesterton", cityName: "Chesterton", serviceTitle: "Crime Scene Cleanup" },
  { oldSlug: "trauma-and-crime-scene-cleanup-hobart--in", service: "crime-scene-cleanup", city: "hobart", cityName: "Hobart", serviceTitle: "Crime Scene Cleanup" },
  { oldSlug: "trauma-and-crime-scene-cleanup-michigan-city-in", service: "crime-scene-cleanup", city: "michigan-city", cityName: "Michigan City", serviceTitle: "Crime Scene Cleanup" },
  { oldSlug: "trauma-and-crime-scene-cleanup-portage-in", service: "crime-scene-cleanup", city: "portage", cityName: "Portage", serviceTitle: "Crime Scene Cleanup" },
  { oldSlug: "trauma-and-crime-scene-cleanup-valparaiso--indiana", service: "crime-scene-cleanup", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Crime Scene Cleanup" },
  { oldSlug: "trauma-and-crime-scene-cleanup-valparaiso-in", service: "crime-scene-cleanup", city: "valparaiso", cityName: "Valparaiso", serviceTitle: "Crime Scene Cleanup" },
];
