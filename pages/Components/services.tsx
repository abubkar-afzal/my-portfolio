import React from "react";
import img from "../../public/img1.jpg";
import Image from "next/image";
import {
  BsArrowRight,
  BsArrowRightCircle,
  BsBoxArrowInDownRight,
} from "react-icons/bs";
const Services = () => {
  return (
    <>
      <div className="my-[2rem] text-[1.5rem] font-black text-left m-2 relative -z-10 text-(--white)">
        <div className="w-[60vw] l:w-[20%] l:text-right l:text-[2.2rem]">
          Services .
        </div>
        <div className="border-t absolute right-0 bottom-2 w-[40vw] l:w-[79%]"></div>
      </div>
      <div className="l:ml-[3rem]">
        <div className="font-black text-(--white) m-2 text-[14px]">
          Building Digital Products With Better Experience.
        </div>
        <div className="font-thin text-(--white) m-2 text-[12px]">
          My vision is to make world good and got the love of the good peoples.
        </div>
        <div className="grid grid-cols-2 l:grid-cols-4 gap-10 mt-[2rem] m-2">
          <div className="group text-(--white) hover:text-(--green) transition-colors duration-[1s] cursor-pointer">
            <div>
              <Image
                src={img}
                width={50}
                height={50}
                alt="img"
                className="rounded-full"
              />
            </div>
            <div className="my-[1rem] font-black text-[14px] group-hover:text-(--mahroon) transition-colors duration-300">
              Full Stack Developer
            </div>
            <div className="my-[1rem] font-thin text-[12px]">
              I can make an attractive and well-structured website with a
              creative and responsive interface.
            </div>
            <div className="text-[14px]">
              <span className="group-hover:hidden">
                <BsBoxArrowInDownRight />
              </span>
              <span className="hidden group-hover:inline">
                <BsArrowRight />
              </span>
            </div>
          </div>
          <div className="group text-(--white) hover:text-(--green) transition-colors duration-[1s] cursor-pointer">
            <div>
              <Image
                src={img}
                width={50}
                height={50}
                alt="img"
                className="rounded-full"
              />
            </div>
            <div className="my-[1rem] font-black text-[14px] group-hover:text-(--mahroon) transition-colors duration-300">
              Full Stack Developer
            </div>
            <div className="my-[1rem] font-thin text-[12px]">
              I can make an attractive and well-structured website with a
              creative and responsive interface.
            </div>
            <div className="text-[14px]">
              <span className="group-hover:hidden">
                <BsBoxArrowInDownRight />
              </span>
              <span className="hidden group-hover:inline">
                <BsArrowRight />
              </span>
            </div>
          </div><div className="group text-(--white) hover:text-(--green) transition-colors duration-[1s] cursor-pointer">
            <div>
              <Image
                src={img}
                width={50}
                height={50}
                alt="img"
                className="rounded-full"
              />
            </div>
            <div className="my-[1rem] font-black text-[14px] group-hover:text-(--mahroon) transition-colors duration-300">
              Full Stack Developer
            </div>
            <div className="my-[1rem] font-thin text-[12px]">
              I can make an attractive and well-structured website with a
              creative and responsive interface.
            </div>
            <div className="text-[14px]">
              <span className="group-hover:hidden">
                <BsBoxArrowInDownRight />
              </span>
              <span className="hidden group-hover:inline">
                <BsArrowRight />
              </span>
            </div>
          </div><div className="group text-(--white) hover:text-(--green) transition-colors duration-[1s] cursor-pointer">
            <div>
              <Image
                src={img}
                width={50}
                height={50}
                alt="img"
                className="rounded-full"
              />
            </div>
            <div className="my-[1rem] font-black text-[14px] group-hover:text-(--mahroon) transition-colors duration-300">
              Full Stack Developer
            </div>
            <div className="my-[1rem] font-thin text-[12px]">
              I can make an attractive and well-structured website with a
              creative and responsive interface.
            </div>
            <div className="text-[14px]">
              <span className="group-hover:hidden">
                <BsBoxArrowInDownRight />
              </span>
              <span className="hidden group-hover:inline">
                <BsArrowRight />
              </span>
            </div>
          </div><div className="group text-(--white) hover:text-(--green) transition-colors duration-[1s] cursor-pointer">
            <div>
              <Image
                src={img}
                width={50}
                height={50}
                alt="img"
                className="rounded-full"
              />
            </div>
            <div className="my-[1rem] font-black text-[14px] group-hover:text-(--mahroon) transition-colors duration-300">
              Full Stack Developer
            </div>
            <div className="my-[1rem] font-thin text-[12px]">
              I can make an attractive and well-structured website with a
              creative and responsive interface.
            </div>
            <div className="text-[14px]">
              <span className="group-hover:hidden">
                <BsBoxArrowInDownRight />
              </span>
              <span className="hidden group-hover:inline">
                <BsArrowRight />
              </span>
            </div>
          </div>

          
      </div>
      </div>
    </>
  );
};

export default Services;
