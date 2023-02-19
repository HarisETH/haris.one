import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      setSeconds(100)
      
      
    }, 1200);

    setTimeout(function () {
        setbgclass('opacity-0')
        
        
      }, 1800);

      setTimeout(function () {
        setbgclass('hidden')
        
        
      }, 2100);

    
  }, []);

  return (
    <section
      className={`flex w-full absolute top-0 left-0 z-50 transition-opacity  ease-linear delay-200 h-full min-h-screen ${bgclass} justify-center items-center overflow-hidden  ${bgCodes[bgCode]}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.9 },
            scale: seconds
            
          }}
          
          className="App"
          style={{ fontSize: 100 }}
        >
          <span  className="font-bold font-inter tracking-tight text-white">
            {texts[mainText]}{" "}
          </span>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Loading;
