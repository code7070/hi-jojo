import styles from "@styles/work.module.scss";
import workList from "@utils/worklist";

const WorkGrid = ({ works = [] }) => {
  return (
    <div className={styles.workOuterWrapper}>
      {works.map((item, itemIndex) => (
        <div key={itemIndex} className={styles.workBox}>
          <div className={styles.media} />
          <div className={styles.info}>
            <div className="flex items-start justify-between">
              <div className="mr-2">
                <div className={styles.name}>{item.name}</div>
                <div className={styles.desc}>{item.description}</div>
              </div>
              <button className={styles.cta}>Detail</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

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
