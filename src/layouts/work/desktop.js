import { faCode, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@styles/work.module.scss";
import workList from "@utils/worklist";

const WorkGrid = ({ works = [] }) => (
  <div className={styles.workOuterWrapper}>
    {works.map((item, itemIndex) => (
      <div key={itemIndex} className={styles.workBox}>
        <div className={styles.media}>
          <div className="btn btn-circle btn-sm absolute right-4 top-4">
            <FontAwesomeIcon
              size="lg"
              icon={item.type === "playground" ? faGamepad : faCode}
            />
          </div>
        </div>
        <div className={styles.info}>
          <div className="flex items-start justify-between">
            <div className="mr-2 flex-1">
              <div className={styles.name}>{item.name}</div>
              <div className={styles.desc}>{item.description}</div>
              <button className={styles.cta}>Detail</button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const WorkSection = ({ year, works = [] }) => (
  <section className={styles.workSection}>
    <div className={styles.yearWrapper}>
      <div className={styles.yearSet}>{year}</div>
    </div>
    <WorkGrid works={works} />
  </section>
);

export default function WorkListDekstop() {
  return (
    <div className="hidden sm:block max-w-3xl mx-auto">
      {workList.map((w) => {
        return <WorkSection key={w.year} {...w} />;
      })}
    </div>
  );
}
