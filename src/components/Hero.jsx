import React from "react";

function Hero() {
  return (
    <section className="px-12 pt-24 font-primary-light-theme flex flex-col gap-16 tracking-tighter pb-4 md:pt-32 md:px-32 w-full justify-center items-center">
      <h1 className="font-black text-5xl md:text-7xl max-w-5xl leading-none">
        Exploring physics and coding, pushing boundaries in both worlds —
        endlessly exploring the laws of nature and the web
      </h1>

      <div className="flex flex-col gap-16 md:flex-row max-w-5xl">
      <div className="about flex flex-col gap-4">
        <h2 className="text-3xl leading-9 font-black">
          Haris <br /> Kumar N
        </h2>
        <div className="handles flex gap-2">
          <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
        </div>
        <div className="tags flex flex-col gap-1 text-md  text-black font-semibold tracking-tight  ">
          <p className="bg-gray-200 px-2 w-fit rounded-md">Web Developer</p>
          <p className="bg-gray-200 px-2 w-fit rounded-md">Content Creator</p>
          <p className="bg-gray-200 px-2 w-fit rounded-md">Physics Undergraduate</p>
          <p className="bg-gray-200 px-2 w-fit rounded-md">Designer</p>
        </div>
      </div>

      <div className="intro flex flex-col gap-4 md:gap-5">
        <p className="intro font-cormorant text-xl md:text-xl font-medium">
          I am a 18-year-old Physics student with a strong interest in web
          development and emerging technologies. I am also a content creator on
          Instagram and Twitter where I share my projects and explore the latest
          trends in my field. I am always eager to learn and take on new
          challenges, and I am excited to continue growing as a developer and a
          student.
        </p>

        <a
          href="mailto:hariskumar.eth@proton.me"
          className="tip-bg-light-theme font-semibold tracking-normal text-white text-md  py-px w-fit px-2 rounded-md  "
        >
          Email me at hariskumar.eth@proton.me
        </a>
      </div>
      </div>
    </section>
  );
}

export default Hero;
