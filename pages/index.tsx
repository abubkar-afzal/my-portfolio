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

  // SEO Data
  const siteData = {
    title: "Hafiz Abubakar Afzal - Portfolio | Developer & Designer",
    description: "Welcome to my professional portfolio. I'm a passionate developer and designer creating amazing digital experiences. Explore my work in coding, design, and creative projects.",
    keywords: "portfolio, developer, designer, web development, UI/UX, coding, creative, professional, freelance",
    author: "Hafiz Abubakar Afzal",
    siteUrl: process.env.NEXT_PUBLIC_URL, // Replace with your actual URL
    twitterHandle: "@arcodes504", // Replace with your Twitter handle
    imageUrl: "/me.png",
    imageAlt: "Hafiz Abubakar Afzal - Portfolio Profile Picture"
  };

  return (
    <>
      {/* SEO Head Section */}
      <Head>
        {/* Basic Meta Tags */}
        <title>{siteData.title}</title>
        <meta name="description" content={siteData.description} />
        <meta name="keywords" content={siteData.keywords} />
        <meta name="author" content={siteData.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        
        {/* Favicon - Multiple formats for compatibility */}
        <link rel="icon" type="image/png" sizes="16x16" href="/me.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/me.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/me.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/me.png" />
        <link rel="shortcut icon" href="/me.png" type="image/png" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteData.siteUrl} />
        <meta property="og:title" content={siteData.title} />
        <meta property="og:description" content={siteData.description} />
        <meta property="og:image" content={`${siteData.siteUrl}${siteData.imageUrl}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={siteData.imageAlt} />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteData.twitterHandle} />
        <meta name="twitter:creator" content={siteData.twitterHandle} />
        <meta name="twitter:title" content={siteData.title} />
        <meta name="twitter:description" content={siteData.description} />
        <meta name="twitter:image" content={`${siteData.siteUrl}${siteData.imageUrl}`} />
        <meta name="twitter:image:alt" content={siteData.imageAlt} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#800000" /> {/* Maroon color */}
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteData.siteUrl} />
        
        {/* Alternate Language Versions (if you have multiple languages) */}
        <link rel="alternate" hrefLang="en" href={siteData.siteUrl} />
        
        {/* Structured Data / JSON-LD for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              "knowsAbout": ["Web Development", "UI/UX Design", "Creative Coding"]
            })
          }}
        />
      </Head>

      {/* SEO Card Component */}
      <div className="sr-only" aria-hidden="true">
        {/* Hidden SEO card with profile image - for screen readers and SEO */}
        <div itemScope>
          <img src="/me.png" alt={siteData.imageAlt} itemProp="image" />
          <span itemProp="name">{siteData.author}</span>
          <span itemProp="description">{siteData.description}</span>
        </div>
      </div>

      {/* Visible SEO Card - You can style this as a nice profile card */}
      <div className="hidden md:block fixed top-24 left-4 z-40 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 max-w-[200px]">
        <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-3 border-(--mahroon)">
          <Image
            src="/me.png"
            alt={siteData.imageAlt}
            width={96}
            height={96}
            className="object-cover"
            priority
          />
        </div>
        <h3 className="text-center font-bold text-white text-lg">{siteData.author}</h3>
        <p className="text-center text-white/70 text-xs mb-2">Developer & Designer</p>
        <div className="flex justify-center space-x-2">
          <a target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.557-12.212c0-.213 0-.426-.015-.637.96-.695 1.795-1.56 2.455-2.548z"/></svg>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <BabylonBackground />
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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[999] bg-(--mahroon) text-white p-3 rounded-full shadow-lg hover:bg-(--lightmahroon) transition-all duration-[1s] cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}