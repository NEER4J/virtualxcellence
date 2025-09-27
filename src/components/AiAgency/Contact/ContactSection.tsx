"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IContact } from "@/constant/AiAgency/Contact/contact";
import Link from "next/link";
import { createClient } from '@/lib/supabase/client';

interface FormData {
  Name: string;
  Email: string;
  Phone: string;
  Messages: string;
}

interface ContactProps {
  data: IContact;
}

const ContactSection: React.FC<ContactProps> = ({ data: contactData }) => {
  const {
    title,
    description,
    contactInfo,
    socialLinks,
    formFields,
    buttonText,
  } = contactData;

  const [formData, setFormData] = useState<FormData>({
    Name: "",
    Email: "",
    Phone: "",
    Messages: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { Name, Email, Phone, Messages } = formData;
    if (!Name.trim() || !Email.trim() || !Messages.trim()) {
      toast.error("Please fill in all the required fields before submitting.");
      return;
    }

    const toastId = toast.loading("Sending your message...");
    try {
      const supabase = createClient();
      
      // Save lead to database
      const { error } = await supabase
        .from('leads')
        .insert({
          name: Name.trim(),
          email: Email.trim(),
          phone: Phone.trim() || null,
          message: Messages.trim(),
          source: 'Contact Form',
          status: 'new'
        } as never);

      if (error) throw error;

      toast.success("Your message has been sent successfully! We'll get back to you soon.", {
        id: toastId,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error saving lead:', error);
      toast.error("Something went wrong. Please try again.", { id: toastId });
    }
  };

  return (
    <>
      <style jsx>{`
        .success-message {
              text-align: center;
    border-radius: .5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        }
        
        .success-icon {
          font-size: 2.5rem;
          color: #6b7280;
          margin-bottom: 1rem;
        }
        
        .success-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.75rem;
        }
        
        .success-description {
          font-size: 1rem;
          color: #6b7280;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        
      `}</style>
      <section className="contact-area">
        <div className="container">
          <div className="contact-area-inner section-spacing">
            <div className="section-content-wrapper">
              <div className="fade-anim" data-direction="right">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="section-title">{title}</h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text">{description}</p>
                </div>
                <div className="contact-list">
                  <ul>
                    {contactInfo.map((item, index) => (
                      <li key={index}>
                        <img src={item?.icon} alt="icon image" />
                        <Link href={item?.link}>{item?.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="social-links-wrapper">
                  <p className="title">Follow us:</p>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <Link key={index} href={social?.link}>
                        <i className={`fa-brands ${social?.icon}`}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="contact-wrap fade-anim" data-direction="left">
                {isSubmitted ? (
                  <div className="success-message">
                    <div className="success-icon">
                    </div>
                    <h3 className="success-title">Thank You!</h3>
                    <p className="success-description">
                      Your message has been sent successfully. We&apos;ll get back to you soon.
                    </p>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          Name: "",
                          Email: "",
                          Phone: "",
                          Messages: "",
                        });
                      }}
                      className="t-btn t-btn-group"
                    >
                      <span className="t-btn t-btn-circle">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                      <span className="t-btn t-btn-primary">Send Another Message</span>
                      <span className="t-btn t-btn-circle">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="contact-formwrap">
                      {formFields?.map((field, index) => (
                        <div
                          className={`contact-formfield${
                            field?.name === "Messages" ? " messages" : ""
                          }`}
                          key={index}
                        >
                          <img
                            className="input-icon"
                            src={field?.icon}
                            alt="icon"
                          />
                          <h3 className="title">{field?.label}</h3>
                          {field?.name === "Messages" ? (
                            <textarea
                              name={field?.name}
                              id={field?.name}
                              placeholder={field?.placeholder}
                              value={formData[field?.name as keyof FormData] || ""}
                              onChange={handleChange}
                              rows={4}
                            />
                          ) : (
                            <input
                              type={field?.type}
                              name={field?.name}
                              id={field?.name}
                              placeholder={field?.placeholder}
                              value={formData[field?.name as keyof FormData] || ""}
                              onChange={handleChange}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="submit-btn">
                      <button type="submit" className="t-btn t-btn-group">
                        <span className="t-btn t-btn-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <span className="t-btn t-btn-primary">{buttonText}</span>
                        <span className="t-btn t-btn-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
