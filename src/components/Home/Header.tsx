"use client";
import { useState } from "react";
import Sidebar from "@/components/Home/SideBar/SideBar";
import Link from "next/link";
import useStickyHeader from "@/Hook/useStickyHeader";

// --- TYPE DEFINITIONS ---
interface MenuItem {
  title: string;
  href?: string;
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
      title: "Services",
      children: [
        { title: "Cybersecurity", href: "/services/cybersecurity" },
        { title: "Development", href: "/services/development" },
        { title: "Consultation", href: "/services/consultation" },
        { title: "Fractional CTO", href: "/services/fractional-cto" },
        { title: "Fractional CFO", href: "/services/fractional-cfo" },
        { title: "Business Transformation", href: "/services/business-transformation" },
        { title: "AI & Automation", href: "/services/ai-automation" },
        { title: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
        { title: "Business Process Outsourcing", href: "/services/business-process-outsourcing" },
      ],
    },
    {
      title: "Industries",
      children: [
        { title: "Healthcare", href: "/industries/healthcare" },
        { title: "Financial Services", href: "/industries/financial-services" },
        { title: "Manufacturing", href: "/industries/manufacturing" },
        { title: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
        { title: "Education", href: "/industries/education" },
      ],
    },
    { title: "Case Studies", href: "/case-studies" },
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
        <Link href={item?.href || "#0"}>{item?.title}</Link>
        {item?.children && (
          <ul className="dp-menu">{renderMenu(item?.children)}</ul>
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
