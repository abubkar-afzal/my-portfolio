import Image from "next/image";
import React from "react";
import img1 from "../../public/img1.jpg"
import { motion } from 'framer-motion';
const FirstPage = () => {
    return <>
        <div className="pt-[2rem] overflow-hidden">
            <div className=" z-10">
                <div className={`text-(--white) absolute right-4 top-5`}><div className="relative flex items-center justify-center w-16 h-16">
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
                        <text className="fill-black dark:fill-white font-mono text-3rem uppercase tracking-[0.2em]">
                            <textPath xlinkHref="#circlePath">
                                Full Stack Developer  
                            </textPath>
                        </text>
                    </motion.svg>
                </div></div>
                <div>
                    <Image src={img1} alt="Image" width={1020} height={1020} className="p-8"/>
                </div>
            </div>
            <div className={`text-(--white) text-center`}>
                <div className="text-[1.6rem] font-black">Hafiz Abubkar Afzal</div>
                <div className="text-[1rem] font-thin">Full Stack Developer</div>
                <div className="text-[1.1rem] font-arial my-2">I apperciate your trust greatly.</div>
                <div className="flex flex-col space-y-2 items-center text-(--black)">
                    <button className="bg-(--yellow) p-2 rounded-[1rem] w-[10rem]">View Work</button>
                    <button className="bg-(--green) p-2 rounded-[1rem] w-[10rem]">Contact Me</button>
                </div>
            </div>
        </div>
    </>
}

export default FirstPage;