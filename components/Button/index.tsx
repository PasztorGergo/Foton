import React from "react";
import s from "./Button.module.css";

type Props = {
  children: any;
  onClick?: any;
};

export default function Button({ children, onClick }: Props) {
  return onClick ? (
    <button onClick={(e) => onClick(e)} className={s.btn}>
      {children}
    </button>
  ) : (
    <button className={s.btn}>{children}</button>
  );
}
