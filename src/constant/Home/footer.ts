export interface IFooterCTA {
  subtitle: string;
  title: string;
  url: string;
  buttonText: string;
}

export interface IFooterLogo {
  src: string;
  url: string;
}

export interface IFooterSocial {
  icon: string;
  url: string;
}

export interface IFooterLink {
  label: string;
  url: string;
}

export interface IFooterWidget {
  title: string;
  links: IFooterLink[];
}

export interface IFooterContact {
  title: string;
  phone: string;
  address: string;
}

export interface IFooterCopyright {
  text: string;
  author: string;
  url: string;
  links: IFooterLink[];
}

export interface IFooterData {
  backgroundImage: string;
  cta: IFooterCTA;
  logo: IFooterLogo;
  description: string;
  socials: IFooterSocial[];
  company: IFooterWidget;
  useful: IFooterWidget;
  contact: IFooterContact;
  copyright: IFooterCopyright;
}

const footerData: IFooterData = {
  backgroundImage: "/assets/imgs/shape/shape-42.webp",
  cta: {
    subtitle: "GET IN TOUCH",
    title: "LET'S CONNECT",
    url: "/contact",
    buttonText: "Contact Us",
  },
  logo: {
    src: "/assets/imgs/logo/VX-Logo.png",
    url: "/",
  },
  description: "Virtual Xcellence is a Canada-based technology and consulting company helping organizations transform their operations with AI, automation, cloud, and business innovation.",
  socials: [
    { icon: "fa-brands fa-facebook-f", url: "#" },
    { icon: "fa-brands fa-twitter", url: "#" },
    { icon: "fa-brands fa-linkedin-in", url: "#" },
  ],
  company: {
    title: "Company",
    links: [
      { label: "About Us", url: "/about" },
      { label: "Our Services", url: "/services" },
      { label: "Our Team", url: "/team" },
      { label: "Portfolio", url: "/portfolio" },
    ],
  },
  useful: {
    title: "Useful Links",
    links: [
      { label: "Blog", url: "/blog" },
      { label: "FAQ", url: "/faq" },
      { label: "Contact Us", url: "/contact" },
      { label: "Privacy Policy", url: "#" },
    ],
  },
  contact: {
    title: "Contact Us",
    phone: "+1 (555) 123-4567",
    address: "Toronto, Ontario\nCanada",
  },
  copyright: {
    text: "Copyright © 2025",
    author: "Virtual Xcellence",
    url: "#",
    links: [
      { label: "Terms & Conditions", url: "#" },
      { label: "Privacy Policy", url: "#" }
    ],
  },
};

export default footerData;
