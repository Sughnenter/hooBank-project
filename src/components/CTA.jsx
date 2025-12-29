import React from "react";
import styles from "../styles";
import Button from "./Button";
import ScrollReveal from "./ScrollReveal";

function CTA() {
  return (
    <ScrollReveal
      as="section"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] bosx-shadow `}
      direction="up"
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let's try our service now</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet
        </p>
      </div>
      <div>
        <Button
          className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}
        />
      </div>
    </ScrollReveal>
  );
}

export default CTA;
