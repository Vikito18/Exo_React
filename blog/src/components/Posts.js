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
        <div key={post.id} className="bg-white p-5 shadow-lg mb-5 rounded-lg ">
          <h2 className="font-extrabold mb-3">{post.author}</h2>
          <p>{post.content}</p>
          <p className="flex justify-end mt-5">{post.date}</p>
        </div>
      ))}
    </ul>
  );
};

export default Posts;
