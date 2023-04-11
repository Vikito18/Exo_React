import React from "react";
import FormPost from "./components/FormPost";
import Post from "./components/Post";
import User from "./components/User";

const App = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-5xl mb-10 font-extrabold">Blog</h1>
      <div className="flex flex-row items-center justify-around w-full">
        <FormPost />
        <User />
      </div>
      <div className="mt-20">
        <h2 className=" text-4xl font-extrabold">Les posts</h2>
        <Post />
      </div>
    </div>
  );
};

export default App;
