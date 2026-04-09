import React, { useEffect, useState } from "react";
import { MdFileDownload, MdOutlineMenu, MdClose } from "react-icons/md";
import img1 from "../../public/me.png";
import Image from "next/image";
import {
  FaCode,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaDownload,
  FaHouse,
  FaUser,
  FaServicestack,
  FaFileContract,
} from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { id: "home", label: "Home", icon: <FaHouse /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "services", label: "Services", icon: <FaServicestack /> },
    { id: "work", label: "Work", icon: <FaCode /> },
    { id: "contact", label: "Contact", icon: <FaFileContract /> },
  ];

  return (
    <>
      {/* Mobile Header Bar - Elegant Glass Effect */}
      <div
        className={`fixed top-0 left-0 w-full p-4 l:hidden z-[990] transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center bg-white/5 backdrop-blur-lg border border-white/10 p-3 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3">
             <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                <Image src={img1} alt="Logo" fill className="object-cover" />
             </div>
             <span className="text-sm font-bold tracking-tight text-white">Hafiz Abubakar Afzal</span>
          </div>
          <button 
            onClick={() => setShow(true)}
            className="p-2 bg-(--mahroon) rounded-xl text-white shadow-lg shadow-(--mahroon)/20 active:scale-90 transition-transform"
          >
            <MdOutlineMenu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Backdrop Overlay - Deep Blur */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-md z-[998] transition-opacity duration-700 l:hidden ${
          show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShow(false)}
      />

      {/* Elegant Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-[100dvh] bg-(--gray) text-(--white) z-[999] transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
          ${show ? "translate-x-0" : "-translate-x-full l:translate-x-0"}
          w-[95vw] l:w-[20vw] flex flex-col border-r border-white/5 shadow-2xl`}
      >
        {/* Top Profile Header */}
        <div className="relative pt-12 pb-8 px-8 flex flex-col items-center border-b border-white/5">
          <button 
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 l:hidden"
            onClick={() => setShow(false)}
          >
            <MdClose size={20} className="text-white/50" />
          </button>

          <div className="relative w-28 h-28 rounded-3xl overflow-hidden mb-5 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl ring-1 ring-white/20">
            <Image src={img1} alt="Hafiz" fill className="object-cover" />
          </div>
          
          <h2 className="text-xl font-black tracking-tighter text-center">
            Hafiz Abubakar Afzal
          </h2>
          <p className="text-[10px] text-(--mahroon) font-bold uppercase tracking-[0.3em] mt-1">
            Full Stack Developer
          </p>

          {/* Minimal Social Links */}
          <div className="flex gap-4 mt-6">
              <Link  href={`https://www.linkedin.com/in/hafiz-abubakar-afzal-b77a46354/`} target="_blank" className="text-white/40 hover:text-(--mahroon) transition-colors transform hover:scale-110">
                <FaLinkedin size={18} />
              </Link>
              <Link  href={`https://www.instagram.com/ar_codes504/`} target="_blank" className="text-white/40 hover:text-(--mahroon) transition-colors transform hover:scale-110">
                <FaInstagram size={18} />
              </Link>
              
              <Link  href={`https://wa.me/923270972423`} target="_blank" className="text-white/40 hover:text-(--mahroon) transition-colors transform hover:scale-110">
                <FaWhatsapp size={18} />
              </Link>
          
          </div>
        </div>

        {/* Navigation - Spacing and Typography */}
        <nav className="flex-grow py-8 px-6 space-y-2 overflow-y-auto custom-scrollbar removescrollbar">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className="flex items-center gap-5 px-4 py-4 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-white/5 group"
              onClick={() => {
                document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                setShow(false);
              }}
            >
              <span className="text-xl text-white/20 group-hover:text-(--mahroon) group-hover:scale-110 transition-all">
                {link.icon}
              </span>
              <span className="text-sm font-semibold tracking-wide text-white/60 group-hover:text-white transition-all">
                {link.label}
              </span>
            </div>
          ))}
        </nav>

        {/* Action Area */}
        <div className="p-6 mt-auto">
          <a
            href="../../CV.pdf"
            download
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-full h-14 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center transition-all active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-(--mahroon) to-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            
            <div className="relative z-10 flex items-center gap-3">
               <FaDownload className={`transition-all duration-500 ${isHovered ? 'opacity-0 -translate-y-2' : 'opacity-100'}`} />
               <span className="text-xs font-black uppercase tracking-widest">
                 {isHovered ? "Ready to Download" : "Get My Resume"}
               </span>
               <MdFileDownload className={`absolute right-[-24px] transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-[-24px]' : 'opacity-0'}`} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;