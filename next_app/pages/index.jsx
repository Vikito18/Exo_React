import Meta from "@/components/Meta";
import Title from "@/components/Title";
import React from "react";

const index = () => {
  return (
    <div>
      <Meta
        title="Site web de Victor Dos Martires"
        description="Bienvenue sur le site web de Victor Dos Martires, développeur JavaScript, React.js, Next.js ..."
      />
      <Title title="Blog" />
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const article = await res.json();

  // console.log(article);

  return {
    props: {
      article,
    },
  };
};
