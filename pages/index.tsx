import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
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
import NeonBackground from "./Components/NeonBackground";

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

  // SEO Data
  const siteData = {
    title: "Hafiz Abubakar Afzal - Portfolio | Developer & Designer",
    description: "Welcome to my professional portfolio. I'm a passionate developer and designer creating amazing digital experiences. Explore my work in coding, design, and creative projects.",
    keywords: "portfolio, developer, designer, web development, UI/UX, coding, creative, professional, freelance",
    author: "Hafiz Abubakar Afzal",
    siteUrl: "https://hafizabubakarafzal.vercel.app/",
    twitterHandle: "@arcodes504",
    imageUrl: "/og-image.png",
    imageAlt: "Hafiz Abubakar Afzal - Portfolio Profile Picture"
  };

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{siteData.title}</title>
        <meta name="description" content={siteData.description} />
        <meta name="keywords" content={siteData.keywords} />
        <meta name="author" content={siteData.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta charSet="UTF-8" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="16x16" href="/me.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/me.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/me.png" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteData.siteUrl} />
        <meta property="og:title" content={siteData.title} />
        <meta property="og:description" content={siteData.description} />
        <meta property="og:image" content={`${siteData.siteUrl}${siteData.imageUrl}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={siteData.imageAlt} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Hafiz Abubakar Afzal Portfolio" />
        <meta property="og:image:type" content="image/png" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteData.twitterHandle} />
        <meta name="twitter:creator" content={siteData.twitterHandle} />
        <meta name="twitter:title" content={siteData.title} />
        <meta name="twitter:description" content={siteData.description} />
        <meta name="twitter:image" content={`${siteData.siteUrl}${siteData.imageUrl}`} />
        <meta name="twitter:image:alt" content={siteData.imageAlt} />
        
        {/* WhatsApp specific */}
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#ee4242" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteData.siteUrl} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": siteData.author,
              "url": siteData.siteUrl,
              "image": `${siteData.siteUrl}${siteData.imageUrl}`,
              "jobTitle": "Developer & Designer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": siteData.description,
              "knowsAbout": ["Web Development", "UI/UX Design", "Creative Coding"],
              "sameAs": [
                "https://github.com/abubkar-afzal",
                "https://www.linkedin.com/in/hafiz-abubakar-afzal-b77a46354/",
                "https://www.instagram.com/ar_codes504/",
                "https://wa.me/923270972423"
              ]
            })
          }}
        />
      </Head>

      {/* Main Content with better text readability */}
      <div className="relative min-h-screen">
        <NeonBackground />
        
        {/* Subtle overlay for better text contrast */}
        <div className="fixed inset-0 bg-black/20 backdrop-blur-[1px] pointer-events-none z-[-19]" />
        
        <div className="relative z-10">
          <Navbar />
          
          <div className="w-full l:w-[80vw] l:ml-auto overflow-hidden">
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
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-[999] bg-[#ee4242] text-white p-3 rounded-full shadow-lg hover:bg-[#ff0000c0] transition-all duration-300 cursor-pointer animate-bounce"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </>
  );
}