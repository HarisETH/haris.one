import React from "react";
// import FeatherIcon from 'feather-icons-react';
// import { Close } from 'feather-icons-react';
import * as Icon from 'react-feather';

function Hero({ cormorant }) {
  return (
    <section className="px-8 pt-24 font-primary-light-theme flex flex-col gap-16 tracking-tighter pb-4 md:pt-32 md:px-32 w-full justify-center items-center">
      <h1 className="font-black text-5xl md:text-7xl max-w-5xl leading-none">
        Exploring physics and coding, pushing boundaries in both worlds —
        endlessly exploring the laws of nature and the web
      </h1>

      <div className="flex flex-col space-y-8 md:space-y-0 md:space-x-24  md:flex-row max-w-5xl w-full">
      <div className="about flex flex-col gap-4">
        <h2 className="text-3xl leading-9 font-black">
          Haris <br /> Kumar N
        </h2>
        <div className="handles flex gap-2">
          <a href="https://www.linkedin.com/in/haris-kumar-chennai" className="w-9 p-2 md:w-12 md:h-12 md:p-1 h-9 bg-gray-900 rounded-full linkedin flex justify-center items-center n ">
            <Icon.Linkedin className="text-gray-100" />
          </a>
          <a href="https://www.instagram.com/hariskumar.eth" className="w-9 p-2 md:w-12 md:h-12 md:p-1 h-9 bg-gray-900 rounded-full instagram flex justify-center items-center  ">
            <Icon.Instagram className="text-gray-100" />
          </a>
          <a href="https://www.twitter.com/haris_eth" className="w-9 p-2 md:w-12 md:h-12 md:p-1 h-9 bg-gray-900 rounded-full twitter flex justify-center items-center ">
            <Icon.Twitter className="text-gray-100" />
          </a>
          <a href="https://www.github.com/hariseth" className="w-9 p-2 md:w-12 md:h-12 md:p-1 h-9 bg-gray-900 rounded-full github flex justify-center items-center  ">
            <Icon.GitHub className="text-gray-100" />
          </a>
          {/* <div className="w-8 h-8 bg-gray-900 rounded-full "></div> */}
        </div>
        <div className="tags flex flex-col gap-1 text-md  text-black font-semibold tracking-tight  ">
          <p className="bg-gray-200 px-2 w-fit rounded-md">Web Developer</p>
          <p className="bg-gray-200 px-2 w-fit rounded-md">Content Creator</p>
          <p className="bg-gray-200 px-2 w-fit rounded-md ">Physics Undergraduate</p>
          <p className="bg-gray-200 px-2 w-fit rounded-md">Designer</p>
        </div>
      </div>

      <div className="intro flex flex-col gap-4 md:gap-5 w-full ">
        <p className={`intro ${cormorant.className} text-2xl break-words md:text-2xl font-medium text-black `}>
          I am a 18-year-old Physics student with a strong interest in web
          development and emerging technologies. I am also a content creator on
          Instagram and Twitter where I share my projects and explore the latest
          trends in my field. I am always eager to learn and take on new
          challenges, and I am excited to continue growing as a developer and a
          student.
        </p>

        <a
          href="mailto:hariskumar.eth@proton.me"
          className="tip-bg-light-theme font-semibold tracking-normal self-center md:self-start whitespace-nowrap text-white text-md  py-px w-fit px-2 rounded-md  "
        >
          Email me at hariskumar.eth@proton.me
        </a>
      </div>
      </div>
    </section>
  );
}

export default Hero;
