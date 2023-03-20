import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

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
          <p className="flex justify-end mt-5">{dateFormat(post.date)}</p>
          <div className="flex flex-row gap-5 text-xs">
            <butoo className="bg-gray-200 border border-black p-2">Edit</butoo>
            <butoo className="bg-gray-200 border border-black p-2">
              Supprimmer
            </butoo>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default Posts;
