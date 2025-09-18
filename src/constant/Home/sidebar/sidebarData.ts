export interface SidebarMenu {
  label: string;
  href?: string;
  children?: SidebarMenu[];
}

export interface SidebarCTA {
  text: string;
  href: string;
}

export interface SidebarContactItem {
  text: string;
  href: string;
}

export interface SidebarContact {
  phone: SidebarContactItem;
  email: SidebarContactItem;
  address: string;
}

export interface SidebarSocial {
  label: string;
  href: string;
}

export interface SidebarData {
  logo: string;
  menus: SidebarMenu[];
  closeIcon: string;
  title: string;
  description: string;
  cta: SidebarCTA;
  ctaIcon: string;
  gallery: string[];
  contact: SidebarContact;
  social: SidebarSocial[];
  footerLogo: string;
}

const sidebar: SidebarData = {

  logo: "/assets/imgs/logo/VX-Logo.png",
  menus: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      children: [
        { label: "AI Solutions", href: "/services/ai-solutions" },
        { label: "Cloud Services", href: "/services/cloud-services" },
        { label: "Digital Transformation", href: "/services/digital-transformation" },
        { label: "Business Automation", href: "/services/business-automation" },
        { label: "Data Analytics", href: "/services/data-analytics" },
        { label: "Cybersecurity", href: "/services/cybersecurity" },
        { label: "Mobile App Development", href: "/services/mobile-app-development" },
        { label: "Consulting", href: "/services/consulting" },
      ],
    },
    {
      label: "Industries",
      children: [
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "Financial Services", href: "/industries/financial-services" },
        { label: "Manufacturing", href: "/industries/manufacturing" },
        { label: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
        { label: "Education", href: "/industries/education" },
      ],
    },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  closeIcon: "fas fa-times",
  title: "Hello There!",
  description:
    "We offer comprehensive range of AI, cloud, and digital transformation services to help your business thrive in the modern digital landscape.",
  cta: {
    text: "Let's Connect",
    href: "/contact",
  },
  ctaIcon: "fa-solid fa-arrow-right",
  gallery: [
    "/assets/imgs/gallery/image-48.webp",
    "/assets/imgs/gallery/image-49.webp",
    "/assets/imgs/gallery/image-50.webp",
    "/assets/imgs/gallery/image-51.webp",
  ],
  contact: {
    phone: { text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    email: { text: "info@virtualxcellence.com", href: "mailto:info@virtualxcellence.com" },
    address: "Toronto, Ontario, Canada",
  },
  social: [
    { label: "FB", href: "#" },
    { label: "LN", href: "#" },
    { label: "IN", href: "#" },
    { label: "BE", href: "#" },
  ],
  footerLogo: "/assets/imgs/logo/VX-Logo.png",
};

export default sidebar;
