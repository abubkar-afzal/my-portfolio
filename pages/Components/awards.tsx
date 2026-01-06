import Image from "next/image";
import React from "react";
import img from "../../public/img1.jpg";
const Awards = () => {
  return (
    <>
      <div className="l:my-[2rem] text-[1.5rem] font-black text-left m-2 relative -z-10 text-(--white)">
        <div className="w-[60%] l:w-[26%] l:text-right l:text-[2.2rem]">
          Certificates .
        </div>
        <div className="border-t absolute right-0 bottom-2 w-[42%] l:w-[72%]"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-[2rem] m-2 l:ml-[4rem]">

        <div className="group [perspective:1000px] w-[10rem] h-[11rem]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Face */}
            <div className="absolute inset-0 [backface-visibility:hidden] rounded-[1rem] bg-(--gray) text-(--white)">
              <div className="w-[10rem] text-center">
                <div className="text-[--white] m-2 py-2">
                  <div className="flex justify-between m-2">
                    <Image
                      src={img}
                      alt="img"
                      width={50}
                      height={50}
                      className=""
                    />
                    <div className="font-thin text-[10px]">2025</div>
                  </div>
                  <div className="font-black text-[14px]">Free Lanceing</div>
                  <div className="font-thin text-[12px] my-2">Digiskills</div>
                </div>
              </div>
            </div>

            {/* Back Face */}
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center rounded-[1rem] bg-(--gray) text-(--white)">
              <div className="text-sm font-light">More Info Coming Soon</div>
            </div>
          </div>
        </div>
        <div className="group [perspective:1000px] w-[10rem] h-[11rem]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Face */}
            <div className="absolute inset-0 [backface-visibility:hidden] rounded-[1rem] bg-(--gray) text-(--white)">
              <div className="w-[10rem] text-center">
                <div className="text-[--white] m-2 py-2">
                  <div className="flex justify-between m-2">
                    <Image
                      src={img}
                      alt="img"
                      width={50}
                      height={50}
                      className=""
                    />
                    <div className="font-thin text-[10px]">2025</div>
                  </div>
                  <div className="font-black text-[14px]">Free Lanceing</div>
                  <div className="font-thin text-[12px] my-2">Digiskills</div>
                </div>
              </div>
            </div>

            {/* Back Face */}
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center rounded-[1rem] bg-(--gray) text-(--white)">
              <div className="text-sm font-light">More Info Coming Soon</div>
            </div>
          </div>
        </div><div className="group [perspective:1000px] w-[10rem] h-[11rem]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Face */}
            <div className="absolute inset-0 [backface-visibility:hidden] rounded-[1rem] bg-(--gray) text-(--white)">
              <div className="w-[10rem] text-center">
                <div className="text-[--white] m-2 py-2">
                  <div className="flex justify-between m-2">
                    <Image
                      src={img}
                      alt="img"
                      width={50}
                      height={50}
                      className=""
                    />
                    <div className="font-thin text-[10px]">2025</div>
                  </div>
                  <div className="font-black text-[14px]">Free Lanceing</div>
                  <div className="font-thin text-[12px] my-2">Digiskills</div>
                </div>
              </div>
            </div>

            {/* Back Face */}
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center rounded-[1rem] bg-(--gray) text-(--white)">
              <div className="text-sm font-light">More Info Coming Soon</div>
            </div>
          </div>
        </div><div className="group [perspective:1000px] w-[10rem] h-[11rem]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Face */}
            <div className="absolute inset-0 [backface-visibility:hidden] rounded-[1rem] bg-(--gray) text-(--white)">
              <div className="w-[10rem] text-center">
                <div className="text-[--white] m-2 py-2">
                  <div className="flex justify-between m-2">
                    <Image
                      src={img}
                      alt="img"
                      width={50}
                      height={50}
                      className=""
                    />
                    <div className="font-thin text-[10px]">2025</div>
                  </div>
                  <div className="font-black text-[14px]">Free Lanceing</div>
                  <div className="font-thin text-[12px] my-2">Digiskills</div>
                </div>
              </div>
            </div>

            {/* Back Face */}
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center rounded-[1rem] bg-(--gray) text-(--white)">
              <div className="text-sm font-light">More Info Coming Soon</div>
            </div>
          </div>
        </div><div className="group [perspective:1000px] w-[10rem] h-[11rem]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Face */}
            <div className="absolute inset-0 [backface-visibility:hidden] rounded-[1rem] bg-(--gray) text-(--white)">
              <div className="w-[10rem] text-center">
                <div className="text-[--white] m-2 py-2">
                  <div className="flex justify-between m-2">
                    <Image
                      src={img}
                      alt="img"
                      width={50}
                      height={50}
                      className=""
                    />
                    <div className="font-thin text-[10px]">2025</div>
                  </div>
                  <div className="font-black text-[14px]">Free Lanceing</div>
                  <div className="font-thin text-[12px] my-2">Digiskills</div>
                </div>
              </div>
            </div>

            {/* Back Face */}
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center rounded-[1rem] bg-(--gray) text-(--white)">
              <div className="text-sm font-light">More Info Coming Soon</div>
            </div>
          </div>
        </div>
       
        
        
      </div>
    </>
  );
};
export default Awards;
