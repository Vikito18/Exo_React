import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-row items-center justify-around bg-gray-900 text-cyan-400 h-16 font-extrabold">
        <li>
          <Link href="/">Acceuil</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
