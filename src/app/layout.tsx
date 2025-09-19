// Globals css
import "./globals.css";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// FontAwesome Icons css
import "@fortawesome/fontawesome-free/css/all.min.css";

// yet-another-react-lightbox css
import "yet-another-react-lightbox/styles.css";

// swiper slider css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

// Nice-select2 css
import "nice-select2/dist/css/nice-select2.css";

// Template SCSS
import "@/scss/style.scss";
import ScrollTopWrapper from "@/components/ScrollTopWrapper";
import AnimationProvider from "@/providers/AnimationProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Home/Header";
import FooterSection from "@/components/Home/FooterSection";

export const metadata: Metadata = {
  title: "Virtual Xcellence - AI, Cloud & Digital Transformation Solutions",
  description:
    "Virtual Xcellence is a Canada-based technology and consulting company helping organizations transform their operations with AI, automation, cloud, and business innovation. With 10+ years of experience, we deliver solutions that create measurable impact and long-term growth.",
  keywords: [
    "AI solutions",
    "cloud transformation",
    "digital transformation",
    "business automation",
    "technology consulting",
    "AI implementation",
    "cloud migration",
    "business innovation",
    "Canada technology company",
    "enterprise solutions",
    "AI consulting",
    "cloud services",
    "digital strategy",
    "technology consulting",
    "business transformation",
    "AI automation",
    "cloud computing",
    "digital innovation",
    "technology solutions",
    "business growth",
    "Virtual Xcellence",
    "AI agency",
    "digital agency",
    "technology company",
    "business consulting",
    "AI services",
    "cloud consulting",
    "digital consulting",
    "technology solutions",
    "business transformation",
  ],
  creator: "Virtual Xcellence",
  other: {
    developer: "Virtual Xcellence",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
      <Header />
        <AnimationProvider>{children}</AnimationProvider>
        <ScrollTopWrapper width={20} height={20} className="progress-wrap" />
        <Toaster position="top-center" />
        <FooterSection />
      </body>
    </html>
  );
}

