import React from "react";
import Navbar from "./Components/Navbar";
import FirstPage from "./Components/FirstPage";
import About from "./Components/About";
import Education_Experience from "./Components/Education&Experience";
import CodingSkill from "./Components/codingSkills";
import DesignSkills from "./Components/designSkills";
import Awards from "./Components/awards";
import Services from "./Components/services";
import GetInTouch from "./Components/getintouch";
export default function Home() {
  return (
    <>
    <Navbar/>
    <FirstPage/>
    <About/>
    <Education_Experience/>
    <CodingSkill/>
    <DesignSkills/>
    <Awards/>
    <Services/>
    <GetInTouch/>
    </>
  );
}
