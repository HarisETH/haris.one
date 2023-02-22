import React from "react";

const Current = ({cormorant}) => {
  return (
    <div
      className={`px-8 pt-20 flex flex-col md:pt-32 md:px-32 justify-center  items-center tracking-tighter gap-20`}
    >
      <div className="second-coat w-full md:max-w-5xl flex flex-col gap-8 md:gap-16">
        <h4 className="text-5xl font-black">Currently...</h4>
        <div className="flex flex-col gap-6">
          <p className={`font-medium text-2xl ${cormorant.className}`}>
            Currently, I am actively engaged in learning new skills related to
            my work. I am taking a hands-on approach by building projects and
            experimenting with new technologies in order to apply my learning to
            real-world situations
          </p>

          <p className={`font-medium text-2xl ${cormorant.className}`}>
            Currently Building{" "}
            <a
              className="text-blue-500 font-semibold hover:animate-pulse transition-all ease-linear delay-100"
              href="https://github.com/hariseth/gravity"
            >
              @Gravity
            </a>
            , a light-weight code screenshot tool.
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Current;
