import React from "react";
import Button from "../Button";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <h1 className={s.title}>&Gamma;oton</h1>
        <h6 className={s.subtitle}>WordPress Agency</h6>
      </div>
      <p>
        Creating <span className="highlight">top-notch</span> WordPress websites
        with an out-maxed appearance to{" "}
        <span className="highlight">win over</span> customers as fast as a
        photon.
      </p>
      <Button>Get in touch</Button>
    </header>
  );
};

export default Header;
