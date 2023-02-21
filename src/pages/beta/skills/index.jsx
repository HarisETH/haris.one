import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Icon from 'react-feather';
const index = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col">
      <div className="div border-2 p-2 flex items-end justify-center origin-bottom transform border-green-600 rounded-3xl h-36 w-24 ">
        <motion.div
          className="h-full flex justify-center items-center relative origin-bottom translate-x-1/2 translate-y-1/2 w-full bg-green-600 rounded-x rounded-3xl "
          initial={{ height: 0 }}
          animate={{ scale: 1, height: "80%" }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >      
        </motion.div>
        <div className="absolute flex flex-col align-middle self-center stroke-black" >
          <Icon.Figma className="h-8 w-8" />
          <p className="font-semibold">50%</p>
        </div>
      </div>
    </div>
  );
};

export default index;
