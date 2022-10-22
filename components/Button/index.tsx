import React from "react";
import s from "./Button.module.css";

type Props = {
  children: any;
  onClick?: any;
  type?: "submit" | "reset" | "button";
};

export default function Button({ children, onClick, type }: Props) {
  return onClick ? (
    <button
      type={type ?? "button"}
      onClick={(e) => onClick(e)}
      className={s.btn}
    >
      {children}
    </button>
  ) : (
    <button className={s.btn}>{children}</button>
  );
}
