import React from "react";
import * as Icon from 'react-feather';

const Footer = () => {
  return (
    <>
      <footer className="pt-12 px-8 font-inter text-lg flex flex-col md:px-32 justify-center items-center space-y-10">
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

      <div className="last-line flex justify-center items-center py-6 px-8 md:px-32">
        <div className="cover w-full md:max-w-5xl flex justify-between items-center">
          <p className="font-bold italic ">haris.one</p>
          <div className="flex gap-3">
            <a href="mailto:hariskumar.eth@proton.me" className="p-2 rounded-full border-gray-200 flex justify-center items-center w-full h-full border-2">
              <Icon.Mail className="h-4 w-4 md:w-7 md:h-7"  />
            </a>
            <a href="https://www.twitter.com/haris_eth" className="p-2 rounded-full border-gray-200 flex justify-center items-center w-full h-full border-2">
              <Icon.Twitter className="h-4 w-4 md:w-7 md:h-7" />
            </a>
            <a href="https://www.instagram.com/hariskumar.eth" className="p-2 rounded-full border-gray-200 flex justify-center items-center w-full h-full border-2">
              <Icon.Instagram className="h-4 w-4 md:w-7 md:h-7" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
