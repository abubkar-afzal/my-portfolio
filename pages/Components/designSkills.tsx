import Image from "next/image";
import React from "react";
import img1 from "../../public/html.png";
import img2 from "../../public/figma.png";
import img3 from "../../public/corel.png";
import img4 from "../../public/photoshop.png";
import img5 from "../../public/snapseed.png";

const DesignSkills = () => {
  return (
    <>
      {/* Header Section - Fully Responsive */}
      <div className="my-[2rem] text-[1.5rem] font-black text-left m-2 relative -z-10 text-(--white)">
            <div className="w-[60vw] l:w-[28%] l:text-right l:text-[2.2rem]">Design Skills .</div>
            <div className="border-t absolute right-0 bottom-2 w-[40vw] l:w-[71%]"></div>
          </div>

      {/* Skills Grid - Fully Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mm:grid-cols-2 lm:grid-cols-2 t:grid-cols-3 l:grid-cols-4 ll:grid-cols-5 gap-4 sm:gap-4 mm:gap-5 lm:gap-5 t:gap-6 l:gap-6 ll:gap-8 k:gap-10 my:gap-12 justify-items-center l:justify-items-start px-2 sm:px-2 mm:px-3 lm:px-3 t:px-4 l:pl-[5rem] ll:px-6 k:px-8 my:px-10">
        
        {/* Skill Card 1 - HTML/Tailwind */}
        <div className="text-(--white) flex w-full max-w-[12rem] sm:max-w-[12rem] mm:max-w-[13rem] lm:max-w-[14rem] t:max-w-[15rem] l:max-w-[16rem] ll:max-w-[18rem] k:max-w-[20rem] my:max-w-[22rem] bg-(--lightpink) rounded-[1.5rem] sm:rounded-[1.8rem] mm:rounded-[2rem] border border-(--pink) cursor-pointer hover:scale-[1.06] duration-[1s] p-2 sm:p-2 mm:p-2.5 lm:p-2.5 t:p-3 l:p-3 ll:p-4 k:p-5 my:p-6">
          <div className="flex-shrink-0">
            <Image
              src={img1}
              alt="HTML/Tailwind icon"
              width={40}
              height={40}
              className="rounded-full w-8 h-8 sm:w-9 sm:h-9 mm:w-10 mm:h-10 lm:w-11 lm:h-11 t:w-12 t:h-12 l:w-14 l:h-14 ll:w-16 ll:h-16 k:w-20 k:h-20 my:w-24 my:h-24"
            />
          </div>
          <div className="w-full text-center ml-1 sm:ml-1 mm:ml-2 lm:ml-2 t:ml-3 l:ml-3">
            <div className="text-[1.2rem] sm:text-[1.3rem] mm:text-[1.4rem] lm:text-[1.5rem] t:text-[1.6rem] l:text-[1.8rem] ll:text-[2rem] k:text-[2.5rem] my:text-[3rem] font-black">90%</div>
            <div className="font-thin text-[0.6rem] sm:text-[0.65rem] mm:text-[0.7rem] lm:text-[0.7rem] t:text-[0.8rem] l:text-[0.85rem] ll:text-[0.9rem] k:text-[1.1rem] my:text-[1.3rem]">HTML / Tailwindcss</div>
          </div>
        </div>

        {/* Skill Card 2 - Corel Draw */}
        <div className="text-(--white) flex w-full max-w-[12rem] sm:max-w-[12rem] mm:max-w-[13rem] lm:max-w-[14rem] t:max-w-[15rem] l:max-w-[16rem] ll:max-w-[18rem] k:max-w-[20rem] my:max-w-[22rem] bg-(--lightgreen) rounded-[1.5rem] sm:rounded-[1.8rem] mm:rounded-[2rem] border border-(--green) cursor-pointer hover:scale-[1.06] duration-[1s] p-2 sm:p-2 mm:p-2.5 lm:p-2.5 t:p-3 l:p-3 ll:p-4 k:p-5 my:p-6">
          <div className="flex-shrink-0">
            <Image
              src={img2}
              alt="Corel Draw icon"
              width={40}
              height={40}
              className="rounded-full w-8 h-8 sm:w-9 sm:h-9 mm:w-10 mm:h-10 lm:w-11 lm:h-11 t:w-12 t:h-12 l:w-14 l:h-14 ll:w-16 ll:h-16 k:w-20 k:h-20 my:w-24 my:h-24"
            />
          </div>
          <div className="w-full text-center ml-1 sm:ml-1 mm:ml-2 lm:ml-2 t:ml-3 l:ml-3">
            <div className="text-[1.2rem] sm:text-[1.3rem] mm:text-[1.4rem] lm:text-[1.5rem] t:text-[1.6rem] l:text-[1.8rem] ll:text-[2rem] k:text-[2.5rem] my:text-[3rem] font-black">92%</div>
            <div className="font-thin text-[0.6rem] sm:text-[0.65rem] mm:text-[0.7rem] lm:text-[0.7rem] t:text-[0.8rem] l:text-[0.85rem] ll:text-[0.9rem] k:text-[1.1rem] my:text-[1.3rem]">Corel Draw</div>
          </div>
        </div>

        {/* Skill Card 3 - Figma */}
        <div className="text-(--white) flex w-full max-w-[12rem] sm:max-w-[12rem] mm:max-w-[13rem] lm:max-w-[14rem] t:max-w-[15rem] l:max-w-[16rem] ll:max-w-[18rem] k:max-w-[20rem] my:max-w-[22rem] bg-(--lightmahroon) rounded-[1.5rem] sm:rounded-[1.8rem] mm:rounded-[2rem] border border-(--mahroon) cursor-pointer hover:scale-[1.06] duration-[1s] p-2 sm:p-2 mm:p-2.5 lm:p-2.5 t:p-3 l:p-3 ll:p-4 k:p-5 my:p-6">
          <div className="flex-shrink-0">
            <Image
              src={img3}
              alt="Figma icon"
              width={40}
              height={40}
              className="rounded-full w-8 h-8 sm:w-9 sm:h-9 mm:w-10 mm:h-10 lm:w-11 lm:h-11 t:w-12 t:h-12 l:w-14 l:h-14 ll:w-16 ll:h-16 k:w-20 k:h-20 my:w-24 my:h-24"
            />
          </div>
          <div className="w-full text-center ml-1 sm:ml-1 mm:ml-2 lm:ml-2 t:ml-3 l:ml-3">
            <div className="text-[1.2rem] sm:text-[1.3rem] mm:text-[1.4rem] lm:text-[1.5rem] t:text-[1.6rem] l:text-[1.8rem] ll:text-[2rem] k:text-[2.5rem] my:text-[3rem] font-black">75%</div>
            <div className="font-thin text-[0.6rem] sm:text-[0.65rem] mm:text-[0.7rem] lm:text-[0.7rem] t:text-[0.8rem] l:text-[0.85rem] ll:text-[0.9rem] k:text-[1.1rem] my:text-[1.3rem]">Figma</div>
          </div>
        </div>

        {/* Skill Card 4 - Photoshop */}
        <div className="text-(--white) flex w-full max-w-[12rem] sm:max-w-[12rem] mm:max-w-[13rem] lm:max-w-[14rem] t:max-w-[15rem] l:max-w-[16rem] ll:max-w-[18rem] k:max-w-[20rem] my:max-w-[22rem] bg-(--lightblue) rounded-[1.5rem] sm:rounded-[1.8rem] mm:rounded-[2rem] border border-(--blue) cursor-pointer hover:scale-[1.06] duration-[1s] p-2 sm:p-2 mm:p-2.5 lm:p-2.5 t:p-3 l:p-3 ll:p-4 k:p-5 my:p-6">
          <div className="flex-shrink-0">
            <Image
              src={img4}
              alt="Photoshop icon"
              width={40}
              height={40}
              className="rounded-full w-8 h-8 sm:w-9 sm:h-9 mm:w-10 mm:h-10 lm:w-11 lm:h-11 t:w-12 t:h-12 l:w-14 l:h-14 ll:w-16 ll:h-16 k:w-20 k:h-20 my:w-24 my:h-24"
            />
          </div>
          <div className="w-full text-center ml-1 sm:ml-1 mm:ml-2 lm:ml-2 t:ml-3 l:ml-3">
            <div className="text-[1.2rem] sm:text-[1.3rem] mm:text-[1.4rem] lm:text-[1.5rem] t:text-[1.6rem] l:text-[1.8rem] ll:text-[2rem] k:text-[2.5rem] my:text-[3rem] font-black">80%</div>
            <div className="font-thin text-[0.6rem] sm:text-[0.65rem] mm:text-[0.7rem] lm:text-[0.7rem] t:text-[0.8rem] l:text-[0.85rem] ll:text-[0.9rem] k:text-[1.1rem] my:text-[1.3rem]">PhotoShop</div>
          </div>
        </div>

        {/* Skill Card 5 - Snapseed */}
        <div className="text-(--white) flex w-full max-w-[12rem] sm:max-w-[12rem] mm:max-w-[13rem] lm:max-w-[14rem] t:max-w-[15rem] l:max-w-[16rem] ll:max-w-[18rem] k:max-w-[20rem] my:max-w-[22rem] bg-(--lightyellow) rounded-[1.5rem] sm:rounded-[1.8rem] mm:rounded-[2rem] border border-(--yellow) cursor-pointer hover:scale-[1.06] duration-[1s] p-2 sm:p-2 mm:p-2.5 lm:p-2.5 t:p-3 l:p-3 ll:p-4 k:p-5 my:p-6">
          <div className="flex-shrink-0">
            <Image
              src={img5}
              alt="Snapseed icon"
              width={40}
              height={40}
              className="rounded-full w-8 h-8 sm:w-9 sm:h-9 mm:w-10 mm:h-10 lm:w-11 lm:h-11 t:w-12 t:h-12 l:w-14 l:h-14 ll:w-16 ll:h-16 k:w-20 k:h-20 my:w-24 my:h-24"
            />
          </div>
          <div className="w-full text-center ml-1 sm:ml-1 mm:ml-2 lm:ml-2 t:ml-3 l:ml-3">
            <div className="text-[1.2rem] sm:text-[1.3rem] mm:text-[1.4rem] lm:text-[1.5rem] t:text-[1.6rem] l:text-[1.8rem] ll:text-[2rem] k:text-[2.5rem] my:text-[3rem] font-black">82%</div>
            <div className="font-thin text-[0.6rem] sm:text-[0.65rem] mm:text-[0.7rem] lm:text-[0.7rem] t:text-[0.8rem] l:text-[0.85rem] ll:text-[0.9rem] k:text-[1.1rem] my:text-[1.3rem]">Snapseed</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignSkills;