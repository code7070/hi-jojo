import { faCode, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="mt-[-68px] relative bg-secondary">
        <div className="relative max-w-2xl mx-auto px-8 py-20">
          <div className="absolute right-0 top-10 opacity-10 -rotate-12">
            <FontAwesomeIcon
              size="7x"
              icon={work.type === "playground" ? faGamepad : faCode}
            />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-16">{work.name}</h2>
          <div className="flex items-center gap-4 mb-4">
            {work.colors.split(",").map((i) => (
              <div
                className="w-8 h-8 rounded-xl tooltip"
                data-tip={i}
                style={{ backgroundColor: `${i}` }}
              />
            ))}
          </div>
          <div className="text-lg lg:text-xl font-medium">
            {work.description}
          </div>
        </div>
      </div>
    </>
  );
}
