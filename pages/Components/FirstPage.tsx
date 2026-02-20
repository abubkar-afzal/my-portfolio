import Image from "next/image";
import React from "react";
import img1 from "../../public/me.png";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const FirstPage = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center overflow-hidden relative  px-6 py-20 l:py-0 l:px-12">
      
      {/* Decorative Background Glows - Responsive sizes */}
      <div className="absolute top-[-5%] left-[-5%] w-[200px] h-[200px] l:w-[400px] l:h-[400px] bg-(--lightgreen) rounded-full blur-[80px] l:blur-[120px] opacity-20" />
      <div className="absolute bottom-[5%] right-[-5%] w-[150px] h-[150px] l:w-[300px] l:h-[300px] bg-(--lightblue) rounded-full blur-[70px] l:blur-[100px] opacity-20" />

      <div className="container mx-auto z-10">
        <div className="flex flex-col l:flex-row-reverse items-center justify-center l:justify-between gap-10 l:gap-16">
          
          {/* Right Side: Image & Rotating Badge */}
          <div className="relative group w-full flex justify-center l:w-auto">
            {/* Main Image Container - Responsive sizing */}
            <div className="relative z-10 l:w-[70vw] l:h-[70vw] max-w-[500px] max-h-[500px] sm:w-[350px] sm:h-[350px] rounded-3xl overflow-hidden border-2 border-white/5 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src={img1}
                alt="Hafiz Abubakar Afzal"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Rotating Circular Text Badge - Hidden on small mobile, scaled on tablet */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 l:-top-10 l:-right-10 z-20 scale-75 sm:scale-100">
              <div className="relative flex items-center justify-center w-24 h-24 l:w-32 l:h-32">
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text className="fill-(--white) font-bold text-[13px] uppercase tracking-[0.25em]">
                    <textPath xlinkHref="#circlePath">
                      Full Stack Developer  • 
                    </textPath>
                  </text>
                </motion.svg>
                <div className="absolute w-2 h-2 l:w-3 l:h-3 bg-(--mahroon) rounded-full shadow-[0_0_15px_var(--mahroon)]" />
              </div>
            </div>
          </div>

          {/* Left Side: Text Content */}
          <div className="text-center l:text-left space-y-4 l:space-y-6 max-w-2xl w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[2rem] sm:text-[2.5rem] l:text-[4rem] font-black leading-tight text-(--white)">
                Hafiz <span className="text-(--green)">Abubakar</span> Afzal
              </h1>
              
              <div className="text-[1rem] sm:text-[1.3rem] l:text-[1.8rem] font-bold text-(--mahroon) mt-2 min-h-[30px] sm:min-h-[40px]">
                <Typewriter
                  options={{
                    strings: ['Full Stack Developer', 'Graphic Designer', 'Hardware Expert'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 75,
                  }}
                />
              </div>

              <p className="text-(--white) opacity-70 text-[0.9rem] sm:text-[1rem] l:text-[1.2rem] mt-4 sm:mt-6 max-w-md sm:max-w-lg mx-auto l:mx-0 font-light leading-relaxed">
                Transforming complex ideas into elegant digital solutions with honesty, 
                passion, and precision.
              </p>
            </motion.div>

            {/* Action Buttons - Responsive Stack/Row */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center l:justify-start pt-6">
              <button 
                className="relative overflow-hidden w-full sm:w-[12rem] py-3.5 rounded-xl text-(--white) hover:text-(--black) border border-(--yellow) transition-all duration-500 group" 
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 font-bold uppercase tracking-wider text-xs sm:text-sm">View Work</span>
                <span className="absolute inset-0 bg-(--yellow) translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              </button>

              <button 
                className="relative overflow-hidden w-full sm:w-[12rem] py-3.5 rounded-xl text-(--white) hover:text-(--black) border border-(--green) transition-all duration-500 group" 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 font-bold uppercase tracking-wider text-xs sm:text-sm">Contact Me</span>
                <span className="absolute inset-0 bg-(--green) translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FirstPage;