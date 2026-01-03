import Image from "next/image";
import React from "react";
import img from "../../public/img1.jpg";
const Awards = () => {
  return (
    <>
      <div className="text-[1.5rem] font-black text-left m-2 relative -z-10 text-(--white) mt-[2rem]">
        <div className="w-[50%]">Certificates .</div>
        <div className="border-t absolute right-0 bottom-2 w-[52%]"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-[2rem] m-2">
        <div className="w-[10rem] rounded-[1rem] bg-(--gray) text-center">
          <div className="text-(--white) m-2 py-2">
            <div className="flex justify-between m-2">
              <Image src={img} alt="img" width={50} height={50} className="" />
              <div className="font-thin text-[10px]">2025</div>
            </div>
            <div className="font-black text-[14px]">Free Lanceing</div>
            <div className="font-thin text-[12px] my-2">Digiskills</div>
          </div>
        </div>
        <div className="w-[10rem] rounded-[1rem] bg-(--gray) text-center">
          <div className="text-(--white) m-2 py-2">
            <div className="flex justify-between m-2">
              <Image src={img} alt="img" width={50} height={50} className="" />
              <div className="font-thin text-[10px]">2025</div>
            </div>
            <div className="font-black text-[14px]">Digital Literacy</div>
            <div className="font-thin text-[12px] my-2">Digiskills</div>
          </div>
        </div>
        <div className="w-[10rem] rounded-[1rem] bg-(--gray) text-center">
          <div className="text-(--white) m-2 py-2">
            <div className="flex justify-between m-2">
              <Image src={img} alt="img" width={50} height={50} className="" />
              <div className="font-thin text-[10px]">2025</div>
            </div>
            <div className="font-black text-[14px]">
              Video Editing, Vloging and Animation
            </div>
            <div className="font-thin text-[12px] my-2">Digiskills</div>
          </div>
        </div>
        <div className="w-[10rem] rounded-[1rem] bg-(--gray) text-center">
          <div className="text-(--white) m-2 py-2">
            <div className="flex justify-between m-2">
              <Image src={img} alt="img" width={50} height={50} className="" />
              <div className="font-thin text-[10px]">2023</div>
            </div>
            <div className="font-black text-[14px]">
              Office Management & Computer Hardware
            </div>
            <div className="font-thin text-[12px] my-2">
              Punjab Poli Technical Institute
            </div>
          </div>
        </div>
        <div className="w-[10rem] rounded-[1rem] bg-(--gray) text-center">
          <div className="text-(--white) m-2 py-2">
            <div className="flex justify-between m-2">
              <Image src={img} alt="img" width={50} height={50} className="" />
              <div className="font-thin text-[10px]">2023</div>
            </div>
            <div className="font-black text-[14px]">Spoken English</div>
            <div className="font-thin text-[12px] my-2">
              Punjab Poli Technical Institute
            </div>
          </div>
        </div>
        <div className="w-[10rem] rounded-[1rem] bg-(--gray) text-center">
          <div className="text-(--white) m-2 py-2">
            <div className="flex justify-between m-2">
              <Image src={img} alt="img" width={50} height={50} className="" />
              <div className="font-thin text-[10px]">2023</div>
            </div>
            <div className="font-black text-[14px]">Graphic Designing</div>
            <div className="font-thin text-[12px] my-2">
              Heaven Of Education
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Awards;
