import React, { useState } from "react"
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import img1 from "../../public/img1.jpg"
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaAddressCard, FaCamera, FaDownload, FaFileContract, FaHouse, FaSalesforce, FaServicestack, FaUser, FaVrCardboard } from "react-icons/fa6";
import { DiVim } from "react-icons/di";
const Navbar = () => {
    const [show, setShow] = useState(false);
    return <>
        <div className={`px-2 w-[70vw] fixed z-999 text-(--white) border-(--black) h-7`} onClick={() => { setShow(!show) }}>
            {show ? <RxCross2 className={`w-8 h-8 m-3`} /> : <MdOutlineMenu className="w-8 h-8 m-3" />}
        </div>
        <div className={`bg-(--gray) text-(--white) w-[70vw] h-screen pt-[1rem] fixed ${show ? "left-0" : "left-[-100vw]"} duration-[1s] overflow-y-scroll z-99`}>

            <div className="flex flex-col my-2 space-y-[2rem] items-center text-center text-wrap">
                <div className="flex flex-col items-center mt-[2rem]">
                    <div><Image src={img1} alt="image" width={150} height={150} /></div>
                    <div className="font-black text-[1.5rem]">Hafiz Abubakar Afzal</div>
                    <div className="font-thin">Developer</div>
                    <div className="flex space-x-8 m-4 text-[1.2rem]">
                        <div className="cursor-pointer hover:text-(--mahroon)"><FaLinkedin /></div>
                        <div className="cursor-pointer hover:text-(--mahroon)"><FaInstagram /></div>
                        <div className="cursor-pointer hover:text-(--mahroon)"><FaFacebook /></div>
                        <div className="cursor-pointer hover:text-(--mahroon)"><FaWhatsapp /></div>
                    </div>
                </div>
                <div className="items-left text-left w-[80%] space-y-2">
                    <div className="flex space-x-2 items-center">
                        <div><FaHouse /></div>
                        <div>Home</div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div><FaUser /></div>
                        <div>About</div>
                    </div>
                    
                    <div className="flex space-x-2 items-center">
                        <div><FaServicestack /></div>
                        <div>Services</div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div><FaFileContract /></div>
                        <div>Contact</div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className="flex space-x-2 items-center">
                    <div><FaDownload /></div>
                    <div>Download CV</div>
                </div>
            </div>

        </div>
    </>
}
export default Navbar;
