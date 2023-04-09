import Article from "@/components/Article";
import Meta from "@/components/Meta";
import Title from "@/components/Title";
import React from "react";

const index = ({ articles }) => {
  return (
    <div>
      <Meta
        title="Site web de Victor Dos Martires"
        description="Bienvenue sur le site web de Victor Dos Martires, développeur JavaScript, React.js, Next.js ..."
      />
      <Title title="Blog" />

      <div className="flex flex-wrap gap-5">
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
