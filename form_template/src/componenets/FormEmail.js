import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const FormEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // YOUR_SERVICE_ID
        "service_zjb84iq",
        // YOUR_TEMPLATE_ID
        "template_3xah6aj",
        form.current,
        // YOUR_PUBLIC_KEY
        "qwD7sftjvdw2nKral"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          Swal.fire("Cofirmation!", "Message envoyé ", "success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-extrabold text-xl">Email Form</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center w-[100%]"
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          required
          className="border border-cyan-400 rounded-lg mb-5 "
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          required
          className="border border-cyan-400 rounded-lg mb-5 "
        />
        <label>Message</label>
        <textarea
          name="message"
          required
          className="border border-cyan-400 rounded-lg mb-5 w-[80%] h-72 flex justify-center"
        />
        <input
          type="submit"
          value="Envoyer"
          className="bg-cyan-400 p-3 rounded-xl"
        />
      </form>
    </div>
  );
};

export default FormEmail;
