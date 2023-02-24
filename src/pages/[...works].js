import ProjectCard from "@layouts/project/project-card";
import styles from "@styles/works.module.css";
import workList from "@utils/worklist";
import PageHead from "./PageHead";
import WorkDetail from "../layouts/works/work-details";

export function getStaticPaths() {
  const paths = [{ params: { works: ["works"] } }];

  workList.map((l) =>
    l.works.map((w) => paths.push({ params: { works: ["works", w.link] } }))
  );

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: { params },
  };
}

export default function WorksPage({ params }) {
  console.log("WORKS PAGE: ", params);
  return (
    <>
      <PageHead title="Jojo - Works" />
      <WorklistView />
      <WorkDetail params={params.works} />
    </>
  );
}

function WorklistView() {
  return (
    <div className="container">
      <div className="headerPage text-center mt-20 mb-32">
        <div className={styles.headline1}>What i do, called</div>
        <div>
          <div className={styles.headline2}>works</div>
        </div>
      </div>
      <div className={styles.workPerYear}>
        {workList.map((i, yIndex) => (
          <div key={i.year} className={styles.year}>
            <div className={styles.yearHead}>{i.year}</div>
            <div className={styles.workGrouped}>
              {i.works.map((w, wIndex) => (
                <ProjectCard
                  key={w.link}
                  {...w}
                  isFirst={wIndex === 0}
                  isEven={wIndex % 2 === 0}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <LastSection />
    </div>
  );
}

const LastSection = () => (
  <div className="bg-black text-slate-700 py-4 px-8 lg:px-14 border-2 border-primary rounded-3xl w-[95%] max-w-2xl mx-auto mb-20">
    <div className="my-4 font-semibold text-2xl text-center italic text-white opacity-20">
      <div className="text-xl lg:text-2-xl hidden md:block">
        Sorry, this time is no longer reachable for you.
        <br />
        Let call this section is...
      </div>
      <div className="my-6 tracking-wider text-3xl lg:text-4xl font-black">
        DARK AGES
      </div>
    </div>
  </div>
);
