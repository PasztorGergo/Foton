import React, { useEffect, useMemo } from "react";
import BluryImage from "../BluryImage";
import { motion, useAnimation } from "framer-motion";
import s from "./Partners.module.css";
import { useInView } from "react-intersection-observer";
import PartnerCard from "../PartnerCard";
import {
  FaWordpress,
  FaHtml5,
  FaCss3,
  FaPhp,
  FaJsSquare,
  FaWeebly,
} from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";

const Partners = () => {
  const control = useAnimation();
  const { ref, inView } = useInView();
  const partners = useMemo(
    () => [
      {
        name: "Ali Tashi",
        href: "",
        src: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/11695666/original/13266062_1135040773213814_396911622858938400_n.jpg",
        description: (
          <>
            <p>
              Having been working for +8 years with WordPress websites, Ali is
              an expert in this field.
            </p>
            <p>He is proud of having over 2500 websites under his belt.</p>
            <p>Let your website be the next masterpiece made by him!</p>
          </>
        ),
        skills: (
          <>
            <FaWordpress />
            <FaHtml5 />
            <FaCss3 />
            <FaPhp />
            <FaJsSquare />
            <FaWeebly />
            <SiWoocommerce />
          </>
        ),
      },
      {
        name: "Hamza Chohan",
        href: "",
        src: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/2d11d5485bd8fa86e6c6c74078cd088c-1620419132627/c62842fa-5b0f-4440-b6ac-fecae720f938.jpeg",
        description: (
          <>
            <p>
              Having been working for +8 years with WordPress websites, Ali is
              an expert in this field.
            </p>
            <p>He is proud of having over 2500 websites under his belt.</p>
            <p>Let your website be the next masterpiece made by him!</p>
          </>
        ),
        skills: (
          <>
            <FaWordpress />
            <FaHtml5 />
          </>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    if (inView) {
      control.start((e: number) => ({
        opacity: 1,
        translateY: 0,
        transition: { delay: e * 0.2 },
      }));
    }
  }, [inView]);
  return (
    <section className={s.section} id="partners">
      <h2 className="title">With the experts</h2>
      <p className={s.parag}>
        To get your order not only done, but finished by{" "}
        <span className="highlight">senior developers</span>, we collaborate
        with the professionals below who are on the verge to build an
        <span className="highlight"> out-of-the-way</span> masterpiece.
      </p>
      <div
        className="flex flex-col w-full gap-y-24 h-screen px-36 mt-24"
        ref={ref}
      >
        {partners.map(({ description, href, name, src, skills }, i) => (
          <PartnerCard
            href={href}
            name={name}
            src={src}
            direction={i % 2 !== 0 && "right"}
            key={i}
            custom={i}
            skills={skills}
          >
            {description}
          </PartnerCard>
        ))}
      </div>
    </section>
  );
};

export default Partners;
