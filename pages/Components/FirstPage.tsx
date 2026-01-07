import Image from "next/image";
import React from "react";
import img1 from "../../public/img1.jpg";
import { motion } from "framer-motion";
const FirstPage = () => {
  return (
    <>
      <div className="pt-[2rem] overflow-hidden">
        <div className=" z-10">
          <div className="l:flex l:flex-row-reverse ">
            <div className="relative">
              {/* Image */}
              <Image
                src={img1}
                alt="Image"
                width={1020}
                height={1020}
                className="p-8 l:w-[30rem] l:h-[30rem] l:mr-[1rem] w-[22rem] h-[22rem] mx-auto"
              />
              <div className={`text-(--white) absolute right-0 l:left-0 top-0`}>
                <div className="flex items-center justify-center w-16 h-16 l:w-20 l:h-20">
                  <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                      />
                    </defs>
                    <text className="fill-white dark:fill-white font-mono text-3rem l:text-[1.rem] uppercase tracking-[0.2em]">
                      <textPath xlinkHref="#circlePath">
                        Full Stack Developer
                      </textPath>
                    </text>
                  </motion.svg>
                </div>
                <div className="w-6 h-6 l:w-8 l:h-8 bg-(--white) rounded-full absolute l:top-6 l:left-6 top-5 right-5 "></div>
              </div>
            </div>
            <div
              className={`text-(--white) text-center l:flex l:flex-col l:justify-center l:mx-auto l:space-y-4`}
            >
              <div className="text-[1.6rem] l:text-[2rem] font-black">
                Hafiz Abubkar Afzal
              </div>
              <div className="text-[1rem] l:text-[1.2rem] font-thin text-(--mahroon)">
                Full Stack Developer
              </div>
              <div className="text-[1.1rem] l:text-[1.3rem] font-arial my-2">
                I apperciate your trust greatly.
              </div>
              <div className="flex flex-col l:flex-row l:space-x-2 space-y-2 items-center text-(--black) l:my-4 content-center">
                <button className="relative overflow-hidden w-[10rem] p-2 rounded-[1rem] text-(--white) hover:text-(--black) border border-(--yellow) cursor-pointer transition-colors duration-500 group" onClick={() => { document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });}}>
                  <span className="relative z-10 font-bold">View Work</span>
                  <span className="absolute inset-0 bg-(--yellow) translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
                </button>

                 <button className="relative overflow-hidden w-[10rem] p-2 rounded-[1rem] text-(--white) hover:text-(--black) border border-(--green) cursor-pointer transition-colors duration-500 group" onClick={() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });}}>
                  <span className="relative z-10 font-bold">Contact Me</span>
                  <span className="absolute inset-0 bg-(--green) translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
