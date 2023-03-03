import HeadlinePage from "@components/HeadlinePage";
import PageHead from "@pages/PageHead";
import WorkListDekstop from "@layouts/work/desktop";
import WorklistMobile from "@layouts/work/mobile";
import { useEffect, useState } from "react";
import {
  faBarsStaggered,
  faCode,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const filterList = [
  { name: "All", icon: faBarsStaggered },
  { name: "Web", icon: faCode },
  { name: "Playground", icon: faGamepad },
];

export default function WorkPage() {
  const [filter, setFilter] = useState(filterList[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("OPEN: ", open);
  }, [open]);

  const openDrop = () => setOpen(true);
  const closeDrop = () => {
    setOpen(false);
    let el = document.querySelector(":focus");
    if (el) el.blur();
  };
  const toggleDrop = () => setOpen(!open);

  return (
    <>
      <PageHead title="Works" />
      <section className="container">
        <HeadlinePage line1="What i do, called" line2="Works" />
        <div className="my-20 max-w-xs mx-auto">
          <div className="hidden sm:flex btn-group w-full">
            {filterList.map((i) => (
              <button
                key={i.name}
                type="button"
                className={`btn ${
                  filter.name === i.name ? "btn-primary" : "btn-outline"
                }`}
                onClick={() => setFilter(i)}
              >
                <FontAwesomeIcon icon={i.icon} className="mr-4" />
                <span
                  className={`${
                    filter.name === i.name ? "inline" : "hidden"
                  } sm:!inline`}
                >
                  {i.name}
                </span>
              </button>
            ))}
          </div>
          <div className="block sm:hidden">
            <div
              className={`mx-auto block dropdown w-64 ${
                open ? "dropdown-open" : ""
              }`}
            >
              <button
                type="button"
                className="btn m-1 block mx-auto"
                onClick={toggleDrop}
                onBlur={closeDrop}
              >
                <FontAwesomeIcon icon={filter.icon} className="mr-2" />
                {filter.name}
              </button>
              <ul className="left-[50%] translate-x-[-50%] block dropdown-content menu p-2 shadow bg-white rounded-box w-52">
                {filterList.map((i) => (
                  <li key={i.name}>
                    <button
                      type="button"
                      className="flex"
                      onClick={(e) => {
                        setFilter(i);
                        closeDrop();
                      }}
                    >
                      <FontAwesomeIcon icon={i.icon} className="mr-2" />{" "}
                      {i.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <WorkListDekstop />
        <WorklistMobile />
      </section>
    </>
  );
}
