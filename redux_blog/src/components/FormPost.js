import React from "react";

const FormPost = () => {
  return (
    <form className="flex flex-col text-center items-center m-2 gap-5 w-[70%]">
      <input
        className="border-2 border-cyan-500 h-12  mx-auto"
        type="text"
        placeholder="Titre du poste"
      />
      <textarea
        className="border-2 border-cyan-500 h-72 w-[90%] mx-auto"
        placeholder="Postez un message ..."
      />
      <input
        className="flex justify-center self-center bg-cyan-500 rounded-lg  p-2 w-24 "
        type="submit"
        value="Enoyer"
      />
    </form>
  );
};

export default FormPost;
