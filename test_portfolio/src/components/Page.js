import Nav from "./Nav";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";

export const PageHeader = (props) => {
  const { title } = props;
  return (
    <div className="flex-col flex items-center sm:items-center bg-gray-900">
      <h1 className="flex text-xxl text-cyan-500 font-extrabold"> {title}</h1>
      <ul className="flex-row pb-10 items-center items-around  sm:flex-row flex justify-around sm:w-[100%] mt-10  w-[80%]">
        <Menu
          as="div"
          className="bg-gray-800 flex items-center justify-center p-10 rounded-xl border-cyan-500 border-solid border-2 h-[50%] w-[30%] hover:bg-cyan-500 hover:text-black"
        >
          <Menu.Button className="w-full h-20">Portfolio</Menu.Button>
          <Menu.Items className="flex flex-col ">
            <Menu.Item className="absolute right-0 mt-10 w-[100%] origin-top-left">
              <div className="flex flex-col text-cyan-500">
                <Nav path="/" title="Projet 1" />
                <Nav path="/" title="Projet 2" />
                <Nav path="/" title="Projet 3" />
              </div>
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <Nav path="/Cv" title="Mon CV" />
        <Nav path="/Contact" title="Contact" />
        <Nav path="/" title="Home" />
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
