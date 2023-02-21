import workList from "@utils/worklist";
import PageHead from "../PageHead";

export function getStaticPaths() {
  const paths = workList.map((i) => ({ params: { slug: i.link.slice(1) } }));
  console.log("Static Paths: ", paths);
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const { slug } = params;
  console.log("STATIC: ", { slug });

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

  const workdetail = workList.find((i) => i.link.slice(1) === slug);

  return {
    props: { workyear, workdetail, slug },
    revalidate: 3600,
  };
}

export default function ProjectDetail({ slug, workdetail }) {
  console.log({ workdetail, slug });
  return (
    <>
      <PageHead
        title={workdetail.name}
        description={workdetail.description}
        keywords={`hi jojo, frontend, ${workdetail.stacks.replaceAll(
          ",",
          ", "
        )}`}
      />
      <div className="container">
        <div className="content-wrapper">
          <h2 className="text-4xl font-bold">{slug}</h2>
        </div>
      </div>
    </>
  );
}
