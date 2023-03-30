import MovingComponent from "react-moving-text";
import Menu from "./Menu";

export const PageHeader = (props) => {
  const { title } = props;

  return (
    <div className="flex-col flex items-center sm:items-center bg-gray-900">
      <div className="flex flex-row justify-around w-[100%]">
        <h1 className=" text-xl text-cyan-500 font-extrabold p-5">
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
      </div>
    </div>
  );
};

const Page = (props) => {
  const { children, title, left, right } = props;
  return (
    <div className="h-screen w-full overflow-auto bg-gray-900 text-cyan-500 flex flex-col pt-5">
      <Menu left={left} right={right} />

      <PageHeader title={title} />
      {children}
    </div>
  );
};

export default Page;
