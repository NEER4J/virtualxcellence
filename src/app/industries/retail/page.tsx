import { ReactElement } from "react";
import { Metadata } from "next";
import { generateSeoMetadata } from '@/lib/seo'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import IndustriesFaqSection from "@/components/Industries/FaqSection";
import FooterSection from "@/components/Home/FooterSection";
import IndustryOverview from "@/components/Industries/IndustryOverview";
import KeyChallenges from "@/components/Industries/KeyChallenges";
import OurSolutions from "@/components/Industries/OurSolutions";
import TechnologiesWeUse from "@/components/Industries/TechnologiesWeUse";
import ImpactWeDeliver from "@/components/Industries/ImpactWeDeliver";
import ServiceTextSliderSection from "@/components/Services/TextSliderSection";

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Retail & E-commerce Industry Solutions || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Transform retail and e-commerce with Virtual Xcellence. Digital commerce platforms, omnichannel solutions, customer experience optimization, and retail technology consulting for modern businesses.",
    keywords: [
      "Virtual Xcellence retail ecommerce",
      "e-commerce platform development",
      "omnichannel retail solutions",
      "digital commerce technology",
      "retail technology consulting",
      "e-commerce software development",
      "customer experience optimization",
      "inventory management systems",
      "payment processing solutions",
      "retail analytics",
      "mobile commerce apps",
      "retail automation",
      "e-commerce cybersecurity",
      "personalization engines",
      "retail AI solutions",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Retail & E-commerce Industry Page",
    },
  };

  return generateSeoMetadata('/industries/retail-ecommerce', fallbackMetadata);
}

