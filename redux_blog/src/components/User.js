import React from "react";

const User = () => {
  return (
    <div className="flex flex-col items-center text-center gap-5 border-2 border-pink-600 w-40 h-full p-5">
      <h3 className="font-extrabold text-xl">Vikito DM</h3>
      <img
        className="w-28 h-28 rounded-full"
        src="/img/profile.png"
        alt="profile"
      />
      <p>Àge : 33 ans </p>
      <p>Like(s) : 0</p>
    </div>
  );
};

export default User;
