import React from "react";

const User = () => {
  return (
    <div className="flex flex-col items-center text-xs sm:text-lg text-center gap-2 border-2 border-pink-600 w-28 m-5 h-44 sm:w-48 sm:h-72 p-5 ">
      <h3 className="font-extrabold">Vikito DM</h3>
      <img
        className="w-auto h-auto mx-auto rounded-full"
        src="/img/profile.png"
        alt="profile"
      />
      <p>33 ans </p>
      <p>Like(s) : 0</p>
    </div>
  );
};

export default User;
