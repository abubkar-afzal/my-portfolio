import React from "react";
import img from "../../public/img1.jpg";
import Image from "next/image";
const GetInTouch = () => {
  return (
    <>
      <div className="my-[2rem] text-[1.5rem] font-black text-left m-2 relative -z-10 text-(--white)">
        <div className="w-[60vw] l:w-[27%] l:text-right l:text-[2.2rem]">
          Get In Touch .
        </div>
        <div className="border-t absolute right-0 bottom-2 w-[40vw] l:w-[72%]"></div>
      </div>
      <div className="l:ml-[3rem] ">
        <div className="text-(--white) mx-2 my-[2rem]">Take A Coffee & Chat With Me</div>
        <div className="l:flex l:my-[2rem] l:justify-between l:mx-[4rem]">
        <div className="text-(--white) flex space-x-2 m-2">
          <div>
            <Image src={img} alt="img" width={50} height={50} className="" />
          </div>
          <div>
            <div className="font-thin text-[12px]">Email</div>
            <div className="font-black text-[14px]">
              hafizabubakarafzal@gmail.com
            </div>
          </div>
        </div>
        <div className="text-(--white) flex space-x-2 m-2">
          <div>
            <Image src={img} alt="img" width={50} height={50} className="" />
          </div>
          <div>
            <div className="font-thin text-[12px]">Phone</div>
            <div className="font-black text-[14px]">+923270972423</div>
          </div>
        </div></div>
        <div className="text-(--white) grid grid-cols-1 l:grid-cols-2 gap-8 text-center m-2 mt-[2rem]">
          <div>
            <div className="font-black my-4">Name</div>
            <input type="text" className="border-b p-0 text-center font-thin" />
          </div>
          <div>
            <div className="font-black my-4">Email</div>
            <input type="text" className="border-b p-0 text-center font-thin" />
          </div>
          <div>
            <div className="font-black my-4">Subject</div>
            <input type="text" className="border-b p-0 text-center font-thin" />
          </div>
          <div>
            <div className="font-black my-4">Message</div>
            <input type="text" className="border-b p-0 text-center font-thin" />
          </div>
        </div>
        <div className="text-(--white) text-center my-2">
           <button className="relative overflow-hidden w-[10rem] p-2 rounded-[1rem] border border-(--blue) cursor-pointer transition-colors duration-500 group hover:text-(--black)">
                  <span className="relative z-10 font-bold">Submit</span>
                  <span className="absolute inset-0 bg-(--blue) translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
                </button>
        </div>
        <div className="text-(--white) py-[1rem] bg-(--gray) text-[10px] text-center font-thin l:-ml-[3rem] -mx-2">
          &copy; 2026 | All Rights Reserved by <b>Hafiz Abubakar Afzal</b>
        </div>
      </div>
    </>
  );
};
export default GetInTouch;
