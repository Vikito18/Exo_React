import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col items-center gap-5 w-[90%] ">
      <input
        className="border-cyan-400 border-2 rounded-xl p-1 w-[40%] "
        type="text"
        placeholder="nom"
      />
      <textarea
        className="border-cyan-400 border-2 rounded-xl p-1 w-[80%] "
        placeholder="Message"
      />
      <input
        className="bg-cyan-400 rounded-xl w-40 p-2"
        type="submit"
        value="Envoyer"
      />
    </form>
  );
};

export default Form;
