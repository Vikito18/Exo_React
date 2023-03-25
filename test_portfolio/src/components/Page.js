import { NavLink } from "react-router-dom";

export const PageHeader = (props) => {
  const { title } = props;
  return (
    <div className="flex-col flex items-center sm:items-center bg-gray-900">
      <h1 className="flex text-5xl text-cyan-500 font-extrabold"> {title}</h1>
      <ul className="flex-row pb-10 items-center items-around  sm:flex-row flex justify-around sm:w-[100%] mt-10  w-[80%]">
        <NavLink
          className="bg-gray-800 flex items-center justify-center p-10 rounded-xl border-cyan-500 border-solid border-2 h-[50%] w-[30%] hover:bg-cyan-500 hover:text-black '"
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className="bg-gray-800 flex items-center justify-center p-10 rounded-xl border-cyan-500 border-solid border-2 h-[50%] w-[30%] hover:bg-cyan-500 hover:text-black"
          to="/cv"
        >
          <li>Mon CV</li>
        </NavLink>
        <NavLink
          className="bg-gray-800 flex items-center justify-center p-10 rounded-xl border-cyan-500 border-solid border-2 h-[50%] w-[30%] hover:bg-cyan-500 hover:text-black"
          to="/contact"
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

const Page = (props) => {
  const { children, title } = props;
  return (
    <div className="h-screen overflow-auto bg-gray-900 text-gray-300 flex flex-col">
      <PageHeader title={title} />
      {children}
    </div>
  );
};

export default Page;
