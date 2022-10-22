import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import BluryImage from "../BluryImage";
import s from "./Card.module.css";
import { useInView } from "react-intersection-observer";

const PartnerCard = ({
  children,
  src,
  href,
  direction,
  name,
  custom,
  skills,
}: any) => {
  const control = useAnimation();
  const { inView, ref } = useInView();

  useEffect(() => {
    if (inView) {
      control.start((e) => ({
        translateX: 0,
        opacity: 1,
        transition: { delay: e * 0.5 },
      }));
    }
  }, [inView]);

  return (
    <motion.div
      className={`${s.card} ${s[direction]}`}
      ref={ref}
      custom={custom}
      animate={control}
      initial={{
        opacity: 0,
        translateX: direction === "right" ? "100%" : "-100%",
      }}
    >
      <div className={s.image}>
        <BluryImage src={src} alt={name} href={href} />
      </div>
      <div className={s.cardBody}>
        <h2>{name}</h2>
        {children}
        <div className={s.skills}>{skills}</div>
      </div>
    </motion.div>
  );
};

export default PartnerCard;
