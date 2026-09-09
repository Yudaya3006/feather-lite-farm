/**
 * Central Business Configuration - Feather Lite Farm
 * 
 * IMPORTANT INSTRUCTION FOR FARM OWNER:
 * This file is the single source of truth for all editable business information,
 * contact details, products, location settings, and social links.
 * 
 * Replace the bracketed placeholders (e.g. '[PHONE NUMBER]', '[CITY]', '[PRICE]')
 * with your real farm information when ready to go live.
 */

export const farmConfig = {
  // Brand Identity
  brand: {
    name: "Feather Lite Farm",
    tagline: "Fresh Quail Eggs Directly From Our Farm",
    description: "Dedicated quail egg farm providing fresh quail eggs direct to families, local food enthusiasts, restaurants, and retail partners.",
    websiteUrl: "https://featherlitefarm.com", // [WEBSITE_URL]
  },

  // Contact & Social Channels
  contact: {
    phone: "+91 91779 04194",
    phoneRaw: "+919177904194",
    whatsappNumber: "919177904194",
    whatsappDisplay: "+91 91779 04194",
    email: "chelluriramasiva@gmail.com",
    instagramUrl: "https://instagram.com",
    instagramHandle: "@featherlitefarm",
  },

  // Farm Location & Local SEO Setup
  location: {
    farmAddress: "Erode, Tamil Nadu, India",
    city: "Erode",
    state: "Tamil Nadu",
    country: "India",
    fullLocation: "Erode, Tamil Nadu, India",
    serviceArea: "Erode, Tamil Nadu, India",
    googleMapsUrl: "https://maps.google.com/?q=Erode,+Tamil+Nadu,+India",
    openingHours: "Open daily: 6:00 AM - 7:00 PM",
    openingHoursShort: "6:00 AM - 7:00 PM",
    deliveryInfo: "Contact farm directly for availability and ordering guidance.",
  },

  // Dynamic Product Catalog (Add, remove, or edit pack sizes & prices here)
  products: [
    {
      id: "quail-pack-standard",
      name: "Fresh Quail Eggs",
      packSize: "[PACK SIZE]",
      description: "Carefully selected fresh quail eggs packed securely for quality and freshness.",
      price: "[PRICE]",
      badge: "Popular Selection",
      isAvailable: true,
      featured: true,
    },
    {
      id: "quail-pack-family",
      name: "Fresh Quail Eggs — Family Pack",
      packSize: "[PACK SIZE]",
      description: "Ideal pack size for households and regular culinary use, ensuring continuous farm freshness.",
      price: "[PRICE]",
      badge: "Value Pack",
      isAvailable: true,
      featured: true,
    },
    {
      id: "quail-pack-bulk",
      name: "Fresh Quail Eggs — Bulk / Commercial Crate",
      packSize: "[PACK SIZE]",
      description: "Larger volume crates suited for restaurants, caterers, bakeries, gourmet grocers, and bulk buyers.",
      price: "[PRICE]",
      badge: "Bulk / Wholesale",
      isAvailable: true,
      featured: true,
    },
  ],

  // Farm Operational Information & Story Placeholders
  about: {
    storyHeading: "Cultivating Quality Quail Eggs",
    farmStory: "[FARM STORY / ABOUT THE FARM — Enter your farm founding story, vision, and passion here.]",
    whoWeAre: "[WHO WE ARE — Describe the farm team, family, or founders.]",
    whatWeDo: "[WHAT WE DO — Provide details on your everyday quail farming focus.]",
    quailCare: "[BIRD CARE & HOUSING PRACTICES — Detail how your quails are raised, sheltered, and looked after.]",
    eggCollection: "[COLLECTION PROCESS — Detail how eggs are collected daily and sorted.]",
    eggHandling: "[EGG HANDLING & QUALITY INSPECTION — Explain your inspection, sorting, and cleaning routines.]",
    packaging: "[PACKAGING INFORMATION — Describe your protective, clean packaging choices.]",
    qualityFocus: "[QUALITY FOCUS — Detail your dedication to freshness, customer service, and food safety standards.]",
  },

  // Real Customer Reviews (Leave empty until verified reviews are collected. Never use fictional reviews.)
  testimonials: [],

  // Frequently Asked Questions (Starter Config Content — Easy to Edit)
  faqs: [
    {
      id: "faq-1",
      category: "General Information",
      question: "What are quail eggs?",
      answer: "Quail eggs are small eggs produced by quails. They have naturally speckled shells and can be used in many different dishes."
    },
    {
      id: "faq-2",
      category: "General Information",
      question: "How are quail eggs different from chicken eggs?",
      answer: "Quail eggs are smaller than chicken eggs and have distinctive speckled shells. They are commonly used in appetizers, salads, breakfast dishes, and other recipes."
    },
    {
      id: "faq-3",
      category: "Culinary & Cooking",
      question: "How can I cook quail eggs?",
      answer: "Quail eggs can be prepared in several ways, including boiling, frying, scrambling, and using them in different recipes. Cooking time will vary depending on the preparation method."
    },
    {
      id: "faq-4",
      category: "Culinary & Cooking",
      question: "What can I make with quail eggs?",
      answer: "Quail eggs can be used in salads, appetizers, breakfast dishes, snacks, and many other recipes."
    },
    {
      id: "faq-5",
      category: "Ordering & Pack Options",
      question: "How many quail eggs should I buy?",
      answer: "The appropriate quantity depends on how you plan to use them. Available Feather Lite Farm pack sizes will be added here later."
    },
    {
      id: "faq-6",
      category: "Ordering & Contact",
      question: "How can I order quail eggs from Feather Lite Farm?",
      answer: "You can contact Feather Lite Farm through WhatsApp (+91 91779 04194) or phone (+91 91779 04194) to ask about current availability and place an order."
    },
    {
      id: "faq-7",
      category: "Ordering & Pack Options",
      question: "What pack sizes are available?",
      answer: "Available pack sizes ([PACK SIZE]) will be listed here once the current Feather Lite Farm product options are added."
    },
    {
      id: "faq-8",
      category: "Ordering & Pack Options",
      question: "Do you accept bulk orders?",
      answer: "Bulk-order availability can vary. Contact Feather Lite Farm through WhatsApp (+91 91779 04194) for current information."
    },
    {
      id: "faq-9",
      category: "Location & Delivery",
      question: "Do you provide delivery?",
      answer: "Delivery availability depends on the location and current service area. Contact Feather Lite Farm for ordering and delivery details."
    },
    {
      id: "faq-10",
      category: "Location & Delivery",
      question: "Where is Feather Lite Farm located?",
      answer: "Feather Lite Farm is located in Erode, Tamil Nadu, India."
    },
    {
      id: "faq-11",
      category: "Ordering & Contact",
      question: "How can I contact Feather Lite Farm?",
      answer: "Customers can contact Feather Lite Farm through WhatsApp (+91 91779 04194), phone (+91 91779 04194), email (chelluriramasiva@gmail.com), Instagram (@featherlitefarm), or the website contact form."
    },
    {
      id: "faq-12",
      category: "Handling & Storage",
      question: "How should quail eggs be stored?",
      answer: "Storage instructions should be based on the actual handling and storage practices recommended by Feather Lite Farm. Replace this temporary answer with the farm's verified guidance later."
    }
  ],

  // Gallery Items (Placeholders prepared for real farm photography)
  gallery: [
    {
      id: "gal-1",
      category: "birds",
      title: "Quail Birds & Aviary",
      description: "Our healthy quail flock in their dedicated farm environment.",
      alt: "Quail birds at Feather Lite Farm aviary",
      placeholderType: "quail_birds"
    },
    {
      id: "gal-2",
      category: "eggs",
      title: "Fresh Speckled Quail Eggs",
      description: "Naturally patterned, freshly gathered quail eggs with robust shells.",
      alt: "Freshly gathered speckled quail eggs at Feather Lite Farm",
      placeholderType: "fresh_eggs"
    },
    {
      id: "gal-3",
      category: "packaging",
      title: "Careful Packaging",
      description: "Packed securely in protective cartons to guarantee intact delivery.",
      alt: "Clean secure packaging for fresh quail eggs",
      placeholderType: "packaging"
    },
    {
      id: "gal-4",
      category: "collection",
      title: "Egg Collection & Sorting",
      description: "Careful collection and gentle handling on the farm.",
      alt: "Daily egg handling and sorting at Feather Lite Farm",
      placeholderType: "collection"
    },
    {
      id: "gal-5",
      category: "farm",
      title: "Farm Environment",
      description: "The serene grounds and facilities of Feather Lite Farm.",
      alt: "Feather Lite Farm facility and grounds",
      placeholderType: "farm_grounds"
    },
    {
      id: "gal-6",
      category: "culinary",
      title: "Culinary Inspiration",
      description: "Gourmet dishes prepared with fresh farm quail eggs.",
      alt: "Delicious culinary preparations with fresh quail eggs",
      placeholderType: "culinary"
    }
  ],

  // Helper Functions
  getWhatsAppUrl(customMessage = null) {
    const rawNumber = this.contact.whatsappNumber.replace(/[^0-9]/g, '');
    const defaultMsg = "Hello Feather Lite Farm, I would like to order quail eggs.";
    const message = encodeURIComponent(customMessage || defaultMsg);
    
    // If number is still a placeholder, link to contact page or generic wa.me prompt
    if (!rawNumber || rawNumber.length < 5) {
      return `https://wa.me/?text=${message}`;
    }
    return `https://wa.me/${rawNumber}?text=${message}`;
  },

  getPhoneUrl() {
    const rawPhone = this.contact.phoneRaw || this.contact.phone.replace(/[^0-9+]/g, '');
    if (!rawPhone || rawPhone.includes('[')) {
      return "#";
    }
    return `tel:${rawPhone}`;
  }
};
