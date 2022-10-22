import React from "react";
import Button from "../Button";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <h2 className={s.brand}>
        <a href="">&Gamma;oton</a>
      </h2>
      <ul className={s.links}>
        <li>
          <a>About</a>
        </li>
        <li>
          <a href="#partners">Partners</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <Button>
          <a href="#contact">Contact</a>
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
