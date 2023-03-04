import PageHead from "@pages/PageHead";
import workList from "@utils/worklist";

export function getStaticPaths() {
  let paths = [];
  workList.map((w) =>
    w.works.map((i) => paths.push({ params: { slug: i.link } }))
  );
  return { paths, fallback: false };
}

export function getStaticProps({ params }) {
  const work = [];
  workList.map((w) =>
    w.works.map((x) => (x.link === params.slug ? work.push(x) : null))
  );
  return {
    props: { params, work: work[0] },
  };
}

export default function WorkDetail({ params, work }) {
  return (
    <>
      <PageHead title={`Works - ${work.name}`} />
      <div className="container">
        <div>Work Detail</div>
        <div>{JSON.stringify(params)}</div>
        <div>{JSON.stringify(work)}</div>
      </div>
    </>
  );
}
