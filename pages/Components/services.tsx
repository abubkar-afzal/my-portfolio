import React from "react";
import img from "../../public/img1.jpg"
import Image from "next/image";
import { BsBoxArrowInDownRight } from "react-icons/bs";
const Services = ()=>{
    return<>
        <div className="text-[1.5rem] font-black text-left m-2 relative -z-10 text-(--white) mt-[2rem]">
        <div className="w-[60%]">Services .</div>
        <div className="border-t absolute right-0 bottom-2 w-[64%]"></div>
      </div>
        
        <div className="font-black text-(--white) m-2 text-[14px]">Building Digital Products With Better Experience.</div>
        <div className="font-thin text-(--white) m-2 text-[12px]">My vision is to make world good and got the love of the good peoples.</div>
       <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-[2rem] m-2">
        <div className="text-(--white)">
            <div>
                <Image src={img} width={50} height={50} alt="img" className="rounded-full"/>
            </div>
            <div className="my-[1rem] font-black text-[14px]">Full Stack Developer</div>
            <div className="my-[1rem] font-thin text-[12px]">I can make a attractive and well structure website with creative and persponsive interface.</div>
            <div className="text-[14px]"><BsBoxArrowInDownRight />
</div>
        </div>
        <div className="text-(--white)">
            <div>
                <Image src={img} width={50} height={50} alt="img" className="rounded-full"/>
            </div>
            <div className="my-[1rem] font-black text-[14px]">Full Stack Developer</div>
            <div className="my-[1rem] font-thin text-[12px]">I can make a attractive and well structure website with creative and persponsive interface.</div>
            <div className="text-[14px]"><BsBoxArrowInDownRight />
</div>
        </div>
        <div className="text-(--white)">
            <div>
                <Image src={img} width={50} height={50} alt="img" className="rounded-full"/>
            </div>
            <div className="my-[1rem] font-black text-[14px]">Full Stack Developer</div>
            <div className="my-[1rem] font-thin text-[12px]">I can make a attractive and well structure website with creative and persponsive interface.</div>
            <div className="text-[14px]"><BsBoxArrowInDownRight />
</div>
        </div>
        <div className="text-(--white)">
            <div>
                <Image src={img} width={50} height={50} alt="img" className="rounded-full"/>
            </div>
            <div className="my-[1rem] font-black text-[14px]">Full Stack Developer</div>
            <div className="my-[1rem] font-thin text-[12px]">I can make a attractive and well structure website with creative and persponsive interface.</div>
            <div className="text-[14px]"><BsBoxArrowInDownRight />
</div>
        </div>
        <div className="text-(--white)">
            <div>
                <Image src={img} width={50} height={50} alt="img" className="rounded-full"/>
            </div>
            <div className="my-[1rem] font-black text-[14px]">Full Stack Developer</div>
            <div className="my-[1rem] font-thin text-[12px]">I can make a attractive and well structure website with creative and persponsive interface.</div>
            <div className="text-[14px]"><BsBoxArrowInDownRight />
</div>
        </div>
       </div>
    </>
}

export default Services;