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
    title: "Education Industry Solutions || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Transform education with Virtual Xcellence. EdTech solutions, learning management systems, virtual classrooms, and educational technology consulting for modern learning institutions.",
    keywords: [
      "Virtual Xcellence education",
      "EdTech solutions",
      "learning management systems",
      "virtual classroom platforms",
      "educational technology consulting",
      "online learning platforms",
      "student information systems",
      "educational software development",
      "learning analytics",
      "educational AI solutions",
      "school management systems",
      "educational cybersecurity",
      "digital learning tools",
      "educational data analytics",
      "e-learning platforms",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Education Industry Page",
    },
  };

  return generateSeoMetadata('/industries/education', fallbackMetadata);
}

const EducationPage = (): ReactElement => {
  // Education Industry Data
  const industryData = {
    overview: {
      title: "Education Industry",
      description: "Educational institutions face increasing pressure to deliver engaging, accessible, and effective learning experiences while managing complex administrative processes. From virtual classrooms to AI-powered learning analytics, the sector demands innovative technology solutions. At Virtual Xcellence, we empower schools, universities, and training organizations to leverage cutting-edge technology for enhanced learning outcomes and operational efficiency.",
      imageSrc: "/assets/imgs/industries/education/industry.jpg",
      imageAlt: "Education Technology Solutions"
    },
    challenges: {
      title: "Key Challenges",
      challenges: [
        { text: "Adapting to hybrid and remote learning environments" },
        { text: "Ensuring student data privacy and FERPA compliance" },
        { text: "Managing diverse learning styles and accessibility needs" },
        { text: "Integrating technology with existing educational systems" },
        { text: "Measuring and improving learning outcomes effectively" }
      ]
    },
    solutions: {
      title: "Our Solutions",
      description: "Comprehensive education technology solutions that address modern learning challenges. Below are the detailed solutions we offer:",
      solutions: [
        {
          title: "Learning Management Systems & Virtual Classrooms",
          items: [
            "Interactive virtual classroom platforms with video conferencing",
            "AI-powered learning analytics and progress tracking"
          ]
        },
        {
          title: "Student Information & Administrative Systems",
          items: [
            "Comprehensive student information management",
            "Automated enrollment and academic record keeping"
          ]
        },
        {
          title: "Mobile Learning & Accessibility Solutions",
          items: [
            "Cross-platform mobile learning applications",
            "Accessibility features for diverse learning needs"
          ]
        },
        {
          title: "Assessment & Analytics Platforms",
          items: [
            "Automated grading and feedback systems",
            "Learning outcome analytics and reporting"
          ]
        },
        {
          title: "Content Management & Collaboration Tools",
          items: [
            "Digital content creation and distribution platforms",
            "Collaborative learning and project management tools"
          ]
        }
      ]
    },
    technologies: {
      title: "Technologies We Use",
      technologies: [
        {
          title: "Learning Platforms",
          technologies: [
            { name: "Moodle", icon: "/assets/imgs/icons/moodle.svg" },
            { name: "Canvas LMS", icon: "/assets/imgs/icons/canvas.svg" },
            { name: "Blackboard", icon: "/assets/imgs/icons/blackboard.svg" }
          ]
        },
        {
          title: "AI/ML",
          technologies: [
            { name: "TensorFlow", icon: "/assets/imgs/icons/tensorflow.svg" },
            { name: "PyTorch", icon: "/assets/imgs/icons/pytorch.svg" },
            { name: "OpenAI APIs", icon: "/assets/imgs/icons/openai.svg" }
          ]
        },
        {
          title: "Cloud",
          technologies: [
            { name: "AWS Education", icon: "/assets/imgs/icons/aws.svg" },
            { name: "Google Workspace for Education", icon: "/assets/imgs/icons/google-workspace.svg" }
          ]
        },
        {
          title: "Security & Compliance",
          technologies: [
            { name: "FERPA compliance", icon: "/assets/imgs/icons/ferpa.svg" },
            { name: "Data encryption", icon: "/assets/imgs/icons/encryption.svg" }
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
        { text: "Enhanced student engagement and learning outcomes" },
        { text: "Reduced administrative workload by up to 40%" },
        { text: "Improved accessibility for diverse learning needs" },
        { text: "Better data-driven insights for educational decision-making" }
      ]
    }
  };

  // Text Slider Data for Education
  const textSliderData = {
    items: [
      { id: 1, text: "Virtual Classrooms", suffix: "for Remote Learning" },
      { id: 2, text: "Learning Management Systems", suffix: "for Educational Excellence" },
      { id: 3, text: "Student Information Systems", suffix: "for Administrative Efficiency" },
      { id: 4, text: "Educational Analytics", suffix: "for Data-Driven Insights" },
      { id: 5, text: "Mobile Learning Apps", suffix: "for Anytime Access" },
      { id: 6, text: "AI-Powered Tutoring", suffix: "for Personalized Learning" },
      { id: 7, text: "Assessment Platforms", suffix: "for Better Evaluation" },
      { id: 8, text: "Collaboration Tools", suffix: "for Enhanced Engagement" }
    ]
  };

  // FAQ Data for Education
  const faqData = [
    {
      question: "How do you create engaging virtual learning experiences?",
      answer: "We develop interactive virtual classroom platforms with features like video conferencing, real-time collaboration tools, and AI-powered learning analytics to enhance student engagement.",
    },
    {
      question: "Can you integrate with existing school management systems?",
      answer: "Yes, we have extensive experience integrating with major school management systems and can work with your existing infrastructure to create seamless workflows.",
    },
    {
      question: "Do you provide mobile learning app development?",
      answer: "Absolutely, we develop mobile learning applications that enable students to access course materials, participate in discussions, and complete assignments on any device.",
    },
    {
      question: "How do you ensure student data privacy and FERPA compliance?",
      answer: "We implement comprehensive data protection measures including FERPA compliance, data encryption, access controls, and regular security audits to protect student information.",
    },
  ];

  return (
    <div className="body-wrapper body-inner-page">
      <main>
        <Breadcrumb
          title="EDUCATION"
          subTitle="Transforming Learning Through Technology"
          pageName="EDUCATION"
          subtext="The education industry is undergoing a digital transformation that's revolutionizing how students learn and educators teach. At Virtual Xcellence, we help educational institutions leverage cutting-edge technology to create engaging, accessible, and effective learning experiences."
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
          imageSrc="/assets/imgs/industries/education/challenges.jpg"
          imageAlt="Education Industry Challenges"
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
          imageSrc="/assets/imgs/industries/education/impact.jpg"
          imageAlt="Education Industry Impact"
        />

        <ServiceTextSliderSection 
          textSliderData={textSliderData}
        />

        <IndustriesFaqSection 
          faqData={faqData}
          type={2}
          sectionTitle="Education Technology FAQ"
        />
      </main>
      
      <FooterSection 
        ctaHeading="Ready to transform your educational institution with technology?"
        buttonLabel="Schedule a consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default EducationPage;
