import { ReactElement } from "react";

interface ClientData {
  name: string;
  logo: string;
  alt: string;
}

interface ClientsSectionProps {
  data?: {
    subtitle?: string;
    title?: string;
    clients?: ClientData[];
  };
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ data }) => {
  const defaultData = {
    subtitle: "Our Partners",
    title: "Some of our clients",
    clients: [
      {
        name: "Birlasoft",
        logo: "/assets/imgs/clients/birlasoft.png",
        alt: "Birlasoft Logo"
      },
      {
        name: "Cisco",
        logo: "/assets/imgs/clients/cisco.png",
        alt: "Cisco Logo"
      },
      {
        name: "EnerNote",
        logo: "/assets/imgs/clients/enernote.png",
        alt: "EnerNote Logo"
      },
      {
        name: "GE Healthcare",
        logo: "/assets/imgs/clients/gehealthcare.png",
        alt: "GE Healthcare Logo"
      },
      {
        name: "iGate",
        logo: "/assets/imgs/clients/igate.png",
        alt: "iGate Logo"
      },
      {
        name: "Sony YIO",
        logo: "/assets/imgs/clients/sony-yio.png",
        alt: "Sony YIO Logo"
      },
      {
        name: "Al romansia",
        logo: "/assets/imgs/clients/ai-romansia.png",
        alt: "Al Romania Logo"
      },
      {
        name: "Samba",
        logo: "/assets/imgs/clients/samba.png",
        alt: "Samba Logo"
      },
      {
        name: "SABB",
        logo: "/assets/imgs/clients/sabb.png",
        alt: "SABB Logo"
      },
      {
        name: "Renault",
        logo: "/assets/imgs/clients/renault.png",
        alt: "Renault Logo"
      },
      {
        name: "ALJ Toyota",
        logo: "/assets/imgs/clients/alj-toyota.png",
        alt: "ALJ Toyota Logo"
      },
      {
        name: "Petromin",
        logo: "/assets/imgs/clients/petromin.png",
        alt: "Petromin Logo"
      },
      {
        name: "Shoemart",
        logo: "/assets/imgs/clients/shoemart.png",
        alt: "Shoemart Logo"
      },
   
    ]
  };

  const sectionData = data || defaultData;

  return (
    <section className="clients-area">
      <div className="clients-area-inner section-spacing">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {sectionData?.subtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">
                  {sectionData?.title}
                </h2>
              </div>
            </div>
          </div>

          <div className="clients-wrapper fade-anim">
            <div className="clients-grid">
              {sectionData?.clients?.map((client, index) => (
                <div key={index} className="client-item">
                  <div className="client-logo">
                    <img 
                      src={client.logo} 
                      alt={client.alt}
                      className="client-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
