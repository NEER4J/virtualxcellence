export interface IContact {
  subtitle: string;
  title: string;
  description: string;
  contactInfo: {
    icon: string;
    label: string;
    link: string;
  }[];
  socialLinks: {
    icon: string;
    link: string;
  }[];
  formFields: {
    icon: string;
    label: string;
    name: string;
    placeholder: string;
    type: string;
  }[];
  buttonText: string;
}

const contactData: IContact = {
  subtitle: "Get in touch",
  title: "Talk to a sales representative",
  description:
    "Connect with our team across multiple locations. We have offices in Canada, United States, and India to serve you better. Reach out to us via phone or email for any inquiries.",
  contactInfo: [
    {
      icon: "/assets/imgs/icon/icon-17.webp",
      label: "info@virtualxcellence.com",
      link: "mailto:info@virtualxcellence.com",
    },
    {
      icon: "/assets/imgs/icon/icon-17.webp",
      label: "support@virtualxcellence.com",
      link: "mailto:support@virtualxcellence.com",
    },
    {
      icon: "/assets/imgs/icon/icon-18.webp",
      label: "+1-905-823-7677 (Canada)",
      link: "tel:+19058237677",
    },

    {
      icon: "/assets/imgs/icon/icon-18.webp",
      label: "+91-120-4286226 (India)",
      link: "tel:+911204286226",
    },
    {
      icon: "/assets/imgs/icon/icon-18.webp",
      label: "3900 Ravine Hollow Ct. Maumee, Ohio, 43537, USA",
      link: "#",
    },
  ],
  socialLinks: [
    { icon: "fa-facebook-f", link: "https://www.facebook.com/vxcellence/" },
    { icon: "fa-twitter", link: "https://twitter.com/vxinnovation" },
    { icon: "fa-linkedin-in", link: "https://www.linkedin.com/company/virtualxcellence/" },
  ],
  formFields: [
    {
      icon: "/assets/imgs/icon/icon-19.webp",
      label: "What's your name?",
      name: "Name",
      placeholder: "Full name here",
      type: "text",
    },
    {
      icon: "/assets/imgs/icon/icon-20.webp",
      label: "What's your e-mail?",
      name: "Email",
      placeholder: "Enter your mail here",
      type: "email",
    },
    {
      icon: "/assets/imgs/icon/icon-18.webp",
      label: "What's your phone number?",
      name: "Phone",
      placeholder: "Enter your phone number",
      type: "tel",
    },
    {
      icon: "/assets/imgs/icon/icon-21.webp",
      label: "Have any message?",
      name: "Messages",
      placeholder: "Write your message here",
      type: "text",
    },
  ],
  buttonText: "Contact Us",
};

export default contactData;
