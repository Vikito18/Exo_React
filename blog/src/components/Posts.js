import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setPosts(res.data));
  };

  useEffect(() => getData(), []);

  return (
    <ul className="flex flex-col gap-5 w-[80%] ">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-5 ">
          <h2>{post.author}</h2>
          <p>{post.content}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </ul>
  );
};

export default Posts;
