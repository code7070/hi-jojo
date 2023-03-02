import { Fragment, useEffect, useState } from "react";
import workList from "@utils/worklist";
import ChevronRight from "@icons/chevron-right";

const WorkPart = ({ work, open, setOpen }) => {
  const toggle = () => setOpen(open === work.link ? false : work.link);

  const isOpen = open === work.link;

  return (
    <div
      className={`bg-white translate-all duration-200 overflow-hidden ${
        isOpen ? "h-72" : "h-16"
      }`}
    >
      <button
        className={`flex btn btn-lg rounded-none w-full text-left m-0 outline-none normal-case ${
          isOpen ? "btn-primary bg-primary-focus" : "btn-ghost"
        }`}
        onClick={toggle}
      >
        <div className="flex-1">{work.name}</div>
        <div
          className={`[&>svg]:w-4 [&>svg]:h-4 transition-all ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <ChevronRight />
        </div>
      </button>
      <div
        className={`relative transition-all px-6 py-4 overflow-hidden ${
          isOpen ? "h-56 bg-primary" : "h-0"
        }`}
      >
        <div className="line-clamp-3 text-primary-content">
          {work.description}
        </div>
        <div className="flex justify-end absolute right-0 bottom-0 p-6">
          <button className="btn btn-secondary [&>svg]:w-4 [&>svg]:h-4">
            <span className="mr-2 font-bold">Detail</span>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const WorkSection = ({ w }) => {
  const [open, setOpen] = useState(w.works[0].link);

  return (
    <Fragment key={w.year}>
      <div className="text-8xl font-extrabold text-primary opacity-30 translate-x-[-25%] translate-y-[15%]">
        {w.year}
      </div>

      <div className="relative mb-20 rounded-2xl overflow-hidden">
        {w.works.map((x) => (
          <WorkPart key={x.link} work={x} open={open} setOpen={setOpen} />
        ))}
      </div>
    </Fragment>
  );
};

export default function WorklistMobile() {
  return (
    <div className="block relative sm:hidden max-w-md px-4 mx-auto overflow-x-hidden">
      {workList.map((w) => (
        <WorkSection key={w.year} w={w} />
      ))}
    </div>
  );
}
