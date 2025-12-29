import React from "react";
import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2>Find a better card deal in few easy steps.</h2>
      </div>
    </section>
  );
}

export default CardDeal;
