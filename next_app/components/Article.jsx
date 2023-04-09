import Link from "next/link";
import React from "react";

const Article = ({ article }) => {
  return (
    <Link
      className="flex flex-col items-center p-2 w-72 h-44 mx-auto border-2 border-pink-6 00 rounded-xl shadow-gray-600 shadow-lg"
      href=""
    >
      <h3 className="text-lg font-bold text-center pb-2">{article.title} ➡️</h3>
      <p className="text-clip overflow-scroll">{article.body}</p>
    </Link>
  );
};
export default Article;
