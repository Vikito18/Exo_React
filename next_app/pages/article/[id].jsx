import Link from "next/link";
import React from "react";

const article = ({ article }) => {
  return (
    <div>
      <h2> {article.title}</h2>
      <p>{article.body}</p>
      <Link href="/">Revenir à l'acceuil</Link>
    </div>
  );
};

export default article;
