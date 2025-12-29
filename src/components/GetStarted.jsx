import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { arrowUp } from "../assets";

function GetStarted() {
  return (
    <motion.div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      whileHover={{
        scale: 1.06,
        transition: { type: "spring", stiffness: 200 },
      }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full `}
      >
        <div className={`${styles.flexStart} flex-row `}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </motion.div>
  );
}

export default GetStarted;
