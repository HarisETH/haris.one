import React from "react";

const Socials = () => {
  return (
    <div className="px-12 pt-20 flex flex-col md:pt-32 md:px-32 w-full justify-center items-center tracking-tighter gap-20">
      <div className="secondary-cover flex flex-col max-w-5xl gap-10">
        <h3 className="text-5xl font-black">My Digital Footprint</h3>
        <p className="font-cormorant font-medium text-2xl">
          I’m a growing content creator who specializes in creating engaging and
          high-quality content across various platforms.
        </p>
        <div className="indicators flex flex-col gap-6 font-cormorant text-2xl font-semibold">
          <div className="instagram flex items-center justify-between">
            <a href="">Instagram</a>
            <div className="flex items-center gap-2">
              <p>1500+</p>
              <div className="loader w-24 h-2 rounded-full bg-black"></div>
            </div>
          </div>
          <div className="twitter flex items-center justify-between">
            <a href="">Twitter</a>
            <div className="flex items-center gap-2">
              <p>250+</p>
              <div className="loader w-24 h-2 rounded-full bg-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="teritary-cover flex flex-col items-start justify-start w-full md:max-w-5xl gap-10">
        <h3 className="text-5xl font-black ">Recent Works</h3>

      </div> */}

      {/* to be added */}
    </div>
  );
};

export default Socials;