import React from "react";
import {
  BsArrowRight,
  BsBoxArrowInDownRight,
  BsCodeSlash,
  BsPalette,
  BsCpu,
  BsDatabaseCheck,
  BsPhone,
  BsVectorPen,
  BsLayers
} from "react-icons/bs";

const Services = () => {
  const servicesData = [
    {
      title: "Full Stack Development",
      description: "End-to-end web apps with React, Next.js, and Node.js backend integration.",
      icon: <BsCodeSlash size={22} />,
      color: "var(--green)",
    },
    {
      title: "Graphic Design",
      description: "Visual storytelling through high-impact branding and marketing assets.",
      icon: <BsPalette size={22} />,
      color: "var(--pink)",
    },
    {
      title: "Mobile App Dev",
      description: "Building cross-platform mobile experiences with responsive fluid layouts.",
      icon: <BsPhone size={22} />,
      color: "var(--blue)",
    },
    {
      title: "UI/UX Design",
      description: "Designing user-centric interfaces with focus on accessibility and flow.",
      icon: <BsLayers size={22} />,
      color: "var(--yellow)",
    },
    {
      title: "Hardware Technician",
      description: "System maintenance, networking, and expert hardware diagnostics.",
      icon: <BsCpu size={22} />,
      color: "var(--mahroon)",
    },
    {
      title: "Database Architect",
      description: "Designing optimized SQL/NoSQL schemas for high-scale data handling.",
      icon: <BsDatabaseCheck size={22} />,
      color: "var(--green)",
    },
  ];

  return (
    <div className="bg-(--black) min-h-screen p-4 overflow-x-hidden">
      {/* Header Section - Removed -z-10 so it's visible */}
      <div className="my-[2rem] text-[1.5rem] font-black text-left m-2 relative text-(--white)">
        <div className="w-[60vw] l:w-[20%] l:text-right l:text-[2.2rem]">
          Services .
        </div>
        <div className="border-t absolute right-0 bottom-2 w-[40vw] l:w-[79%] border-(--gray)"></div>
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
              /* Casting style to bypass TypeScript error */
              style={{ "--accent": service.color } as React.CSSProperties}
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
  );
};

export default Services;