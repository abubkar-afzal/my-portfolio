import React, { useState } from "react";
import {
  BsArrowRight,
  BsBoxArrowInDownRight,
  BsCodeSlash,
  BsPalette,
  BsCpu,
  BsDatabaseCheck,
  BsPhone,
  BsVectorPen,
  BsLayers,
  BsX
} from "react-icons/bs";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const servicesData = [
    {
      title: "Full Stack Development",
      description: "End-to-end web apps with React, Next.js, and Node.js backend integration.",
      icon: <BsCodeSlash size={22} />,
      color: "var(--green)",
      whatsappMsg: "Hello! I'm interested in your Full Stack Development services. I would like to discuss my project requirements with you."
    },
    {
      title: "Graphic Design",
      description: "Visual storytelling through high-impact branding and marketing assets.",
      icon: <BsPalette size={22} />,
      color: "var(--pink)",
      whatsappMsg: "Hi! I'm interested in your Graphic Design services. I need help with branding and design assets for my business."
    },
    {
      title: "Mobile App Dev",
      description: "Building cross-platform mobile experiences with responsive fluid layouts.",
      icon: <BsPhone size={22} />,
      color: "var(--blue)",
      whatsappMsg: "Hello! I'm interested in your Mobile App Development services. I have an app idea I'd like to discuss with you."
    },
    {
      title: "UI/UX Design",
      description: "Designing user-centric interfaces with focus on accessibility and flow.",
      icon: <BsLayers size={22} />,
      color: "var(--yellow)",
      whatsappMsg: "Hi! I'm interested in your UI/UX Design services. I need help designing user interfaces for my project."
    },
    {
      title: "Hardware Technician",
      description: "System maintenance, networking, and expert hardware diagnostics.",
      icon: <BsCpu size={22} />,
      color: "var(--mahroon)",
      whatsappMsg: "Hello! I'm interested in your Hardware Technician services. I need assistance with hardware diagnostics and maintenance."
    },
    {
      title: "Database Architect",
      description: "Designing optimized SQL/NoSQL schemas for high-scale data handling.",
      icon: <BsDatabaseCheck size={22} />,
      color: "var(--green)",
      whatsappMsg: "Hi! I'm interested in your Database Architect services. I need help designing an optimized database for my application."
    },
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleConfirm = () => {
    const phoneNumber = "923270972423";
    const encodedMessage = encodeURIComponent(selectedService.whatsappMsg);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <>
      <div className="min-h-screen p-4 overflow-x-hidden">
        {/* Header Section */}
        <div className="my-[2rem] text-[1.5rem] font-black text-left m-2 relative text-(--white)">
          <div className="w-[55vw] l:w-[20%] l:text-right l:text-[2.2rem]">
            Services .
          </div>
          <div className="border-t absolute right-0 bottom-2 w-[45vw] l:w-[79%]"></div>
        </div>

        <div className="l:ml-[3rem]">
          <div className="font-black text-(--white) m-2 text-[14px]">
            Building Digital Products With Better Experience.
          </div>
          <div className="font-thin text-(--white) opacity-60 m-2 text-[12px] mb-8">
            Expanding possibilities through code, design, and hardware expertise.
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 l:grid-cols-4 gap-10 m-2">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className="group cursor-pointer flex flex-col transition-all duration-300"
                style={{ "--accent": service.color } as React.CSSProperties}
                onClick={() => handleServiceClick(service)}
              >
                {/* Icon Container */}
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-xl border border-(--gray) transition-all duration-500 bg-(--gray) text-(--white) group-hover:bg-[var(--accent)] group-hover:text-(--black)">
                  {service.icon}
                </div>
                
                {/* Title */}
                <div className="my-[1rem] font-black text-[14px] text-(--white) transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {service.title}
                </div>
                
                <div className="mb-[1rem] font-thin text-[12px] text-(--white) opacity-50 leading-relaxed group-hover:opacity-100">
                  {service.description}
                </div>

                {/* Bottom Arrows */}
                <div className="text-[18px] text-(--white) opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:text-[var(--accent)]">
                  <span className="group-hover:hidden">
                    <BsBoxArrowInDownRight />
                  </span>
                  <span className="hidden group-hover:inline">
                    <BsArrowRight />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-md w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700 shadow-2xl transform transition-all duration-300 scale-100 animate-slideUp">
            
            {/* Close Button */}
            <button
              onClick={handleCancel}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <BsX size={24} />
            </button>

            {/* Modal Content */}
            <div className="p-6">
              {/* Icon */}
              <div 
                className="w-[60px] h-[60px] flex items-center justify-center rounded-xl mb-4 mx-auto"
                style={{ backgroundColor: selectedService.color + "20", border: `1px solid ${selectedService.color}` }}
              >
                <div style={{ color: selectedService.color }}>
                  {React.cloneElement(selectedService.icon, { size: 28 })}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white text-center mb-2">
                {selectedService.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm text-center mb-6">
                {selectedService.description}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-700 my-4"></div>

              {/* Confirmation Message */}
              <p className="text-white text-sm text-center mb-6">
                Would you like to discuss this service on WhatsApp?
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleCancel}
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white font-medium hover:bg-gray-600 transition-all duration-200 "
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ backgroundColor: selectedService.color }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  Confirm
                  <BsArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Services;