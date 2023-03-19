import React, { useState } from "react";

const Form = () => {
  const [textContent, setTextContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTextContent = (e) => {
    setTextContent(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-5 w-[90%] "
    >
      <input
        className="border-cyan-400 border rounded-lg p-1 w-[40%] "
        type="text"
        placeholder="nom"
      />
      <textarea
        onChange={handleTextContent}
        className="border-cyan-400 border rounded-lg p-1 w-[80%] h-40"
        placeholder="Message"
      />
      <input
        className="bg-cyan-400 rounded-xl w-40 p-1 "
        type="submit"
        value="Envoyer"
      />
    </form>
  );
};

export default Form;
