"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "lt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.main": "Main",
    "nav.about": "About us",
    "nav.collections": "Collections",
    "nav.payment": "Payment and delivery",
    "nav.contacts": "Contacts",
    "nav.premium": "Premium Porcelain Tiles",
    "lang.english": "English",
    "lang.lithuanian": "Lithuanian",

    // Banner
    "banner.title": "Duniesi Porcelain Tile manufacturer of collectible ceramic tiles and porcelain tiles in Vilnius and the Vilnius region.",
    "banner.feature1": "Over 50 exquisite collections",
    "banner.feature2": "European design",
    "banner.feature3": "Manufacturer prices",
    "banner.feature4": "Direct deliveries",
    "banner.feature5": "Swiss quality",
    "banner.cta": "Go to catalog",

    // About Company
    "about.title": "About our company",
    "about.description": "Duniesi Porcelain Tiles is the official, exclusive partner of Prime Ceramics JV LLC, a manufacturer specializing in the production and distribution of high-quality porcelain tiles in Vilnius and the Vilnius region.",
    "about.feature1.title": "Italian Equipment",
    "about.feature1.desc": "Our tiles are manufactured using modern Italian equipment and high-quality raw materials, ensuring they fully comply with all construction standards and environmental requirements.",
    "about.feature2.title": "Variety",
    "about.feature2.desc": "Always closely monitoring trends, Prime Ceramics offers a wide selection of products, finishes, and formats for all types of projects.",
    "about.feature3.title": "Premium Quality",
    "about.feature3.desc": "All our wall tiles and floor coverings are manufactured under strict quality control, guaranteeing competitiveness and high quality.",
    "about.feature4.title": "Convenient Logistics",
    "about.feature4.desc": "Free delivery within Vilnius on orders over 10 square meters.",
    "about.stat1.value": "4,380,000 m²",
    "about.stat1.desc": "of ceramic tiles produced annually",
    "about.stat2.value": "2 formats",
    "about.stat2.desc": "60x60 and 60x120 are the most popular porcelain tile formats",
    "about.stat3.value": "Up to 45 days",
    "about.stat3.desc": "Order lead time for wholesale porcelain tile",
    "about.stat4.value": "> 5 years",
    "about.stat4.desc": "of production experience in the porcelain tile market",
    "about.stat5.value": "15.4 hectares",
    "about.stat5.desc": "Production capacity",

    // Carousel
    "carousel.title": "Unique Prime Ceramics Collections",
    "carousel.description": "Simplicity, vivid tactile sensations, exclusive finishes, and attention to detail are the hallmarks of this extensive collection of ceramic tiles for residential and commercial spaces.",
    "carousel.viewAll": "View All Collections",
    "carousel.goToPage": "Go to page",

    // Payment & Delivery
    "delivery.title": "Payment and Delivery",
    "delivery.free.title": "Free Delivery",
    "delivery.free.desc": "Free delivery of products purchased on the website within Vilnius",
    "delivery.fast.title": "Fast Delivery",
    "delivery.fast.desc": "Delivery within 24 hours or at the time specified by the customer",

    // Contacts
    "contacts.title": "Contacts",
    "contacts.getInTouch": "Get in Touch",
    "contacts.fullName": "Full Name",
    "contacts.fullName.placeholder": "Enter your full name",
    "contacts.email": "Email",
    "contacts.email.placeholder": "Enter your email",
    "contacts.phone": "Phone Number",
    "contacts.phone.placeholder": "Enter your phone number",
    "contacts.city": "City",
    "contacts.city.placeholder": "Enter your city",
    "contacts.message": "Message",
    "contacts.message.placeholder": "Enter your message",
    "contacts.agree": "I agree to the processing of personal data.",
    "contacts.send": "Send",
    "contacts.sending": "Sending...",
    "contacts.success": "Message sent successfully!",
    "contacts.error": "Failed to send message. Please try again.",
    "contacts.phoneLabel": "Phone",
    "contacts.addressLabel": "Address",
    "contacts.emailLabel": "Email",
    "contacts.address": "Gedimino pr. 20, LT-01103, Vilnius, Lithuania",

    // Footer
    "footer.description": "Duniesi Porcelain Tiles is the official, exclusive partner of Prime Ceramics JV LLC, specializing in high-quality porcelain tiles in Vilnius and the Vilnius region.",
    "footer.quickLinks": "Quick Links",
    "footer.followUs": "Follow Us",
    "footer.copyright": "Prime Ceramics. All rights reserved.",

    // Collections Page
    "collections.home": "Home",
    "collections.title": "Our Collections",
    "collections.subtitle": "Discover our premium selection of porcelain tiles and surfaces",
    "collections.all": "All",
    "collections.showing": "Showing",
    "collections.collection": "collection",
    "collections.collections": "collections",
    "collections.variations": "variations",
    "collections.noResults": "No collections found for",
    "collections.zoom": "2x Zoom",
    "collections.imagesAvailable": "images available",
    "collections.variationsLabel": "Variations",
  },
  lt: {
    // Navbar
    "nav.main": "Pagrindinis",
    "nav.about": "Apie mus",
    "nav.collections": "Kolekcijos",
    "nav.payment": "Mokejimas ir pristatymas",
    "nav.contacts": "Kontaktai",
    "nav.premium": "Aukštos kokybes porceliano plyteles",
    "lang.english": "Anglu",
    "lang.lithuanian": "Lietuviu",

    // Banner
    "banner.title": "Duniesi Porceliano plyteles - kolekciniu keraminiu ir porceliano plyteliu gamintojas Vilniuje ir Vilniaus regione.",
    "banner.feature1": "Daugiau nei 50 išskirtiniu kolekciju",
    "banner.feature2": "Europietiškas dizainas",
    "banner.feature3": "Gamintojo kainos",
    "banner.feature4": "Tiesioginiai pristatymai",
    "banner.feature5": "Šveicariska kokybe",
    "banner.cta": "Eiti i kataloga",

    // About Company
    "about.title": "Apie musu imone",
    "about.description": "Duniesi Porceliano plyteles yra oficialus, išskirtinis Prime Ceramics JV LLC partneris, gamintojas, specializuojantis aukštos kokybes porceliano plyteliu gamyboje ir platinime Vilniuje ir Vilniaus regione.",
    "about.feature1.title": "Itališka iranga",
    "about.feature1.desc": "Musu plyteles gaminamos naudojant moderna itališka iranga ir aukštos kokybes žaliavas, užtikrinant visišką atitikti visiems statybos standartams ir aplinkosaugos reikalavimams.",
    "about.feature2.title": "Ivairove",
    "about.feature2.desc": "Visada atidžiai stebedama tendencijas, Prime Ceramics siulo platu produktu, apdailos ir formatu pasirinkima visu tipu projektams.",
    "about.feature3.title": "Aukšciausia kokybe",
    "about.feature3.desc": "Visos musu sienines plyteles ir grindines dangos gaminamos griežtai kontroliuojant kokybe, garantuojant konkurencinguma ir aukšta kokybe.",
    "about.feature4.title": "Patogi logistika",
    "about.feature4.desc": "Nemokamas pristatymas Vilniuje užsakymams nuo 10 kvadratiniu metru.",
    "about.stat1.value": "4 380 000 m²",
    "about.stat1.desc": "keraminiu plyteliu pagaminama kasmet",
    "about.stat2.value": "2 formatai",
    "about.stat2.desc": "60x60 ir 60x120 yra populiariausi porceliano plyteliu formatai",
    "about.stat3.value": "Iki 45 dienu",
    "about.stat3.desc": "Užsakymo ivykdymo laikas didmeniniam porceliano plyteliu užsakymui",
    "about.stat4.value": "> 5 metai",
    "about.stat4.desc": "gamybos patirties porceliano plyteliu rinkoje",
    "about.stat5.value": "15,4 hektaro",
    "about.stat5.desc": "Gamybos pajegumai",

    // Carousel
    "carousel.title": "Unikalios Prime Ceramics kolekcijos",
    "carousel.description": "Paprastumas, ryškus lieciamasis pojutis, išskirtine apdaila ir demesys detalems yra šios plačios keraminiu plyteliu kolekcijos gyvenamoms ir komercinem patalpoms požymiai.",
    "carousel.viewAll": "Peržiureti visas kolekcijas",
    "carousel.goToPage": "Eiti i puslapi",

    // Payment & Delivery
    "delivery.title": "Mokejimas ir pristatymas",
    "delivery.free.title": "Nemokamas pristatymas",
    "delivery.free.desc": "Nemokamas svetaineje isigytu produktu pristatymas Vilniaus mieste",
    "delivery.fast.title": "Greitas pristatymas",
    "delivery.fast.desc": "Pristatymas per 24 valandas arba kliento nurodytu laiku",

    // Contacts
    "contacts.title": "Kontaktai",
    "contacts.getInTouch": "Susisiekite su mumis",
    "contacts.fullName": "Vardas ir pavarde",
    "contacts.fullName.placeholder": "Iveskite savo varda ir pavarde",
    "contacts.email": "El. paštas",
    "contacts.email.placeholder": "Iveskite savo el. pašta",
    "contacts.phone": "Telefono numeris",
    "contacts.phone.placeholder": "Iveskite savo telefono numeri",
    "contacts.city": "Miestas",
    "contacts.city.placeholder": "Iveskite savo miesta",
    "contacts.message": "Žinute",
    "contacts.message.placeholder": "Iveskite savo žinute",
    "contacts.agree": "Sutinku su asmens duomenu tvarkymu.",
    "contacts.send": "Siusti",
    "contacts.sending": "Siunčiama...",
    "contacts.success": "Žinute sėkmingai išsiųsta!",
    "contacts.error": "Nepavyko išsiųsti žinutes. Bandykite dar karta.",
    "contacts.phoneLabel": "Telefonas",
    "contacts.addressLabel": "Adresas",
    "contacts.emailLabel": "El. paštas",
    "contacts.address": "Gedimino pr. 20, LT-01103, Vilnius, Lietuva",

    // Footer
    "footer.description": "Duniesi Porceliano plyteles yra oficialus, išskirtinis Prime Ceramics JV LLC partneris, specializuojantis aukštos kokybes porceliano plytelem Vilniuje ir Vilniaus regione.",
    "footer.quickLinks": "Greitos nuorodos",
    "footer.followUs": "Sekite mus",
    "footer.copyright": "Prime Ceramics. Visos teises saugomos.",

    // Collections Page
    "collections.home": "Pagrindinis",
    "collections.title": "Musu kolekcijos",
    "collections.subtitle": "Atraskite musu aukšciausios kokybes porceliano plyteliu ir paviršiu pasirinkima",
    "collections.all": "Visos",
    "collections.showing": "Rodoma",
    "collections.collection": "kolekcija",
    "collections.collections": "kolekcijos",
    "collections.variations": "variacijos",
    "collections.noResults": "Nerasta kolekciju pagal",
    "collections.zoom": "2x priartinimas",
    "collections.imagesAvailable": "nuotrauku prieinama",
    "collections.variationsLabel": "Variacijos",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
