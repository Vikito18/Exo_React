import React from "react";
import { useSelector } from "react-redux";
import FormPost from "./components/FormPost";
import Post from "./components/Post";
import User from "./components/User";

const App = () => {
  const posts = useSelector((state) => state.postReducer);

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-5xl mb-10 font-extrabold">Blog</h1>
      <div className="flex flex-row items-center justify-around w-screen">
        <FormPost />
        <User />
      </div>
      <div className="mt-20">
        <h2 className=" text-4xl font-extrabold">Les posts</h2>
        {posts && posts.map((post, index) => <Post post={post} key={index} />)}
      </div>
    </div>
  );
};

export default App;
