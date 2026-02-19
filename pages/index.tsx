import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import FirstPage from "./Components/FirstPage";
import About from "./Components/About";
import Education_Experience from "./Components/Education&Experience";
import CodingSkill from "./Components/codingSkills";
import DesignSkills from "./Components/designSkills";
import Awards from "./Components/awards";
import Services from "./Components/services";
import GetInTouch from "./Components/getintouch";
import { FaArrowUp } from "react-icons/fa";
import FadeInWhenVisible from "./Components/FadeInWhenVisible";
import Work from "./Components/work";
import BabylonBackground from "./Components/BabylonBackground";
export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <BabylonBackground />
      <Navbar />
      <div className="w-full l:w-[80vw] l:ml-auto mx-2 overflow-hidden">
        <div id="home">
          <FadeInWhenVisible direction="down" delay={0.5}>
            <FirstPage />
          </FadeInWhenVisible>
        </div>

        <div id="about">
          <FadeInWhenVisible direction="left" delay={0.5}>
            <About />
          </FadeInWhenVisible>
        </div>

        <div id="education">
          <FadeInWhenVisible direction="right" delay={0.5}>
            <Education_Experience />
          </FadeInWhenVisible>
        </div>

        <div id="coding">
          <FadeInWhenVisible direction="up" delay={0.5}>
            <CodingSkill />
          </FadeInWhenVisible>
        </div>

        <div id="design">
          <FadeInWhenVisible direction="down" delay={0.5}>
            <DesignSkills />
          </FadeInWhenVisible>
        </div>

        <div id="awards">
          <FadeInWhenVisible direction="left" delay={0.5}>
            <Awards />
          </FadeInWhenVisible>
        </div>

        <div id="services">
          <FadeInWhenVisible direction="right" delay={0.5}>
            <Services />
          </FadeInWhenVisible>
        </div>
        
        <div id="work">
          <FadeInWhenVisible direction="left" delay={0.5}>
            <Work />
          </FadeInWhenVisible>
        </div>

        <div id="contact">
          <FadeInWhenVisible direction="right" delay={0.5}>
            <GetInTouch />
          </FadeInWhenVisible>
        </div>
        
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[999] bg-(--mahroon) text-white p-3 rounded-full shadow-lg hover:bg-(--lightmahroon) transition-all duration-[1s] cursor-pointer"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
