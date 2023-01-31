import React from "react";

const Footer = () => {
  return (
    <>
    <footer className="pt-12 px-12 font-inter text-lg flex flex-col md:px-32 justify-center items-center space-y-10">
      <div className="flex justify-between items-center w-full md:max-w-5xl">
        <div className="contact flex flex-col gap-3">
          <p className="font-bold text-xl">Contact</p>
          <a href="">E-Mail</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
        </div>
        <div className="contact flex flex-col gap-3 font-bold text-lg items-end">
          <p href="" className="text-gray-400 cursor-pointer">
            Visit Store
          </p>
          <a href="">Hire me</a>
          <a href="">My Github</a>
          <a href="">All Links</a>
        </div>
      </div>
      <hr className="w-full max-w-5xl" />
    </footer>

    <div className="last-line flex justify-center items-center py-6 px-12 md:px-32">
        <div className="cover w-full md:max-w-5xl flex justify-between items-center">
            <p className="font-bold">haris.one</p>
            <p>Contact</p>
        </div>
    </div>
    
    </>
  );
};

export default Footer;
