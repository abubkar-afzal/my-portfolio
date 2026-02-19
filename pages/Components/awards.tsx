import React from "react";
import { SiAdobe, SiCoreldraw, SiDigitalocean, SiFreelancer } from "react-icons/si";
import { CgSearchFound } from "react-icons/cg";
import { RiEnglishInput } from "react-icons/ri";
import { IoHardwareChip } from "react-icons/io5";

const Awards = () => {
  const certificateData = [
    {
      title: "SEO",
      issuer: "Digiskills",
      year: "2025",
      icon: <CgSearchFound />,
      desc: "I have completed the SEO Certificate program and hold an e-certificate from Digiskills.",
    },
    {
      title: "Freelancing",
      issuer: "Digiskills",
      year: "2025",
      icon: <SiFreelancer />,
      desc: "I have completed the Freelancing Certificate program and hold an e-certificate from Digiskills.",
    },
    {
      title: "Video Editing",
      issuer: "Digiskills",
      year: "2025",
      icon: <SiAdobe />,
      desc: "I have completed the Video Editing Certificate program and hold an e-certificate from Digiskills.",
    },
    {
      title: "Digital Literacy",
      issuer: "Digiskills",
      year: "2025",
      icon: <SiDigitalocean />,
      desc: "I have completed the Digital Literacy Certificate program and hold an e-certificate from Digiskills.",
    },
    {
      title: "Graphic Designing",
      issuer: "Heaven Of Education",
      year: "2023",
      icon: <SiCoreldraw />,
      desc: "I have earned my Graphic Designing Certificate from the Heaven Of Education institute.",
    },
    {
      title: "Office & Hardware",
      issuer: "Punjab Poly Technical",
      year: "2023",
      icon: <IoHardwareChip />,
      desc: "Certified in Office Management & Computer Hardware from Punjab Poly Technical Institute.",
    },
    {
      title: "Spoken English",
      issuer: "Punjab Poly Technical",
      year: "2023",
      icon: <RiEnglishInput />,
      desc: "Completed the Spoken English Certificate course at Punjab Poly Technical Institute.",
    },
  ];

  return (
    <div id="certificates" className="py-10 overflow-x-hidden">
      {/* Header Section */}
      <div className="my-[2rem] text-[1.5rem] font-black text-left m-2 relative text-(--white)">
        <div className="w-[60vw] l:w-[26%] l:text-right l:text-[2.2rem]">
          Certificates .
        </div>
        <div className="border-t absolute right-0 bottom-2 w-[40vw] l:w-[73%] border-(--gray)"></div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 l:ml-[4rem]">
        {certificateData.map((cert, index) => (
          <div 
            key={index} 
            className="group [perspective:1000px] w-full h-[180px] cursor-pointer"
          >
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* Front Face */}
              <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-(--gray) border border-white/5 p-6 flex flex-col justify-between text-(--white)">
                <div className="flex justify-between items-start">
                  <div className="text-3xl text-(--green)">
                    {cert.icon}
                  </div>
                  <span className="text-[10px] font-thin opacity-60 bg-black/30 px-2 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
                <div>
                  <h3 className="font-black text-[16px] leading-tight">{cert.title}</h3>
                  <p className="font-thin text-[12px] opacity-70 mt-1">{cert.issuer}</p>
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center rounded-2xl bg-(--mahroon) p-6 text-(--white) shadow-xl">
                <p className="text-[13px] font-medium text-center leading-relaxed">
                  {cert.desc}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;