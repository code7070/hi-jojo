import { faCode, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@styles/work.module.scss";
import workList from "@utils/worklist";
import Link from "next/link";

const Worklet = ({ work, filter }) => {
  if (filter.name !== "all" && work.type !== filter.name) return "";

  return (
    <div className={styles.workBox}>
      <div className={styles.media}>
        <div className="btn btn-circle btn-sm absolute right-4 top-4">
          <FontAwesomeIcon
            size="lg"
            icon={work.type === "playground" ? faGamepad : faCode}
          />
        </div>
      </div>
      <div className={styles.info}>
        <div className="flex items-start justify-between">
          <div className="mr-2 flex-1">
            <div className={styles.name}>{work.name}</div>
            <div className={styles.desc}>{work.description}</div>
            <Link className={styles.cta} href={`/works/${work.link}`}>
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkSection = ({ year, works = [], filter }) => (
  <section className={styles.workSection}>
    <div className={styles.yearWrapper}>
      <div className={styles.yearSet}>{year}</div>
    </div>
    <div className={styles.workOuterWrapper}>
      {works.map((item, itemIndex) => (
        <Worklet filter={filter} work={item} key={itemIndex} />
      ))}
    </div>
  </section>
);

export default function WorkListDekstop({ filter }) {
  let loops = [...workList];
  if (filter.name !== "all")
    loops = [
      ...workList.filter((work) =>
        work.works.some((item) => item.type === filter.name)
      ),
    ];
  return (
    <div className="hidden sm:block max-w-3xl mx-auto">
      {loops.map((w) => {
        return <WorkSection filter={filter} key={w.year} {...w} />;
      })}
    </div>
  );
}
