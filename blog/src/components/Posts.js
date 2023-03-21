import React, { useState } from "react";

const Posts = ({ article, ...otherProps }) => {
  const [isEdit, setIsEdit] = useState(false);

  const dateFormat = (date) => {
    const newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return newDate;
  };

  const handleIsEdit = () => {
    setIsEdit(true);
  };

  return (
    <div className="bg-white p-5 shadow-lg  rounded-lg " {...otherProps}>
      <h2 className="font-extrabold mb-3">{article.author}</h2>
      {isEdit ? (
        <textarea
          defaultValue={article.content}
          className="border border-black w-[100%] h-40"
        ></textarea>
      ) : (
        <p>{article.content}</p>
      )}
      <p className="flex justify-end mt-5" {...otherProps}>
        {dateFormat(article.date)}
      </p>
      <div className="flex flex-row gap-5 text-xs">
        <button
          onClick={handleIsEdit}
          className="bg-gray-200 border border-black p-2"
        >
          Edit
        </button>
        <button className="bg-gray-200 border border-black p-2">
          Supprimmer
        </button>
      </div>
    </div>
  );
};

export default Posts;
