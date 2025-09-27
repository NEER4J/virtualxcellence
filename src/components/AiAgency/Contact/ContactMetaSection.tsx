import React from "react";

const ContactMetaSection:React.FC = () => {
  return (
    <div className="contact-meta-area">
      <div className="container">
        <div className="contact-meta-area-inner section-spacing">
          <div className="meta-wrapper-box move-anim">
            <div className="meta-wrapper">
              <div className="contact-meta-box">
                <div className="content">
                  <h3 className="title">Visit Us - Canada</h3>
                  <div className="meta-list">
                    <ul className="meta-list-ul-canada">
                      <li>
                        <strong>Alberta:</strong><br />
                        Virtual Xcellence Canada Inc.<br />
                        5120 47 St NE Unit #119, Calgary<br />
                        Alberta T3J4K3
                      </li>
                      <li>
                        <strong>Ontario - Ahmic Harbour:</strong><br />
                        Virtual Xcellence Canada Inc.<br />
                        81 Ahmic street, Ahmic Harbour<br />
                        ON P0A 1P0
                      </li>
                      <li>
                        <strong>Ontario - Magnetwan:</strong><br />
                        Virtual Xcellence Canada Inc.<br />
                        28 Church St. Magnetwan<br />
                        ON P0A 1P0
                      </li>
                      <li>
                        <strong>Ontario - Mississauga:</strong><br />
                        Virtual Xcellence Inc.<br />
                        5160 Explorer Dr, Unit-30<br />
                        Mississauga, ON L4W 4T7<br />
                        <strong>Tel: 1-905-823-7677</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
        
              <div className="contact-meta-box">
                <div className="content">
                  <h3 className="title">Visit Us - India</h3>
                  <div className="meta-list">
                    <ul>
                      <li>
                        <strong>India:</strong><br />
                        Virtual Xcellence Innovations Pvt. Ltd.<br />
                        332, Angel Corporate Plaza, 3rd Floor<br />
                        Angel Mega Mall, Kaushambi<br />
                        Delhi(NCR)-India<br />
                        <strong>Tel: +91 120 499 8299</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMetaSection;
