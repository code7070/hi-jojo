import { useState } from "react";
import {
  faBarsStaggered,
  faCode,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const list = [
  { name: "all", icon: faBarsStaggered },
  { name: "web", icon: faCode },
  { name: "playground", icon: faGamepad },
];

const Desktop = ({ filter, setFilter }) => {
  return (
    <div className="hidden sm:flex btn-group w-full">
      {list.map((i) => (
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
  );
};

const Mobile = ({ filter, setFilter }) => {
  const [open, setOpen] = useState(false);

  const closeDrop = () => {
    setOpen(false);
    let el = document.querySelector(":focus");
    if (el) el.blur();
  };

  const toggleDrop = () => {
    if (!open) setOpen(true);
    else closeDrop();
  };

  return (
    <div className="block sm:hidden">
      <div
        className={`mx-auto block dropdown w-64 ${open ? "dropdown-open" : ""}`}
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
          {list.map((i) => (
            <li key={i.name}>
              <button
                type="button"
                className="flex capitalize"
                onClick={(e) => {
                  setFilter(i);
                  closeDrop();
                }}
              >
                <FontAwesomeIcon icon={i.icon} className="mr-2" /> {i.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function WorkFilter({ filter, setFilter }) {
  return (
    <div className="my-10 max-w-xs mx-auto">
      <Desktop filter={filter} setFilter={setFilter} />
      <Mobile filter={filter} setFilter={setFilter} />
    </div>
  );
}
