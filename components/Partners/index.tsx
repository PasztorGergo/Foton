import React, { useEffect } from "react";
import BluryImage from "../BluryImage";
import { motion, useAnimation } from "framer-motion";
import s from "./Partners.module.css";
import { useInView } from "react-intersection-observer";

const Partners = () => {
  const control = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    control.start((e: number) => ({
      translateX: 0,
      opacity: 1,
    }));
  }, [inView]);
  return (
    <section className={s.section}>
      <h2 className={s.title}>With the experts</h2>
      <p className={s.parag}>
        To get your order not only done, but finished by{" "}
        <span className="highlight">senior developers</span>, we collaborate
        with the professionals below who are on the verge to build an
        <span className="highlight">out-of-the-way</span> masterpiece.
      </p>
      <div
        className="flex flex-col md:flex-row w-full h-screen px-36"
        ref={ref}
      >
        <motion.div
          custom={0}
          animate={control}
          initial={{ opacity: 0, translateX: "50%" }}
        >
          <BluryImage
            alt=""
            src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/11695666/original/13266062_1135040773213814_396911622858938400_n.jpg"
          ></BluryImage>
          <motion.h3
            animate={control}
            initial={{ opacity: 0, translateX: "50%" }}
            custom={1}
          >
            a
          </motion.h3>
          <motion.p
            animate={control}
            initial={{ opacity: 0, translateX: "50%" }}
            custom={2}
          >
            a
          </motion.p>
        </motion.div>
        <motion.div
          custom={3}
          animate={control}
          initial={{ opacity: 0, translateX: "50%" }}
        >
          <BluryImage alt="" src=""></BluryImage>
          <motion.h3
            animate={control}
            initial={{ opacity: 0, translateX: "50%" }}
            custom={4}
          ></motion.h3>
          <motion.p
            animate={control}
            initial={{ opacity: 0, translateX: "50%" }}
            custom={5}
          ></motion.p>
        </motion.div>
        <motion.div
          custom={6}
          animate={control}
          initial={{ opacity: 0, translateX: "50%" }}
        >
          <BluryImage alt="" src=""></BluryImage>
          <motion.h3
            animate={control}
            initial={{ opacity: 0, translateX: "50%" }}
            custom={7}
          ></motion.h3>
          <motion.p
            animate={control}
            initial={{ opacity: 0, translateX: "50%" }}
            custom={8}
          ></motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
