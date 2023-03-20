import React from "react";

const Posts = ({ article, ...otherProps }) => {
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

  return (
    <div className="bg-white p-5 shadow-lg  rounded-lg " {...otherProps}>
      <h2 className="font-extrabold mb-3" {...otherProps}>
        {article.author}
      </h2>
      <p>{article.content}</p>
      <p className="flex justify-end mt-5" {...otherProps}>
        {dateFormat(article.date)}
      </p>
      <div className="flex flex-row gap-5 text-xs" {...otherProps}>
        <button className="bg-gray-200 border border-black p-2" {...otherProps}>
          Edit
        </button>
        <button className="bg-gray-200 border border-black p-2" {...otherProps}>
          Supprimmer
        </button>
      </div>
    </div>
  );
};

export default Posts;
