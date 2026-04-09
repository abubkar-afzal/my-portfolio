import Link from "next/link";
import React, { useState } from "react";
import { BsEnvelopeAt, BsTelephoneOutbound, BsPerson, BsChatDots, BsCardText, BsWhatsapp } from "react-icons/bs";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thanks for reaching out! This is where your logic (EmailJS, Formspree, etc.) would go.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Header */}
      <div className="my-[2rem] text-[1.5rem] font-black text-left m-2 relative text-(--white)">
        <div className="w-[60vw] l:w-[27%] l:text-right l:text-[2.2rem]">
          Get In Touch .
        </div>
        <div className="border-t absolute right-0 bottom-2 w-[40vw] l:w-[72%] "></div>
      </div>

      <div className="l:ml-[3rem] flex-grow">
        <div className="text-(--white) mx-2 my-[2rem] font-bold text-[18px]">
          Take A Coffee & Chat With Me
        </div>

        {/* Contact Cards */}
        <div className="l:flex l:my-[2rem] l:justify-between l:mx-[4rem] gap-4">
          <Link href="mailto:hafizabubakarafzal@gmail.com" className="group text-(--white) flex items-center space-x-4 m-2 p-4 border border-(--gray) rounded-xl hover:border-(--blue) transition-all duration-500 flex-1">
            <div className="bg-(--gray) p-3 rounded-lg group-hover:bg-(--blue) group-hover:text-(--black) transition-all">
              <BsEnvelopeAt size={24} />
            </div>
            <div>
              <div className="font-thin text-[12px] opacity-60">Email</div>
              <div className="font-black text-[14px] break-all">
                hafizabubakarafzal@gmail.com
              </div>
            </div>
          </Link>

          <Link href="https://wa.me/923270972423" target="_blank" className="group text-(--white) flex items-center space-x-4 m-2 p-4 border border-(--gray) rounded-xl hover:border-(--green) transition-all duration-500 flex-1">
            <div className="bg-(--gray) p-3 rounded-lg group-hover:bg-(--green) group-hover:text-(--black) transition-all">
              <BsWhatsapp size={24} />
            </div>
            <div>
              <div className="font-thin text-[12px] opacity-60">WhatsApp</div>
              <div className="font-black text-[14px]">+923270972423</div>
            </div>
          </Link>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="text-(--white) grid grid-cols-1 l:grid-cols-2 gap-8 m-2 mt-[3rem]">
          <div className="relative group">
            <div className="flex items-center space-x-2 font-black mb-2 group-focus-within:text-(--blue) transition-colors">
              <BsPerson /> <span>Name</span>
            </div>
            <input 
              type="text" 
              name="name"
              required
              onChange={handleChange}
              className="w-full bg-transparent border-b border-(--gray) focus:border-(--blue) outline-none p-2 font-thin transition-all" 
              placeholder="Your Name"
            />
          </div>

          <div className="relative group">
            <div className="flex items-center space-x-2 font-black mb-2 group-focus-within:text-(--pink) transition-colors">
              <BsEnvelopeAt /> <span>Email</span>
            </div>
            <input 
              type="email" 
              name="email"
              required
              onChange={handleChange}
              className="w-full bg-transparent border-b border-(--gray) focus:border-(--pink) outline-none p-2 font-thin transition-all" 
              placeholder="Email Address"
            />
          </div>

          <div className="relative group">
            <div className="flex items-center space-x-2 font-black mb-2 group-focus-within:text-(--yellow) transition-colors">
              <BsCardText /> <span>Subject</span>
            </div>
            <input 
              type="text" 
              name="subject"
              required
              onChange={handleChange}
              className="w-full bg-transparent border-b border-(--gray) focus:border-(--yellow) outline-none p-2 font-thin transition-all" 
              placeholder="What is this about?"
            />
          </div>

          <div className="relative group">
            <div className="flex items-center space-x-2 font-black mb-2 group-focus-within:text-(--green) transition-colors">
              <BsChatDots /> <span>Message</span>
            </div>
            <textarea 
              name="message"
              required
              onChange={handleChange}
              rows={1}
              className="w-full bg-transparent border-b border-(--gray) focus:border-(--green) outline-none p-2 font-thin transition-all resize-none" 
              placeholder="Your Message..."
            />
          </div>

          <div className="l:col-span-2 text-center my-8">
            <button 
              type="submit"
              className="relative overflow-hidden w-[12rem] p-3 rounded-[1rem] border border-(--blue) cursor-pointer transition-colors duration-500 group hover:text-(--black)"
            >
              <span className="relative z-10 font-bold uppercase tracking-widest text-[14px]">Send Message</span>
              <span className="absolute inset-0 bg-(--blue) translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-(--white) py-[1.5rem] bg-(--gray) text-[11px] text-center font-thin l:-ml-[3rem] -mx-2 mt-10">
          &copy; 2026 | All Rights Reserved by <b className="text-(--blue)">Hafiz Abubakar Afzal</b>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;