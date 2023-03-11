import { faCode, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHead from "@pages/PageHead";
import { fetchWorkList } from "@utils/worklist";
import Image from "next/image";

const Iconize = ({ type }) => (
  <div className="fixed right-10 top-[50%] translate-x-[50%] translate-y-[-150%] -rotate-12 opacity-5 sm:translate-x-0 sm:translate-y-[-50%]">
    <FontAwesomeIcon size="7x" icon={type === "playground" ? faGamepad : faCode} />
  </div>
);

const Head = ({ name }) => (
  <h2 className="mb-6 text-5xl font-bold md:mb-8 md:text-7xl">{name}</h2>
);

const Description = ({ colors = "", description = "", type }) => {
  return (
    <div className="mb-20">
      <div className="mb-6 flex flex-wrap items-center gap-4 md:mb-8">
        <div className="badge-primary badge p-4 font-bold uppercase">{type}</div>
        {colors.split(",").map((i) => (
          <div
            key={i}
            className="h-8 w-8 rounded-lg shadow-lg"
            style={{ backgroundColor: i }}
          />
        ))}
      </div>
      <div className="text-lg font-medium leading-6 md:text-xl">{description}</div>
    </div>
  );
};

export async function getStaticPaths() {
  let paths = [];
  const worklist = await fetchWorkList();
  worklist.map((w) => w.works.map((i) => paths.push({ params: { slug: i.link } })));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const work = [];
  const worklist = await fetchWorkList();
  worklist.map((w) => w.works.map((x) => (x.link === params.slug ? work.push(x) : null)));
  return {
    props: { params, work: work[0] },
    revalidate: 60,
  };
}

export default function WorkDetail({ work }) {
  return (
    <>
      <PageHead title={`Works - ${work.name}`} />
      <section className="relative">
        <div className="sticky top-0">
          <div className="relative h-52 overflow-hidden bg-primary md:h-96">
            {work.cover && (
              <Image
                alt={work.name}
                src={work.cover}
                className="block"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
        <div className="relative min-h-screen bg-base-100">
          <div className="relative mx-auto max-w-3xl py-10 px-6">
            <Iconize type={work.type} />
            <Head name={work.name} />
            <Description {...work} />
          </div>
        </div>
      </section>
    </>
  );
}
