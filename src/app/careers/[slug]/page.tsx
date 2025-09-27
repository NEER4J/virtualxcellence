import { ReactElement } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import FooterSection from "@/components/Home/FooterSection";
import { createPageMetadata } from "@/lib/page-seo";
import SingleCareerSection from "@/components/Careers/SingleCareerSection";
import { createClient } from "@/lib/supabase/server";

interface CareerPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for the career page
export async function generateMetadata({ params }: CareerPageProps): Promise<Metadata> {
  const supabase = createClient();
  
  const { data: career } = await supabase
    .from('careers_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('is_active', true)
    .single();

  if (!career) {
    return {
      title: "Career Not Found",
      description: "The requested career position could not be found."
    };
  }

  return createPageMetadata(`/careers/${params.slug}`, {
    title: `${career.title} || Virtual Xcellence Careers`,
    description: career.description || `Join our team as a ${career.title} at Virtual Xcellence. ${career.employment_type} position in ${career.location}.`,
    keywords: [
      career.title,
      "careers",
      "jobs",
      "employment",
      career.department,
      career.employment_type,
      career.experience_level,
      "Virtual Xcellence",
      "tech jobs",
      "remote work"
    ],
    ogImage: "https://virtualxcellence.com/career-og.jpg",
    canonicalUrl: `https://virtualxcellence.com/careers/${params.slug}`
  });
}

// Generate static params for all active career posts
export async function generateStaticParams() {
  const supabase = createClient();
  
  const { data: careers } = await supabase
    .from('careers_posts')
    .select('slug')
    .eq('is_active', true);

  return careers?.map((career) => ({
    slug: career.slug,
  })) || [];
}

const CareerPage = async ({ params }: CareerPageProps): Promise<ReactElement> => {
  const supabase = createClient();
  
  const { data: career, error } = await supabase
    .from('careers_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('is_active', true)
    .single();

  if (error || !career) {
    notFound();
  }

  return (
    <div className="body-wrapper body-inner-page">
      <main>
        <Breadcrumb 
          title={career.title.toUpperCase()} 
          subTitle={`${career.employment_type} • ${career.location}`}
          pageName="CAREER"
          subtext={career.description || `Join our team as a ${career.title} and help us build the future of technology.`}
        />
        <SingleCareerSection career={career} />
        <FooterSection />
      </main>
    </div>
  );
};

export default CareerPage;
