import React from "react";
import Image from "next/image";
import imgJewellery from "../../public/jewellery.png";
import imgElectronics from "../../public/electronic.png";
import imgFashion from "../../public/fashion.png";
import imgSurvey from "../../public/survey.png";
import imgPortfolio from "../../public/portfolio.png";

const Work = () => {
  const projectData = [
    {
      name: "Laiba Jewellery",
      description: "An online jewellery sellers store with luxury branding.",
      url: "https://laibajewellery.vercel.app/",
      image: imgJewellery, 
      accent: "var(--blue)",
      btnColor: "var(--mahroon)",
    },
    {
      name: "Electronic Store",
      description: "Modern E-commerce platform for high-end gadgets and electronics.",
      url: "https://electronic-store-pi.vercel.app/",
      image: imgElectronics,
      accent: "var(--green)",
      btnColor: "var(--green)",
    },
    {
      name: "Fashion",
      description: "Trending fashion store with a focus on creative UI and animations.",
      url: "https://fashion-store-seven-sable.vercel.app/",
      image: imgFashion,
      accent: "var(--pink)",
      btnColor: "var(--pink)",
    },
    {
      name: "Survey",
      description: "A data collection tool with dynamic form building capabilities.",
      url: "https://survey-abubkar-afzals-projects.vercel.app/",
      image: imgSurvey,
      accent: "var(--yellow)",
      btnColor: "var(--yellow)",
    },
    {
      name: "Previous Portfolio",
      description: "Minimalist dark-themed portfolio for developers and designers.",
      url: "https://abubakar-afzal-portfolio.vercel.app/",
      image: imgPortfolio,
      accent: "var(--white)",
      btnColor: "var(--blue)",
    }
  ];

  const handleVisit = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className=" min-h-screen py-4 overflow-x-hidden">
      {/* Header */}
      <div className="my-[2rem] text-[1.5rem] font-black text-left m-2 relative text-(--white)">
        <div className="w-[40vw] l:w-[16%] l:text-right l:text-[2.2rem]">
          Work .
        </div>
        <div className="border-t absolute right-0 bottom-2 w-[60vw] l:w-[83%] "></div>
      </div>

      <div className="l:ml-[3rem]">
        <div className="font-black text-(--white) m-2 text-[14px]">
          Projects created single-handed.
        </div>
        <div className="font-thin text-(--white) opacity-60 m-2 text-[12px]">
          Work hard with honesty is the first approach.
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 l:grid-cols-4 gap-10 mt-[2rem] m-2">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="group text-(--white) transition-all duration-500 cursor-pointer items-center text-center"
              style={{ 
                "--project-hover": project.accent, 
                "--btn-accent": project.btnColor 
              } as React.CSSProperties}
            >
              {/* Image Container - Border changes color on hover */}
              <div className="relative overflow-hidden rounded-full mx-auto w-[65px] h-[65px] border-2 border-(--gray) group-hover:border-[var(--project-hover)] transition-all duration-500">
                <Image
                  src={project.image}
                  fill
                  alt={project.name}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Dynamic Title */}
              <div className="my-[1rem] font-black text-[14px] transition-colors duration-300 group-hover:text-[var(--project-hover)]">
                {project.name}
              </div>

              <div className="my-[1rem] font-thin text-[12px] opacity-60 min-h-[40px]">
                {project.description}
              </div>

              {/* Visit Button */}
              <div className="text-(--white) text-center my-2 text-[12px]">
                <button 
                  onClick={() => handleVisit(project.url)}
                  className="relative overflow-hidden w-[8rem] l:w-[10rem] p-2 rounded-[1rem] border border-[var(--btn-accent)] cursor-pointer transition-colors duration-500 group/btn hover:text-(--black)"
                >
                  <span className="relative z-10 font-bold">Visit</span>
                  <span 
                    className="absolute inset-0 translate-y-[-100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-in-out z-0"
                    style={{ backgroundColor: project.btnColor }}
                  ></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;