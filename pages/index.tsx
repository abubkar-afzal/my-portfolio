import React from "react";
import Navbar from "./Components/Navbar";
import FirstPage from "./Components/FirstPage";
import About from "./Components/About";
import Education_Experience from "./Components/Education&Experience";
export default function Home() {
  return (
    <>
    <Navbar/>
    <FirstPage/>
    <About/>
    <Education_Experience/>
    </>
  );
}
