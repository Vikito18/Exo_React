import Nav from "./Nav";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";

export const PageHeader = (props) => {
  const { title } = props;
  return (
    <div className="flex-col flex items-center sm:items-center bg-gray-900">
      <h1 className="flex text-xxl text-cyan-500 font-extrabold"> {title}</h1>
      <ul className="flex-row pb-10 items-center items-around  sm:flex-row flex justify-around sm:w-[100%] mt-10  w-[80%]">
        <Nav path="/" title="Home" />
        <Nav path="/Cv" title="Mon CV" />
        <Nav path="/Contact" title="Contact" />
        <Menu>
          <Menu.Button className="bg-gray-800 flex items-center justify-center p-10 rounded-xl border-cyan-500 border-solid border-2 h-[50%] w-[30%] hover:bg-cyan-500 hover:text-black">
            Portfolio
          </Menu.Button>
          <Menu.Items>
            <Menu.Item>
              {({ active }) => (
                <>
                  <Nav path="/" title="Projet 1" />
                  <Nav path="/" title="Projet 2" />
                  <Nav path="/" title="Projet 3" />
                </>
              )}
            </Menu.Item>
            <Menu.Item disabled>
              <span className="opacity-75">Invite a friend (coming soon!)</span>
            </Menu.Item>
          </Menu.Items>
        </Menu>
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
