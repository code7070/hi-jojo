import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useState } from "react";
// import workList from "@utils/worklist";
import ChevronRight from "@icons/chevron-right";
import styles from "@styles/work.module.scss";
import Link from "next/link";

const WorkPart = ({ work, open, setOpen, filter }) => {
  if (filter.name !== "all" && work.type !== filter.name) return "";

  const toggle = () => setOpen(open === work.link ? false : work.link);

  const isOpen = open === work.link;

  const classer = (elClass) => `${elClass} ${isOpen ? styles.open : ""}`;

  return (
    <div className={classer(styles.workPart)}>
      <button className={classer(styles.btnHead)} onClick={toggle}>
        <div className="flex-1 line-clamp-1">{work.name}</div>
        <div className="flex items-center">
          <div className="btn-primary btn-sm btn-circle btn mr-4">
            <FontAwesomeIcon
              icon={work.type === "playground" ? faGamepad : faCode}
              size="lg"
            />
          </div>
          <div className={classer(styles.arrowHead)}>
            <ChevronRight />
          </div>
        </div>
      </button>
      <div className={classer(styles.content)}>
        <div className="line-clamp-2">{work.description}</div>
        <div className={styles.cta}>
          <Link href={`/works/${work.link}`}>
            <span className="mr-2 font-bold">Detail</span>
            <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

const WorkSection = ({ w, filter }) => {
  const [open, setOpen] = useState(w.works[0].link);

  return (
    <Fragment key={w.year}>
      <div className="translate-x-[-25%] translate-y-[15%] text-8xl font-extrabold text-primary opacity-30">
        {w.year}
      </div>

      <div className="relative mb-20 overflow-hidden rounded-2xl">
        {w.works.map((x) => (
          <WorkPart
            filter={filter}
            key={x.link}
            work={x}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default function WorklistMobile({ filter, worklist }) {
  let loops = [...worklist];
  if (filter.name !== "all")
    loops = [
      ...worklist.filter((work) =>
        work.works.some((item) => item.type === filter.name)
      ),
    ];
  return (
    <div className="relative mx-auto block max-w-md overflow-x-hidden px-4 sm:hidden">
      {loops.map((w) => (
        <WorkSection filter={filter} key={w.year} w={w} />
      ))}
    </div>
  );
}
