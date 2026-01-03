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
        <div className="text-(--white)">
            <div>
                <div>name</div>
                <input type="text" />
            </div>
            <div>
                <div>email</div>
                <input type="text" />
            </div>
            <div>
                <div>subject</div>
                <input type="text" />
            </div>
            <div>
                <div>message</div>
                <input type="text" />
            </div>
        </div>
        <div>
            <button>Submit</button>
        </div>
        <div>Location</div>
    </>
}
export default GetInTouch;