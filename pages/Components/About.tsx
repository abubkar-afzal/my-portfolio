import React from "react";

const About =()=>{
    return<>
    <div className={`text-(--white) my-8 text-center`}>
        <div className="text-[1.5rem] font-black text-left m-2 relative -z-10">
            <div className="w-[50%]">About Me.</div>
            <div className="border-t absolute right-0 bottom-2 w-[55%]"></div>
        </div>
        <div className="m-2">
            <div className="font-thin ">
                Hi, my name is Hafiz Abubakar Afzal.
            </div>
        </div>
        <div className="p-4 break-after-auto space-y-4">
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%]">Name</div>
                <div>:</div>
                <div className="w-[40%]">Hafiz Abubakar Afzal</div>
            </div>
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%]">Nationality</div>
                <div>:</div>
                <div className="w-[40%]">Pakistan</div>
            </div>
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%]">Phone</div>
                <div>:</div>
                <div className="w-[40%]">+923270972423</div>
            </div>
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%]">Email</div>
                <div>:</div>
                <div className="w-[40%] break-all">hafizabubkarafzal@gmail.com</div>
            </div>
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%]">Experience</div>
                <div>:</div>
                <div className="w-[40%]">3+ years</div>
            </div>
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%]">Full Stack Developer</div>
                <div>:</div>
                <div className="w-[40%]">Available</div>
            </div>
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%]">Language</div>
                <div>:</div>
                <div className="w-[40%]">Urdu | English</div>
            </div>
        </div>
    </div>
    </>
}

export default About;