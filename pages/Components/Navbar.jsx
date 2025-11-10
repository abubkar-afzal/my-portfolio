import React, { useState } from "react"
const Navbar = () => {
    const [show, setShow] = useState(false);
    return <>
    <div className="fixed z-10" onClick={()=>{setShow(!show)}}>
                Icon
            </div>
        <div className={`bg-(--gray) text-(--white) w-[70vw] h-screen pt-[1rem] fixed ${show ? "left-0":"left-[-100vw]"} duration-[1s]`}>
            
            <div className="flex flex-col my-2 space-y-[2rem]">
                <div>
                <div>Image</div>
                <div>Name</div>
                <div>Developer</div>
                <div className="flex space-x-2">
                    <div>social</div>
                    <div>social</div>
                    <div>social</div>
                    <div>socail</div>
                </div>
                </div>
                <div>
                    <div className="flex space-x-2">
                        <div>Icon</div>
                        <div>Home</div>
                    </div>
                    <div className="flex space-x-2">
                        <div>Icon</div>
                        <div>About</div>
                    </div>
                    <div className="flex space-x-2">
                        <div>Icon</div>
                        <div>Resume</div>
                    </div>
                    <div className="flex space-x-2">
                        <div>Icon</div>
                        <div>Services</div>
                    </div>
                    <div className="flex space-x-2">
                        <div>Icon</div>
                        <div>Portfolio</div>
                    </div>
                    <div className="flex space-x-2">
                        <div>Icon</div>
                        <div>Pricing</div>
                    </div>
                    <div className="flex space-x-2">
                        <div>Icon</div>
                        <div>Blog</div>
                    </div>
                    <div className="flex space-x-2">
                        <div>Icon</div>
                        <div>Contact</div>
                    </div>
                </div>
                <div className="flex">
                    <div>Icon</div>
                    <div>Download CV</div>
                </div>
            </div>

        </div>
    </>
}
export default Navbar;
