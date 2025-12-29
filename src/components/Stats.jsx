import React from "react";
import { stats } from "../constants";
import styles from "../styles";
import ScrollReveal from './ScrollReveal'

function Stats() {
  return (
    <ScrollReveal as="section" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`} direction="up">
      {stats.map((stat, i) => (
        <ScrollReveal key={stat.id} as="div" className={`flex-1 flex justify-start items-center flex-row m-3`} delay={i * 0.05} direction="up">
          <h4 className="font-poppins font-semibold xs:text-[40px] 
          text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] 
          text-[10px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </ScrollReveal>
      ))}
    </ScrollReveal>
  );
}

export default Stats;
