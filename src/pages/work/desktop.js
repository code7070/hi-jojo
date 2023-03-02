import styles from "@styles/work.module.scss";
import workList from "@utils/worklist";

const chunkingArr = (array = [], size = 2) => {
  const res = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    res.push(chunk);
  }
  return res;
};

const WorkGrid = ({ works = [] }) => {
  const workloop = chunkingArr(works);

  return (
    <div className={styles.workOuterWrapper}>
      {workloop.map((loop, loopIndex) => (
        <div className={styles.workInnerWrapper} key={loopIndex}>
          {loop.map((item, itemIndex) => (
            <div key={itemIndex} className={styles.workBox}>
              <div className={styles.media} />
              <div className={styles.info}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.desc}>{item.description}</div>
              </div>
            </div>
          ))}
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
