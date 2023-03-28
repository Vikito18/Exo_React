import { useState } from "react";
import Nav from "./Nav";
import MovingComponent from "react-moving-text";
import ArrowNavigation from "./ArrowNavigation";

export const PageHeader = (props) => {
  const { title, left, right } = props;
  const [isHover, setIsHover] = useState(false);

  const handleIsHover = () => {
    isHover ? setIsHover(false) : setIsHover(true);
  };

  return (
    <div className="flex-col flex items-center sm:items-center bg-gray-900">
      <div className="flex flex-row justify-around w-[100%]">
        <ArrowNavigation left={left} />
        <h1 className="flex text-xl text-cyan-500 font-extrabold p-5">
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
        <ArrowNavigation right={right} />
      </div>
      {/* <ul className="flex-row items-center items-around  sm:flex-row flex justify-around sm:w-[100%] w-[80%]">
        <Nav path="/" title="Home" />
        <Nav path="/Cv" title="Mon CV" />
        <Nav path="/Contact" title="Contact" />
        <Nav onClick={handleIsHover} path="/Projects" title="Portfolio" />
      </ul> */}
    </div>
  );
};

const Page = (props) => {
  const { children, title, left, right } = props;
  return (
    <div className="h-screen overflow-auto bg-gray-900 text-cyan-500 flex flex-col">
      <PageHeader title={title} left={left} right={right} />
      {children}
    </div>
  );
};

export default Page;
