import React from "react";
import { clients } from "../constants";
import styles from "../styles";
import ScrollReveal from "./ScrollReveal";

function Clients() {
  return (
    <ScrollReveal
      as="section"
      className={`${styles.flexCenter} my-4`}
      direction="up"
    >
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, i) => (
          <ScrollReveal
            key={client.id}
            as="div"
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
            delay={i * 0.04}
            direction="up"
          >
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain hover:opacity-[0.5] cursor-pointer "
            />
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  );
}

export default Clients;
