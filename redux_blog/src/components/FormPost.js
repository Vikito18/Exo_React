import React from "react";

const FormPost = () => {
  return (
    <form className="flex flex-col gap-5">
      <input
        className="border-2 border-cyan-500 h-12 w-72 mx-auto"
        type="text"
        placeholder="Titre du poste"
      />
      <textarea
        className="border-2 border-cyan-500 h-72 w-96 mx-auto"
        placeholder="Postez un message ..."
      />
      <input
        className="flex self-end bg-cyan-500 rounded-lg text-center p-2 w-24 "
        type="submit"
        value="Enoyer"
      />
    </form>
  );
};

export default FormPost;
