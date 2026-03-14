import Image from "next/image";
import React from "react";
import img1 from "../../public/me.png";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const FirstPage = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center overflow-hidden relative px-4 sm:px-6 mm:px-6 lm:px-8 t:px-10 l:px-12 ll:px-16 k:px-20 my:px-24 pt-16 mm:pt-20 lm:pt-20 t:pt-24 sm:pt-16 l:pt-0">
      
      {/* Decorative Background Glows - Fully responsive sizes */}
      <div className="absolute top-[-5%] left-[-5%] w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] mm:w-[220px] mm:h-[220px] lm:w-[250px] lm:h-[250px] t:w-[300px] t:h-[300px] l:w-[350px] l:h-[350px] ll:w-[400px] ll:h-[400px] k:w-[500px] k:h-[500px] my:w-[600px] my:h-[600px] bg-(--lightgreen) rounded-full blur-[60px] sm:blur-[70px] mm:blur-[80px] lm:blur-[90px] t:blur-[100px] l:blur-[110px] ll:blur-[120px] k:blur-[140px] my:blur-[160px] opacity-20" />
      <div className="absolute bottom-[5%] right-[-5%] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] mm:w-[160px] mm:h-[160px] lm:w-[200px] lm:h-[200px] t:w-[250px] t:h-[250px] l:w-[280px] l:h-[280px] ll:w-[300px] ll:h-[300px] k:w-[400px] k:h-[400px] my:w-[500px] my:h-[500px] bg-(--lightblue) rounded-full blur-[50px] sm:blur-[60px] mm:blur-[70px] lm:blur-[80px] t:blur-[90px] l:blur-[100px] ll:blur-[110px] k:blur-[130px] my:blur-[150px] opacity-20" />

      <div className="container mx-auto z-10">
        <div className="flex flex-col l:flex-row-reverse items-center justify-center l:justify-between gap-6 sm:gap-8 mm:gap-8 lm:gap-10 t:gap-12 l:gap-16 ll:gap-20 k:gap-24 my:gap-28 sm:pt-12">
          
          {/* Right Side: Image & Rotating Badge */}
          <div className="relative group w-full flex justify-center l:w-auto">
            {/* Main Image Container - Fully responsive sizing */}
            <div className="relative z-10 w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] mm:w-[260px] mm:h-[260px] lm:w-[300px] lm:h-[300px] t:w-[350px] t:h-[350px] l:w-[400px] l:h-[400px] ll:w-[450px] ll:h-[450px] k:w-[500px] k:h-[500px] my:w-[600px] my:h-[600px] rounded-2xl sm:rounded-2xl mm:rounded-3xl lm:rounded-3xl overflow-hidden border-2 border-white/5 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src={img1}
                alt="Hafiz Abubakar Afzal"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 290px) 200px, (max-width: 375px) 220px, (max-width: 425px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 350px, (max-width: 1440px) 400px, (max-width: 2560px) 500px, 600px"
              />
            </div>

            {/* Rotating Circular Text Badge - Fully responsive */}
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 mm:-top-4 mm:-right-4 lm:-top-5 lm:-right-5 t:-top-6 t:-right-6 l:-top-8 l:-right-8 ll:-top-10 ll:-right-10 k:-top-12 k:-right-12 my:-top-14 my:-right-14 z-20">
              <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mm:w-24 mm:h-24 lm:w-24 lm:h-24 t:w-28 t:h-28 l:w-32 l:h-32 ll:w-36 ll:h-36 k:w-40 k:h-40 my:w-44 my:h-44">
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
                  <text className="fill-(--white) font-bold text-[8px] sm:text-[13px] ll:text-[14px] k:text-[16px] my:text-[18px] uppercase tracking-[0.2em] sm:tracking-[0.25em]">
                    <textPath xlinkHref="#circlePath">
                      Full Stack Developer  • 
                    </textPath>
                  </text>
                </motion.svg>
                <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 mm:w-2 mm:h-2 lm:w-2.5 lm:h-2.5 t:w-2.5 t:h-2.5 l:w-3 l:h-3 ll:w-3.5 ll:h-3.5 k:w-4 k:h-4 my:w-5 my:h-5 bg-(--mahroon) rounded-full shadow-[0_0_15px_var(--mahroon)]" />
              </div>
            </div>
          </div>

          {/* Left Side: Text Content */}
          <div className="text-center l:text-left space-y-3 sm:space-y-3 mm:space-y-4 lm:space-y-4 t:space-y-5 l:space-y-6 ll:space-y-7 k:space-y-8 my:space-y-10 max-w-2xl w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[1.5rem] sm:text-[1.8rem] mm:text-[2rem] lm:text-[2.2rem] t:text-[2.8rem] l:text-[3.5rem] ll:text-[4rem] k:text-[5rem] my:text-[6rem] font-black leading-tight text-(--white)">
                Hafiz <span className="text-(--green)">Abubakar</span> Afzal
              </h1>
              
              <div className="text-[0.9rem] sm:text-[1rem] mm:text-[1.1rem] lm:text-[1.2rem] t:text-[1.5rem] l:text-[1.8rem] ll:text-[2rem] k:text-[2.5rem] my:text-[3rem] font-bold text-(--mahroon) mt-1 sm:mt-1 mm:mt-2 lm:mt-2 t:mt-3 l:mt-4 min-h-[30px] sm:min-h-[35px] mm:min-h-[35px] lm:min-h-[40px] t:min-h-[45px] l:min-h-[50px] ll:min-h-[60px] k:min-h-[70px] my:min-h-[80px]">
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

              <p className="text-(--white) opacity-70 text-[0.8rem] sm:text-[0.85rem] mm:text-[0.9rem] lm:text-[0.95rem] t:text-[1.1rem] l:text-[1.2rem] ll:text-[1.3rem] k:text-[1.6rem] my:text-[2rem] mt-3 sm:mt-3 mm:mt-4 lm:mt-4 t:mt-5 l:mt-6 max-w-md sm:max-w-md mm:max-w-md lm:max-w-lg t:max-w-lg l:max-w-xl mx-auto l:mx-0 font-light leading-relaxed">
                Transforming complex ideas into elegant digital solutions with honesty, 
                passion, and precision.
              </p>
            </motion.div>

            {/* Action Buttons - Fully responsive */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 mm:gap-4 lm:gap-4 t:gap-5 l:gap-6 justify-center l:justify-start pt-4 sm:pt-4 mm:pt-5 lm:pt-5 t:pt-6 l:pt-6">
              <button 
                className="relative overflow-hidden w-full sm:w-[10rem] mm:w-[11rem] lm:w-[11rem] t:w-[12rem] l:w-[12rem] ll:w-[14rem] k:w-[16rem] my:w-[18rem] py-2.5 sm:py-2.5 mm:py-3 lm:py-3 t:py-3.5 l:py-3.5 ll:py-4 k:py-5 my:py-6 rounded-lg sm:rounded-lg mm:rounded-xl lm:rounded-xl text-(--white) hover:text-(--black) border border-(--yellow) transition-all duration-500 group" 
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 font-bold uppercase tracking-wider text-[0.7rem] sm:text-[0.7rem] mm:text-[0.75rem] lm:text-[0.8rem] t:text-[0.85rem] l:text-[0.9rem] ll:text-[1rem] k:text-[1.2rem] my:text-[1.4rem]">View Work</span>
                <span className="absolute inset-0 bg-(--yellow) translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              </button>

              <button 
                className="relative overflow-hidden w-full sm:w-[10rem] mm:w-[11rem] lm:w-[11rem] t:w-[12rem] l:w-[12rem] ll:w-[14rem] k:w-[16rem] my:w-[18rem] py-2.5 sm:py-2.5 mm:py-3 lm:py-3 t:py-3.5 l:py-3.5 ll:py-4 k:py-5 my:py-6 rounded-lg sm:rounded-lg mm:rounded-xl lm:rounded-xl text-(--white) hover:text-(--black) border border-(--green) transition-all duration-500 group" 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 font-bold uppercase tracking-wider text-[0.7rem] sm:text-[0.7rem] mm:text-[0.75rem] lm:text-[0.8rem] t:text-[0.85rem] l:text-[0.9rem] ll:text-[1rem] k:text-[1.2rem] my:text-[1.4rem]">Contact Me</span>
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