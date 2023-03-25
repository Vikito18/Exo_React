import Nav from "./Nav";
import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";

export const PageHeader = (props) => {
  const { title } = props;
  return (
    <div className="flex-col flex items-center sm:items-center bg-gray-900">
      <h1 className="flex text-xxl text-cyan-500 font-extrabold"> {title}</h1>
      <ul className="flex-row pb-10 items-center items-around  sm:flex-row flex justify-around sm:w-[100%] mt-10  w-[80%]">
        <Nav path="/" title="Home" />
        <Nav path="/Cv" title="Mon CV" />
        <Nav path="/Contact" title="Contact" />
        <Nav path="/" title="Portfolio" />
      </ul>
    </div>
  );
};

const Page = (props) => {
  const { children, title } = props;
  return (
    <div className="h-screen overflow-auto bg-gray-900 text-cyan-500 flex flex-col">
      <PageHeader title={title} />
      {children}
    </div>
  );
};

export default Page;
