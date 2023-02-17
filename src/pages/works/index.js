import styles from "@styles/works.module.css";
import PageHead from "../PageHead";

const workList = [
  { name: "Cari Manis", year: 2022, link: "/cari-manis" },
  { name: "Event", year: 2019, link: "/project/event-a" },
  { name: "Submission Web", year: 2019, link: "/project/submission-a" },
  { name: "Quiz Web", year: 2020, link: "/project/quiz-m" },
];

export function getStaticProps() {
  let yearlist = [];
  workList.map((i) => yearlist.push(i.year));
  yearlist.sort(function (a, b) {
    return b - a;
  });

  let yearset = [...new Set(yearlist)];

  let workyear = [];

  yearset.map((i) => {
    let works = [];
    workList.map((x) => (x.year === i ? works.push(x) : x));
    console.log("FIND IN YEAR: ", works);
    return workyear.push({ year: i, works });
  });

  return {
    props: {
      yearlist: yearset,
      workyear,
    },
  };
}

export default function WorksPage({ yearlist = [], workyear }) {
  return (
    <>
      <PageHead title="Jojo - Works" />
      <div className="container">
        <div className="headerPage text-center mt-20 mb-32">
          <div className={styles.headline1}>What i do, called</div>
          <div>
            <div className={styles.headline2}>works</div>
          </div>
        </div>
        <div className={styles.workPerYear}>
          {yearlist.map((i) => (
            <div key={i} className={styles.year}>
              <div className={styles.yearHead}>{i}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
