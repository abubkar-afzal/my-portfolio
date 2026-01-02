import React from "react";
import ProgressCircle from "./progressLoader.jsx";

const CodingSkill = ()=>{
   const stats = [
    { label: "Next.js", pc: 93, color: "#bef264" },
    { label: "React", pc: 89, color: "#2dd4bf" },
    { label: "Python", pc: 60, color: "#fa11a1" },
    { label: "Java Script", pc: 90, color: "#aaa222" },
    { label: "C++", pc: 50, color: "#333aaa" },
    { label: "React Native", pc: 83, color: "#11e11e" },
    { label: "Electron.js", pc: 70, color: "#abaaaa" },
    { label: "Type Script", pc: 80, color: "#11aab2" },
    { label: "Babylone.js", pc: 75, color: "#3a2b4f" },
    { label: "PHP", pc: 22, color: "#aa2f21" },
    { label: "Redis", pc: 15, color: "#4da4cf" },
  ];
    return<>
    <div className="text-[1.5rem] font-black text-left m-2 relative -z-10 text-(--white)">
            <div className="w-[60%]">Coding Skills .</div>
            <div className="border-t absolute right-0 bottom-2 w-[42%]"></div>
          </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-[5rem]">
        {stats.map((s) => (
          <ProgressCircle 
            key={s.label}
            label={s.label}
            percentage={s.pc}
            color={s.color}
            // You can pass any Tailwind size class here!
            sizeClass="w-28 h-28 md:w-48 md:h-48" 
          />
        ))}
      </div>
         
    </>
}
export default CodingSkill;