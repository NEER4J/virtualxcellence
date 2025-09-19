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
      label: "sales@virtualxcellence.com",
      link: "mailto:sales@virtualxcellence.com",
    },
    {
      icon: "/assets/imgs/icon/icon-18.webp",
      label: "+1-905-823-7677 (Canada)",
      link: "tel:+19058237677",
    },
    {
      icon: "/assets/imgs/icon/icon-18.webp",
      label: "+1-702-537-0123 (United States)",
      link: "tel:+17025370123",
    },
    {
      icon: "/assets/imgs/icon/icon-18.webp",
      label: "+91-120-4286226 (India)",
      link: "tel:+911204286226",
    },
  ],
  socialLinks: [
    { icon: "fa-facebook-f", link: "#" },
    { icon: "fa-twitter", link: "#" },
    { icon: "fa-linkedin-in", link: "#" },
  ],
  formFields: [
    {
      icon: "/assets/imgs/icon/icon-19.webp",
      label: "What’s your name?",
      name: "Name",
      placeholder: "Full name here",
      type: "text",
    },
    {
      icon: "/assets/imgs/icon/icon-20.webp",
      label: "What’s your e-mail?",
      name: "Email",
      placeholder: "Enter your mail here",
      type: "email",
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
