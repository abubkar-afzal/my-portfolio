import Image from "next/image";
import React from "react";
import img from "../../public/img1.jpg";
const DesignSkills = () => {
  return (
    <>
      <div className="l:my-[2rem] text-[1.5rem] font-black text-left m-2 relative -z-10 text-(--white)">
            <div className="w-[60%] l:w-[28%] l:text-right l:text-[2.2rem]">Design Skills .</div>
            <div className="border-t absolute right-0 bottom-2 w-[42%] l:w-[70%]"></div>
          </div>
      <div className="grid grid-cols-2 l:grid-cols-4 gap-8 text-center m-2 l:ml-[4rem]">
        <div className="text-(--white) flex w-[10rem] bg-(--lightpink) rounded-[2rem] border border-(--pink) cursor-pointer hover:scale-[1.06] duration-[1s]">
          <div>
            <Image
              src={img}
              alt="image"
              width={50}
              height={50}
              className="rounded-full m-2"
            />
          </div>
          <div className="w-full">
            <div className="text-center text-[1.5rem] font-black">90%</div>
            <div className="font-thin text-[10px]">HTML / Tailwindcss</div>
          </div>
        </div>
        <div className="text-(--white) flex w-[10rem] bg-(--lightgreen) rounded-[2rem] border border-(--green) cursor-pointer hover:scale-[1.06] duration-[1s]">
          <div>
            <Image
              src={img}
              alt="image"
              width={50}
              height={50}
              className="rounded-full m-2"
            />
          </div>
          <div className="w-full">
            <div className="text-center text-[1.5rem] font-black">92%</div>
            <div className="font-thin text-[10px]">Corel Draw</div>
          </div>
        </div>
        <div className="text-(--white) flex w-[10rem] bg-(--lightmahroon) rounded-[2rem] border border-(--mahroon) cursor-pointer hover:scale-[1.06] duration-[1s]">
          <div>
            <Image
              src={img}
              alt="image"
              width={50}
              height={50}
              className="rounded-full m-2"
            />
          </div>
          <div className="w-full">
            <div className="text-center text-[1.5rem] font-black">75%</div>
            <div className="font-thin text-[10px]">Figma</div>
          </div>
        </div>
        <div className="text-(--white) flex w-[10rem] bg-(--lightblue) rounded-[2rem] border border-(--blue) cursor-pointer hover:scale-[1.06] duration-[1s]">
          <div>
            <Image
              src={img}
              alt="image"
              width={50}
              height={50}
              className="rounded-full m-2"
            />
          </div>
          <div className="w-full">
            <div className="text-center text-[1.5rem] font-black">80%</div>
            <div className="font-thin text-[10px]">PhotoShope</div>
          </div>
        </div>
        <div className="text-(--white) flex w-[10rem] bg-(--lightyellow) rounded-[2rem] border border-(--yellow) cursor-pointer hover:scale-[1.06] duration-[1s]">
          <div>
            <Image
              src={img}
              alt="image"
              width={50}
              height={50}
              className="rounded-full m-2"
            />
          </div>
          <div className="w-full">
            <div className="text-center text-[1.5rem] font-black">82%</div>
            <div className="font-thin text-[10px]">Snapseed</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DesignSkills;
