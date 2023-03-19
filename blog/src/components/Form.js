import React, { useState } from "react";

const Form = () => {
  const [textContent, setTextContent] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    textContent.length < 140 ? setError(true) : setError(false);
  };

  const handleTextContent = (e) => {
    setTextContent(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 w-[90%] "
    >
      <input
        className="border-cyan-400 border rounded-lg p-1 w-[40%] "
        type="text"
        placeholder="nom"
      />
      <textarea
        onChange={handleTextContent}
        className={
          !error
            ? "border-cyan-400  border rounded-lg p-1 w-[80%] h-40"
            : "border-red-700 border rounded-lg p-1 w-[80%] h-40"
        }
        placeholder="Message"
      />
      {error && (
        <p className="text-red-700 text-xs">
          Veuillez écrire plus de 140 carcatères
        </p>
      )}
      <input
        className="bg-cyan-400 rounded-xl w-40 p-1 "
        type="submit"
        value="Envoyer"
      />
    </form>
  );
};

export default Form;
