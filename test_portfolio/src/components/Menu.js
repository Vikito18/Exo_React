import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import ArrowNavigation from "./ArrowNavigation";

export default function Menu(props) {
  const { left, right } = props;
  return (
    <div className="flex flex-row justify-around">
      <ArrowNavigation left={left} />
      <Popover className="flex justify-center">
        <Popover.Button className="text-gray-900">
          <FontAwesomeIcon className="text-xxl text-cyan-400 " icon={faBars} />
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className=" p-5 rounded-xl absolute left-1/2 top-12 z-10 mt-5 w-screen max-w-max -translate-x-1/2 px-4">
            <ul className=" flex  sm:flex-row items-center items-around  ">
              <Nav path="/" title="Home" />
              <Nav path="/Cv" title="Mon CV" />
              <Nav path="/Contact" title="Contact" />
              <Nav path="/Projects" title="Portfolio" />
            </ul>
          </Popover.Panel>
        </Transition>
      </Popover>
      <ArrowNavigation right={right} />
    </div>
  );
}
