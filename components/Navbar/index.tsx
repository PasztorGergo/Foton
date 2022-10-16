import Link from "next/link";
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
          <Link href="">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Partners</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Projects</a>
          </Link>
        </li>
        <Button>Contact</Button>
      </ul>
    </nav>
  );
};

export default Navbar;
