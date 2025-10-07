"use client";
import { useState } from "react";
import Sidebar from "@/components/Home/SideBar/SideBar";
import Link from "next/link";
import useStickyHeader from "@/Hook/useStickyHeader";
import { 
  Shield, 
  Code, 
  MessageSquare, 
  UserCog, 
  DollarSign, 
  RefreshCw, 
  Bot, 
  Cloud, 
  Building2,
  Heart,
  CreditCard,
  Factory,
  ShoppingCart,
  GraduationCap,
  Settings
} from "lucide-react";

// --- TYPE DEFINITIONS ---
interface MenuItem {
  title: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  subtitle?: string;
  children?: MenuItem[];
}
interface HeaderData {
  logo: {
    href: string;
    src: string;
    alt: string;
  };
  menuItems: MenuItem[];
  cta: {
    href: string;
    label: string;
  };
}

// --- TYPED DATA OBJECT ---
const headerData:HeaderData = {
  logo: {
    href: "/",
    src: "/assets/imgs/logo/VX-Logo.png",
    alt: "Virtual Xcellence Logo",
  },
  menuItems: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    {
      title: "Services", href: "/services",
      children: [
        { 
          title: "AI & Automation", 
          href: "/services/ai-automation",
          icon: Bot,
          subtitle: "Intelligent automation systems"
        },
        { 
          title: "Integration & Professional Services", 
          href: "/services/integration-and-professional-services",
          icon: Settings,
          subtitle: "AI platform integration & consulting"
        },
        { 
          title: "Consultation", 
          href: "/services/consultation",
          icon: MessageSquare,
          subtitle: "Strategic technology guidance"
        },
        { 
          title: "Fractional CTO", 
          href: "/services/fractional-cto",
          icon: UserCog,
          subtitle: "Part-time technology leadership"
        },
        { 
          title: "Cybersecurity", 
          href: "/services/cybersecurity",
          icon: Shield,
          subtitle: "Protect your digital assets"
        },
        { 
          title: "Development", 
          href: "/services/development",
          icon: Code,
          subtitle: "Custom software solutions"
        },
        { 
          title: "Fractional CFO", 
          href: "/services/fractional-cfo",
          icon: DollarSign,
          subtitle: "Financial strategy expertise"
        },
        { 
          title: "Business Transformation", 
          href: "/services/business-transformation",
          icon: RefreshCw,
          subtitle: "Digital transformation solutions"
        },
        { 
          title: "Cloud & Infrastructure", 
          href: "/services/cloud-infrastructure",
          icon: Cloud,
          subtitle: "Scalable cloud solutions"
        },
        { 
          title: "Business Process Outsourcing", 
          href: "/services/business-process-outsourcing",
          icon: Building2,
          subtitle: "Streamlined business operations"
        },
      ],
    },
    {
      title: "Industries", href: "/industries",
      children: [
        { 
          title: "Healthcare", 
          href: "/industries/healthcare",
          icon: Heart,
          subtitle: "Healthcare technology solutions"
        },
        { 
          title: "Finance", 
          href: "/industries/finance",
          icon: CreditCard,
          subtitle: "Fintech and banking solutions"
        },
        { 
          title: "Manufacturing", 
          href: "/industries/manufacturing",
          icon: Factory,
          subtitle: "Industrial automation & IoT"
        },
        { 
          title: "Retail & E-commerce", 
          href: "/industries/retail",
          icon: ShoppingCart,
          subtitle: "Digital commerce platforms"
        },
        { 
          title: "Education", 
          href: "/industries/education",
          icon: GraduationCap,
          subtitle: "EdTech learning solutions"
        },
      ],
    },
    // { title: "Case Studies", href: "/case-studies" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
  ],
  cta: {
    href: "/contact",
    label: "Let's Connect",
  },
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSidebar = () => setIsOpen((prev) => !prev);
  useStickyHeader();

  const renderMenu = (items: MenuItem[]): JSX.Element[] =>
    items.map((item, index) => (
      <li
        key={index}
        className={item?.children ? "menu-item-has-children" : ""}
      >
        <Link href={item?.href || "#0"}>
          {item?.children ? (
            item?.title
          ) : (
            <div className="header-menu-item">
              {item?.icon && (
                <item.icon className="w-5 h-5 flex-shrink-0 text-blue-600 d-none" />
              )} 
              <div className="header-menu-item-content">
                <span className="header-menu-item-title">{item?.title}</span>
                {item?.subtitle && (
                  <span className="header-menu-item-subtitle">{item?.subtitle}</span>
                )}
              </div>
            </div>
          )}
        </Link>
        {item?.children && (
          <ul className="dp-menu header-menu-item-children">
            <div className="menu-services-grid">
              <div className="menu-services-list">
                {renderMenu(item?.children)}
              </div>
              <div className="menu-promo-card">
                <div className="promo-card-image">
                  <img 
                    src="/assets/imgs/hero/hero-vector-bg.png" 
                    alt="Promotional Offer" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="promo-card-content">
                  <h3 className="promo-card-title">Transform Your Business</h3>
                  <p className="promo-card-description">
                    Get a free consultation and discover how our services can accelerate your digital transformation.
                  </p>
                  <Link 
                    href="/contact" 
                    className="promo-card-cta"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </ul>
        )}
      </li>
    ));

  return (
    <>
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <header className="header-area-4">
        <div className="header-main header-sticky mt-2">
          <div className="container">
            <div className="header-area-4-inner shadow-sm">
              <div className="header-logo">
                <Link href={headerData?.logo?.href}>
                  <img
                    src={headerData?.logo?.src}
                    alt={headerData?.logo?.alt}
                    className="normal-logo"
                  />
                </Link>
              </div>

              <div className="header-nav pos-center">
                <nav className="main-menu d-none d-xl-block">
                  <ul className="flex space-x-6">
                    {renderMenu(headerData?.menuItems)}
                  </ul>
                </nav>
              </div>

              <div className="header-button">
                <Link
                  href={headerData?.cta?.href}
                  className="t-btn t-btn-primary bg-active"
                >
                  {headerData?.cta?.label}
                </Link>
              </div>

              <div className="header-offcanvas d-xl-none">
                <button
                  className="side-toggle"
                  onClick={handleSidebar}
                  aria-label="Toggle Sidebar"
                >
                  <img src="/assets/imgs/icon/icon-4.webp" alt="Toggle" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
