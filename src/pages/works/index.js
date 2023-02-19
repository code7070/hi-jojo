import ProjectCard from "@layouts/project/project-card";
import styles from "@styles/works.module.css";
import workList from "@utils/worklist";
import PageHead from "../PageHead";

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
    return workyear.push({ year: i, works });
  });

  let draft = [];
  let finalWorklist = [];

  workyear.map((i) =>
    i.works.map((w) => draft.push({ ...w, isEven: draft.length % 2 === 0 }))
  );

  workyear.map((y) => {
    finalWorklist.push({
      ...y,
      works: y.works.map((i) => {
        const match = draft.find((d) => d.link === i.link);
        return match;
      }),
    });
  });

  // if(draft.length>0) draft.map(d => )
  // console.log("STATIC: ", { draft, workyear, finalWorklist });

  return {
    props: { workyear: finalWorklist },
  };
}

const LastSection = () => (
  <div className="bg-black text-slate-700 py-4 px-8 lg:px-14 border-2 border-primary rounded-3xl w-[95%] max-w-2xl mx-auto mb-20">
    <div className="my-4 font-semibold text-2xl text-center italic text-white opacity-20">
      <div className="text-xl lg:text-2-xl hidden md:block">
        Uh sorry, this time is no longer reachable for you. Let call this
        section is...
      </div>
      <div className="my-6 tracking-wider text-3xl lg:text-4xl font-black">
        DARK AGES
      </div>
    </div>
  </div>
);

export default function WorksPage({ workyear = [] }) {
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
          {workyear.map((i) => (
            <div key={i.year} className={styles.year}>
              <div className={styles.yearHead}>{i.year}</div>
              <div className={styles.workGrouped}>
                {i.works.map((w) => (
                  <ProjectCard key={w.link} {...w} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <LastSection />
      </div>
    </>
  );
}
