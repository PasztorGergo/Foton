import React from "react";
import BluryImage from "../BluryImage";
import s from "./Card.module.css";

const PartnerCard = ({ children, src, href, direction, name }: any) => {
  return (
    <div className={`${s.card} ${s[direction]}`}>
      <div className={s.image}>
        <BluryImage src={src} alt={name} href={href} />
      </div>
      <div className={s.cardBody}>
        <h2>{name}</h2>
        {children}
      </div>
    </div>
  );
};

export default PartnerCard;
