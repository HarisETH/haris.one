import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Loading = () => {
  const texts = ["வணக்கம் ", "Hey ", "नमस्ते", "مرحبًا", "你好", "வணக்கம்"];
  const bgCodes = [
    "bg-zinc-600",
    "bg-green-600",
    "bg-red-400",
    "bg-black",
    "bg-purple-600",
    "bg-zinc-900",
  ];

  const [mainText, setMainText] = useState(0);
  const [bgCode, setbgCode] = useState(0);
  const [seconds, setSeconds] = useState(1);
  const [bgclass, setbgclass] = useState("");

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setMainText((prevmainText) => (prevmainText + 1) % texts.length);
      setbgCode((prevbgCode) => (prevbgCode + 1) % bgCodes.length);
    }, 200);

    setTimeout(function () {
      clearInterval(wordTimeout);
      setSeconds(100);
    }, 1200);

    setTimeout(function () {
      setbgclass("opacity-0");
    }, 1800);

    setTimeout(function () {
      setbgclass("hidden");
    }, 2100);
  }, []);

  return (
    <section className="flex justify-center items-center min-h-screen w-full">
      <section
        className={`flex w-full absolute top-0 left-0 z-50 transition-opacity  ease-linear delay-200 h-full min-h-screen ${bgclass} justify-center items-center overflow-hidden  ${bgCodes[bgCode]}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.9 },
              scale: seconds,
            }}
            className="App"
          >
            <span className="font-bold text-3xl md:text-7xl font-inter tracking-tight text-white">
              {texts[mainText]}{" "}
            </span>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className={`${inter.className} flex items-center justify-center flex-col gap-4`}>
        <h1 className={`text-3xl md:text-4xl font-bold `}>
          This is still under testing
        </h1>
        <a href="https://www.twitter.com/haris_eth" className="text-xl hover:text-blue-600  text-blue-500">Provide your feedback here</a>
      </section>



    </section>
  );
};

export default Loading;
