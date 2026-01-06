import Image from "next/image";
import React from "react";
import img1 from "../../public/img1.jpg"
import { motion } from 'framer-motion';
const FirstPage = () => {
    return <>
        <div className="pt-[2rem] overflow-hidden">
            <div className=" z-10">
                <div className={`text-(--white) absolute right-4 l:right-6 top-5`}><div className="flex items-center justify-center w-16 h-16 l:w-20 l:h-20">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                            />
                        </defs>
                        <text className="fill-white dark:fill-white font-mono text-3rem l:text-[1.1rem] uppercase tracking-[0.2em]">
                            <textPath xlinkHref="#circlePath">
                                Full Stack Developer  
                            </textPath>
                        </text>
                    </motion.svg>
                </div></div>
                <div className="l:flex l:flex-row-reverse">
                    <Image src={img1} alt="Image" width={1020} height={1020} className="p-8 l:w-[30rem] l:height-[30rem] l:mr-[1rem]"/>
                    <div className={`text-(--white) text-center l:flex l:flex-col l:justify-center l:mx-auto l:space-y-4`}>
                <div className="text-[1.6rem] l:text-[2rem] font-black">Hafiz Abubkar Afzal</div>
                <div className="text-[1rem] l:text-[1.2rem] font-thin text-(--mahroon)">Full Stack Developer</div>
                <div className="text-[1.1rem] l:text-[1.3rem] font-arial my-2">I apperciate your trust greatly.</div>
                <div className="flex flex-col l:flex-row l:space-x-2 space-y-2 items-center text-(--black) l:my-4">
                    <button className="bg-(--yellow) p-2 rounded-[1rem] w-[10rem] cursor-pointer hover:text-(--white) hover:bg-(--lightyellow) duration-[1s]">View Work</button>
                    <button className="bg-(--green) p-2 rounded-[1rem] w-[10rem] cursor-pointer hover:text-(--white) hover:bg-(--lightgreen) duration-[1s]">Contact Me</button>
                </div>
            </div>
                </div>
                
            </div>
            
        </div>
    </>
}

export default FirstPage;