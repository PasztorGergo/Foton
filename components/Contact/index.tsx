import React from "react";
import Button from "../Button";
import s from "./Contact.module.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, reset, handleSubmit } = useForm();

  const sendMail = (from: string, text: string, name: string) => {
    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({
        from,
        name,
        text,
      }),
    });
  };

  return (
    <section className={s.section} id="contact">
      <h2 className="title">Let&apos;s connect!</h2>
      <form
        action=""
        className="flex-col flex justify-between md:min-h-[60vh] md:max-w-[60%] items-center"
        onSubmit={handleSubmit(({ from, text, name }) => {
          sendMail(from, text, name);
          reset();
        })}
      >
        <div className="flex w-full justify-between gap-x-9">
          <div className={s.container}>
            <label className={s.label} htmlFor="name">
              Name
            </label>
            <input
              className={s.input}
              type="text"
              id="name"
              {...register("name")}
            />
          </div>
          <div className={s.container}>
            <label className={s.label} htmlFor="email-address">
              email address
            </label>
            <input
              className={s.input}
              type="text"
              id="email-address"
              {...register("from")}
            />
          </div>
        </div>
        <div className={s.container}>
          <label className={s.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={s.input}
            id="message"
            {...register("text")}
          ></textarea>
        </div>
        <Button type="submit">Get proposal</Button>
      </form>
    </section>
  );
};

export default Contact;