const RetailEcommercePage = (): ReactElement => {
  // Retail & E-commerce Industry Data
  const industryData = {
    overview: {
      title: "Retail & E-commerce Industry",
      description: "Retail and e-commerce businesses face intense competition and rapidly changing consumer expectations. From omnichannel experiences to AI-powered personalization, the sector demands innovative technology solutions. At Virtual Xcellence, we empower retailers and e-commerce businesses to leverage cutting-edge technology for enhanced customer experiences, operational efficiency, and sustainable growth.",
      imageSrc: "/assets/imgs/gallery/image-52.webp",
      imageAlt: "Retail & E-commerce Technology Solutions"
    },
    challenges: {
      title: "Key Challenges",
      challenges: [
        { text: "Creating seamless omnichannel customer experiences" },
        { text: "Managing complex inventory across multiple channels" },
        { text: "Personalizing customer interactions at scale" },
        { text: "Ensuring secure payment processing and PCI compliance" },
        { text: "Optimizing supply chain and logistics operations" }
      ]
    },
    solutions: {
      title: "Our Solutions",
      description: "Comprehensive retail and e-commerce technology solutions that address modern business challenges. Below are the detailed solutions we offer:",
      solutions: [
        {
          title: "E-commerce Platforms & Marketplaces",
          items: [
            "Custom e-commerce website development",
            "Multi-vendor marketplace solutions"
          ]
        },
        {
          title: "Omnichannel Customer Experience",
          items: [
            "Unified customer data platforms",
            "Cross-channel inventory management systems"
          ]
        },
        {
          title: "AI-Powered Personalization & Analytics",
          items: [
            "Recommendation engines and personalization",
            "Customer behavior analytics and insights"
          ]
        },
        {
          title: "Mobile Commerce & Apps",
          items: [
            "Native and cross-platform mobile apps",
            "Progressive Web App (PWA) solutions"
          ]
        },
        {
          title: "Payment & Security Solutions",
          items: [
            "Secure payment gateway integration",
            "Fraud detection and prevention systems"
          ]
        }
      ]
    },
    technologies: {
      title: "Technologies We Use",
      technologies: [
        {
          title: "E-commerce Platforms",
          technologies: [
            { name: "Shopify", icon: "/assets/imgs/icons/shopify.svg" },
            { name: "Magento", icon: "/assets/imgs/icons/magento.svg" },
            { name: "WooCommerce", icon: "/assets/imgs/icons/woocommerce.svg" }
          ]
        },
        {
          title: "AI/ML",
          technologies: [
            { name: "TensorFlow", icon: "/assets/imgs/icons/tensorflow.svg" },
            { name: "PyTorch", icon: "/assets/imgs/icons/pytorch.svg" },
            { name: "Recommendation APIs", icon: "/assets/imgs/icons/recommendation.svg" }
          ]
        },
        {
          title: "Cloud & Infrastructure",
          technologies: [
            { name: "AWS Commerce", icon: "/assets/imgs/icons/aws.svg" },
            { name: "Google Cloud", icon: "/assets/imgs/icons/google-cloud.svg" }
          ]
        },
        {
          title: "Payment & Security",
          technologies: [
            { name: "Stripe", icon: "/assets/imgs/icons/stripe.svg" },
            { name: "PayPal", icon: "/assets/imgs/icons/paypal.svg" },
            { name: "PCI-DSS compliance", icon: "/assets/imgs/icons/pci.svg" }
          ]
        },
        {
          title: "Mobile Development",
          technologies: [
            { name: "React Native", icon: "/assets/imgs/icons/react-native.svg" },
            { name: "Flutter", icon: "/assets/imgs/icons/flutter.svg" }
          ]
        }
      ]
    },
    impact: {
      title: "Impact We Deliver",
      impacts: [
        { text: "Increased conversion rates and customer satisfaction" },
        { text: "Reduced operational costs by up to 35%" },
        { text: "Enhanced personalization leading to higher customer lifetime value" },
        { text: "Streamlined inventory management and reduced stockouts" }
      ]
    }
  };

  // Text Slider Data for Retail & E-commerce
  const textSliderData = {
    items: [
      { id: 1, text: "E-commerce Platforms", suffix: "for Digital Commerce" },
      { id: 2, text: "Omnichannel Solutions", suffix: "for Seamless Experiences" },
      { id: 3, text: "AI Personalization", suffix: "for Customer Engagement" },
      { id: 4, text: "Mobile Commerce", suffix: "for Anytime Shopping" },
      { id: 5, text: "Payment Solutions", suffix: "for Secure Transactions" },
      { id: 6, text: "Inventory Management", suffix: "for Supply Chain Optimization" },
      { id: 7, text: "Customer Analytics", suffix: "for Data-Driven Insights" },
      { id: 8, text: "Marketplace Solutions", suffix: "for Multi-Vendor Platforms" }
    ]
  };

  // FAQ Data for Retail & E-commerce
  const faqData = [
    {
      question: "How do you create omnichannel retail experiences?",
      answer: "We develop integrated solutions that connect online and offline channels, providing seamless customer experiences across all touchpoints including web, mobile, and physical stores.",
    },
    {
      question: "Can you integrate with existing e-commerce platforms?",
      answer: "Yes, we have extensive experience integrating with major e-commerce platforms like Shopify, Magento, WooCommerce, and custom solutions to enhance functionality.",
    },
    {
      question: "Do you provide mobile commerce app development?",
      answer: "Absolutely, we develop native and cross-platform mobile commerce applications with features like product catalogs, secure payments, and personalized shopping experiences.",
    },
    {
      question: "How do you handle retail data security and PCI compliance?",
      answer: "We implement comprehensive security measures including PCI-DSS compliance, data encryption, secure payment processing, and regular security audits to protect customer data.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
      <main>
        <Breadcrumb
          title="RETAIL & E-COMMERCE"
          subTitle="Transforming Commerce Through Technology"
          pageName="RETAIL & E-COMMERCE"
          subtext="The retail and e-commerce industry is rapidly evolving with digital technologies reshaping how customers discover, purchase, and interact with brands. At Virtual Xcellence, we help retailers and e-commerce businesses leverage cutting-edge technology to create seamless, personalized shopping experiences."
        />
        
        {/* Industry Overview */}
        <IndustryOverview 
          title={industryData.overview.title}
          description={industryData.overview.description}
          imageSrc={industryData.overview.imageSrc}
          imageAlt={industryData.overview.imageAlt}
        />

        {/* Key Challenges */}
        <KeyChallenges 
          title={industryData.challenges.title}
          challenges={industryData.challenges.challenges}
          imageSrc={industryData.overview.imageSrc}
          imageAlt={industryData.overview.imageAlt}
        />

        {/* Our Solutions */}
        <OurSolutions 
          title={industryData.solutions.title}
          description={industryData.solutions.description}
          solutions={industryData.solutions.solutions}
        />

        {/* Technologies We Use */}
        <TechnologiesWeUse 
          title={industryData.technologies.title}
          technologies={industryData.technologies.technologies}
        />

        {/* Impact We Deliver */}
        <ImpactWeDeliver 
          title={industryData.impact.title}
          impacts={industryData.impact.impacts}
          imageSrc={industryData.overview.imageSrc}
          imageAlt={industryData.overview.imageAlt}
        />

        <ServiceTextSliderSection 
          textSliderData={textSliderData}
        />

        <IndustriesFaqSection 
          faqData={faqData}
          type={2}
          sectionTitle="Retail & E-commerce Technology FAQ"
        />
      </main>
      
      <FooterSection 
        ctaHeading="Ready to transform your retail and e-commerce business with technology?"
        buttonLabel="Schedule a consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default RetailEcommercePage;
