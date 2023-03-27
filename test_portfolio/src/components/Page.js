import { useState } from "react";
import Nav from "./Nav";
import MovingComponent from "react-moving-text";

export const PageHeader = (props) => {
  const { title } = props;
  const [isHover, setIsHover] = useState(false);

  const handleIsHover = () => {
    isHover ? setIsHover(false) : setIsHover(true);
  };

  return (
    <div className="flex-col flex items-center sm:items-center bg-gray-900">
      <h1 className="flex text-xxl text-cyan-500 font-extrabold p-5">
        <MovingComponent
          type="fadeInFromLeft"
          duration="1200ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          {title}
        </MovingComponent>
      </h1>
      <ul className="flex-row items-center items-around  sm:flex-row flex justify-around sm:w-[100%] w-[80%]">
        <Nav path="/" title="Home" />
        <Nav path="/Cv" title="Mon CV" />
        <Nav path="/Contact" title="Contact" />
        <Nav onClick={handleIsHover} path="/Projects" title="Portfolio" />
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
