import Link from "next/link";
import React from "react";

const article = ({ article }) => {
  return (
    <div className="flex flex-col m-5 w-[90%] p-2 border-2 border-pink-600 mx-auto">
      <h2 className="text-xl font-extrabold"> {article.title}</h2>
      <p>{article.body}</p>
      <Link className="bg-cyan-500 mx-auto rounded-lg p-2 mt-10 " href="/">
        Revenir à l'acceuil
      </Link>
    </div>
  );
};

export default article;

export const getStaticProps = async (context) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + context.params.id
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
