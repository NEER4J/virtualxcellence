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
        { label: "AI & Automation", href: "/services/ai-automation" },
        { label: "Integration & Professional Services", href: "/services/integration-and-professional-services" },
        { label: "Consultation", href: "/services/consultation" },
        { label: "Fractional CTO", href: "/services/fractional-cto" },
        { label: "Cybersecurity", href: "/services/cybersecurity" },
        { label: "Development", href: "/services/development" },
        { label: "Fractional CFO", href: "/services/fractional-cfo" },
        { label: "Business Transformation", href: "/services/business-transformation" },
        { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
        { label: "Business Process Outsourcing", href: "/services/business-process-outsourcing" },
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
    "Get a free consultation and discover how our services can accelerate your digital transformation.",
  cta: {
    text: "Let's Connect",
    href: "/contact",
  },
  ctaIcon: "fa-solid fa-arrow-right",
  gallery: [],
  contact: {
    phone: { text: "1-905-823-7677  ", href: "tel:+19058237677" },
    email: { text: "info@virtualxcellence.com", href: "mailto:info@virtualxcellence.com" },
    address: "Toronto, Ontario, Canada",
  },
  social: [
    { label: "FB", href: "https://www.facebook.com/vxcellence/" },
    { label: "TW", href: "https://twitter.com/vxinnovation" },
    { label: "LN", href: "https://www.linkedin.com/company/virtualxcellence/" },
    { label: "IN", href: "#" },
  ],
  footerLogo: "/assets/imgs/logo/VX-Logo.png",
};

export default sidebar;
