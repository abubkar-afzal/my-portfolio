import React from "react";
import img from "../../public/img1.jpg"
import Image from "next/image";
const GetInTouch=()=>{

    return<>
    <div className="text-[1.5rem] font-black text-left m-2 relative -z-10 text-(--white) mt-[2rem]">
        <div className="w-[60%]">Get In Touch .</div>
        <div className="border-t absolute right-0 bottom-2 w-[50%]"></div>
      </div>

        <div>Take A Coffee & Chat With Me</div>
        <div className="text-(--white) flex space-x-2 m-2">
            <div><Image src={img} alt="img" width={50} height={50} className=""/></div>
            <div><div className="font-thin text-[12px]">Email</div>
            <div className="font-black text-[14px]">hafizabubakarafzal@gmail.com</div></div>
        </div>
        <div className="text-(--white) flex space-x-2 m-2">
            <div><Image src={img} alt="img" width={50} height={50} className=""/></div>
            <div><div className="font-thin text-[12px]">Phone</div>
            <div className="font-black text-[14px]">+923270972423</div></div>
        </div>
        <div className="text-(--white) grid grid-cols-2 md:grid-cols-3 gap-8 text-center m-2 mt-[2rem]">
            <div>
                <div className="font-black my-4">Name</div>
                <input type="text" className="border-b p-0 text-center font-thin"/>
            </div>
            <div>
                <div className="font-black my-4">Email</div>
                <input type="text" className="border-b p-0 text-center font-thin"/>
            </div><div>
                <div className="font-black my-4">Subject</div>
                <input type="text" className="border-b p-0 text-center font-thin"/>
            </div><div>
                <div className="font-black my-4">Message</div>
                <input type="text" className="border-b p-0 text-center font-thin"/>
            </div>
        </div>
        <div className="text-(--white) text-center">
            <button className="my-[1rem] rounded-[1.2rem] bg-(--blue) p-2 px-[2rem] font-black">Submit</button>
        </div>
        <div className="text-(--white) py-[1rem] bg-(--gray) text-[10px] text-center font-thin">&copy; 2026 | All Rights Reserved by <b>Hafiz Abubakar Afzal</b></div>
    </>
}
export default GetInTouch;