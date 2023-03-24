import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID",
        "service_zjb84iq",
        // "YOUR_TEMPLATE_ID",
        "template_3xah6aj",
        form.current,
        // "YOUR_PUBLIC_KEY"
        "qwD7sftjvdw2nKral"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h1>Email Form</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required autoComplete="off" />
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default FormEmail;
