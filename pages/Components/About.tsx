import React from "react";

const About =()=>{
    return<>
    <div className={`text-(--white) my-8 text-center`}>
        <div className="text-[1.5rem] font-black text-left m-2 relative -z-10">
            <div className="w-[50%] l:w-[22%] l:text-right l:text-[2.2rem]">About Me.</div>
            <div className="border-t absolute right-0 bottom-2 w-[55%] l:w-[77%]"></div>
        </div>
        <div className="m-2 l:text-left l:ml-[3rem]">
            <div className="font-semibold ">
                Hi, my name is Hafiz Abubakar Afzal.
            </div>
        </div>
        <div className="p-4 break-after-auto space-y-4 l:text-left l:ml-[2rem]">
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%] l:w-[30%]">Name</div>
                <div className="l:w-[10%]">:</div>
                <div className="w-[40%] l:w-[30%]">Hafiz Abubakar Afzal</div>
            </div>
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%] l:w-[30%]">Nationality</div>
                <div className="l:w-[10%]">:</div>
                <div className="w-[40%] l:w-[30%]">Pakistan</div>
            </div>
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%] l:w-[30%]">Phone</div>
                <div className="l:w-[10%]">:</div>
                <div className="w-[40%] l:w-[30%]">+923270972423</div>
            </div>
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%] l:w-[30%]">Email</div>
                <div className="l:w-[10%]">:</div>
                <div className="w-[40%] break-all">hafizabubkarafzal@gmail.com</div>
            </div>
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%] l:w-[30%]">Experience</div>
                <div className="l:w-[10%]">:</div>
                <div className="w-[40%] l:w-[30%]">3+ years</div>
            </div>
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%] l:w-[30%]">Full Stack Developer</div>
                <div className="l:w-[10%]">:</div>
                <div className="w-[40%] l:w-[30%]">Available</div>
            </div>
            <div className="flex space-x-2 font-mono">
                <div className="w-[40%] l:w-[30%]">Language</div>
                <div className="l:w-[10%]">:</div>
                <div className="w-[40%] l:w-[30%]">Urdu | English</div>
           </div>
        </div>
    </div>
    </>
}

export default About;