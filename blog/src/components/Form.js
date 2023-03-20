import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [textContent, setTextContent] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textContent.length < 140) {
      setError(true);
    } else {
      setError(false);
      axios.post("http://localhost:3004/articles", {
        author,
        content: textContent,
        date: Date.now(),
      });
    }
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleTextContent = (e) => {
    setTextContent(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 w-[90%] pt-5 pb-10 "
    >
      <input
        className="border-cyan-400 border rounded-lg p-1 w-[40%] "
        type="text"
        placeholder="nom"
        onChange={handleAuthor}
        value={author}
      />
      <textarea
        onChange={handleTextContent}
        value={textContent}
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
