import React, { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import img1 from "../../public/img1.jpg";
import Image from "next/image";
import {
    FaCheckCircle,
  FaCode,
  FaFacebook,
  FaFileDownload,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FaAddressCard,
  FaCamera,
  FaDownload,
  FaFileContract,
  FaHouse,
  FaSalesforce,
  FaServicestack,
  FaUser,
  FaVrCardboard,
} from "react-icons/fa6";
import { DiVim } from "react-icons/di";
import { LiaFileDownloadSolid } from "react-icons/lia";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const [menuVisible, setMenuVisible] = useState(true);
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setMenuVisible(false);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setMenuVisible(true);
    }
  }, [show]);

  return (
    <>
      <div
        className={`px-2 w-[70vw] fixed l:hidden z-[999] text-white border-black h-7 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-[100vh]"
        }`}
      >
        {menuVisible && (
          <MdOutlineMenu
            className={`w-8 h-8 m-3 transition-opacity duration-500 ${
              show ? "opacity-0 z-10" : "opacity-100 z-0"
            }`}
            onClick={() => setShow(!show)}
          />
        )}
      </div>
      <div
        className={`bg-(--transparent) text-(--white) w-[100vw] h-[100vh] pt-[1rem] fixed l:w-[20vw] ${
          show ? "left-0" : "left-[-100vw] l:left-0"
        }  overflow-y-scroll l:overflow-hidden z-19 removescrollbar`}
        onClick={() => setShow(false)}
      ></div>
      <div
        className={`bg-(--gray) text-(--white) w-[70vw] h-[100%] pt-[1rem] fixed l:w-[20vw] ${
          show ? "left-0" : "left-[-100vw] l:left-0"
        } duration-[1s] overflow-y-scroll l:overflow-hidden z-99 removescrollbar px-2`}
      >
        <div className="flex flex-col my-2 space-y-[1rem] items-center text-center text-wrap">
          <div className="flex flex-col items-center mt-[2rem]">
            <div>
              <Image src={img1} alt="image" width={150} height={150} />
            </div>
            <div className="font-black text-[1.5rem] l:text-[1.3rem]">
              Hafiz Abubakar Afzal
            </div>
            <div className="font-thin l:text-[0.9rem]">Developer</div>
            <div className="flex space-x-2 m-4 text-[1.2rem]">
              <div className="cursor-pointer bg-transparent p-3 duration-[1s] rounded-full hover:bg-(--mahroon) l:text-[0.9rem]">
                <FaLinkedin />
              </div>
              <div className="cursor-pointer bg-transparent p-3 duration-[1s] rounded-full hover:bg-(--mahroon) l:text-[0.9rem]">
                <FaInstagram />
              </div>
              <div className="cursor-pointer bg-transparent p-3 duration-[1s] rounded-full hover:bg-(--mahroon) l:text-[0.9rem]">
                <FaFacebook />
              </div>
              <div className="cursor-pointer bg-transparent p-3 duration-[1s] rounded-full hover:bg-(--mahroon) l:text-[0.9rem]">
                <FaWhatsapp />
              </div>
            </div>
          </div>
          <div className="items-left text-left w-[80%] space-y-2 l:space-y-4 l:text-[0.9rem]">
            <div className="flex space-x-2 items-center cursor-pointer hover:text-(--mahroon) duration-[1s]" onClick={() => { document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }); setShow(false); }}>
              <div>
                <FaHouse />
              </div>
              <div>Home</div>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer hover:text-(--mahroon) duration-[1s]" onClick={() => { document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); setShow(false); }}>
              <div>
                <FaUser />
              </div>
              <div>About</div>
            </div>

            <div className="flex space-x-2 items-center cursor-pointer hover:text-(--mahroon) duration-[1s]" onClick={() => { document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); setShow(false); }}>
              <div>
                <FaServicestack />
              </div>
              <div>Services</div>
            </div>

            <div className="flex space-x-2 items-center cursor-pointer hover:text-(--mahroon) duration-[1s]" onClick={() => { document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); setShow(false); }}>
              <div>
                <FaCode />
              </div>
              <div>Work</div>
            </div>

            <div className="flex space-x-2 items-center cursor-pointer hover:text-(--mahroon) duration-[1s]" onClick={() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); setShow(false); }}>
              <div>
                <FaFileContract />
              </div>
              <div>Contact</div>
            </div>
          </div>

      <div
  className="relative group w-fit px-6 py-2 rounded-[1rem] cursor-pointer overflow-hidden l:text-[0.9rem] text-(--white) bg-(--gray) transition-colors duration-500"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {/* Swipe Background */}
  <span className="absolute inset-0 bg-(--mahroon) -translate-x-full group-hover:translate-x-0 transition-transform duration-[0.5] ease-in-out z-0" />

  {/* Content */}
  <div className="relative z-10 flex items-center gap-2 transition-all duration-500 ease-in-out group-hover:scale-105">
    {/* Icon on the left (initial) */}
    <div className="relative w-5 h-5">
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
          isHovered ? "opacity-0 -translate-x-2" : "opacity-100 translate-x-0"
        }`}
      >
        <FaDownload />
      </span>
    </div>

    {/* Text */}
    <div className="transition-all duration-500 ease-in-out">
      {isHovered ? "Want to Download" : "Download CV"}
    </div>

    {/* Icon on the right (hover) */}
    <div className="relative w-5 h-5">
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <FaFileDownload />
      </span>
    </div>
  </div>
</div>





        </div>
      </div>
    </>
  );
};
export default Navbar;
