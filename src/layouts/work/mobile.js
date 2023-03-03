import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useState } from "react";
import workList from "@utils/worklist";
import ChevronRight from "@icons/chevron-right";
import styles from "@styles/work.module.scss";

const WorkPart = ({ work, open, setOpen }) => {
  const toggle = () => setOpen(open === work.link ? false : work.link);

  const isOpen = open === work.link;

  const classer = (elClass) => `${elClass} ${isOpen ? styles.open : ""}`;

  return (
    <div className={classer(styles.workPart)}>
      <button className={classer(styles.btnHead)} onClick={toggle}>
        <div className="flex-1 line-clamp-1">{work.name}</div>
        <div className="flex items-center">
          <div className="btn btn-primary btn-circle btn-sm mr-4">
            <FontAwesomeIcon
              icon={work.type === "Technical" ? faGamepad : faCode}
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
          <button>
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
      <div className="translate-x-[-25%] translate-y-[15%] text-8xl font-extrabold text-primary opacity-30">
        {w.year}
      </div>

      <div className="relative mb-20 overflow-hidden rounded-2xl">
        {w.works.map((x) => (
          <WorkPart key={x.link} work={x} open={open} setOpen={setOpen} />
        ))}
      </div>
    </Fragment>
  );
};

export default function WorklistMobile() {
  return (
    <div className="relative mx-auto block max-w-md overflow-x-hidden px-4 sm:hidden">
      {workList.map((w) => (
        <WorkSection key={w.year} w={w} />
      ))}
    </div>
  );
}
