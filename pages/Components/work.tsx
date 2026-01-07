import React from "react";
import img from "../../public/img1.jpg";
import Image from "next/image";
import {
  BsArrowRight,
  BsArrowRightCircle,
  BsBoxArrowInDownRight,
} from "react-icons/bs";
const Work = () => {
  return (
    <>
      <div className="my-[2rem] text-[1.5rem] font-black text-left m-2 relative -z-10 text-(--white)">
        <div className="w-[60vw] l:w-[16%] l:text-right l:text-[2.2rem]">
          Work .
        </div>
        <div className="border-t absolute right-0 bottom-2 w-[40vw] l:w-[83%]"></div>
      </div>
      <div className="l:ml-[3rem]">
        <div className="font-black text-(--white) m-2 text-[14px]">
          Projects created by single handed.
        </div>
        <div className="font-thin text-(--white) m-2 text-[12px]">
          Work hard with honesty is the first approched.
        </div>
        <div className="grid grid-cols-2 l:grid-cols-4 gap-10 mt-[2rem] m-2">
          <div className="group text-(--white) hover:text-(--green) transition-colors duration-[1s] cursor-pointer items-center text-center">
            <div>
              <Image
                src={img}
                width={50}
                height={50}
                alt="img"
                className="rounded-full mx-auto"
              />
            </div>
            <div className="my-[1rem] font-black text-[14px] group-hover:text-(--blue) transition-colors duration-300">
              Laiba Jewellery
            </div>
            <div className="my-[1rem] font-thin text-[12px]">
              An online jewellery sellers store.
            </div>
             <div className="text-(--white) text-center my-2 text-[12px]">
           <button className="relative overflow-hidden w-[10rem] p-2 rounded-[1rem] border border-(--mahroon) cursor-pointer transition-colors duration-500 group hover:text-(--black)">
                  <span className="relative z-10 font-bold">Visit</span>
                  <span className="absolute inset-0 bg-(--mahroon) translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
                </button>
        </div>
          </div>
          

          
      </div>
      </div>
    </>
  );
};

export default Work;
