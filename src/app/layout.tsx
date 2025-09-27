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
import { AuthProvider } from "@/contexts/AuthContext";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import ConditionalHeader from "@/components/ConditionalHeader";
import { Analytics } from '@vercel/analytics/next';

// Default metadata - will be overridden by individual pages
export const metadata: Metadata = {
  title: "Virtual Xcellence - AI, Cloud & Digital Transformation Solutions",
  description: "Virtual Xcellence is a Canada-based technology and consulting company helping organizations transform their operations with AI, automation, cloud, and business innovation.",
  keywords: ["AI solutions", "cloud transformation", "digital transformation", "business automation", "technology consulting"],
  openGraph: {
    title: "Virtual Xcellence - AI, Cloud & Digital Transformation Solutions",
    description: "Virtual Xcellence is a Canada-based technology and consulting company helping organizations transform their operations with AI, automation, cloud, and business innovation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Xcellence - AI, Cloud & Digital Transformation Solutions",
    description: "Virtual Xcellence is a Canada-based technology and consulting company helping organizations transform their operations with AI, automation, cloud, and business innovation.",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <ConditionalHeader />
          <AnimationProvider>{children}</AnimationProvider>
          <ScrollTopWrapper width={20} height={20} className="progress-wrap" />
          <Toaster position="top-center" />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}

