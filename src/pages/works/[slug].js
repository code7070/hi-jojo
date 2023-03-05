import { faCode, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHead from "@pages/PageHead";
import workList from "@utils/worklist";
import Image from "next/image";

const Iconize = ({ type }) => (
  <div className="fixed right-10 top-[50%] translate-x-[50%] sm:translate-x-0 translate-y-[-150%] sm:translate-y-[-50%] opacity-5 -rotate-12">
    <FontAwesomeIcon
      size="7x"
      icon={type === "playground" ? faGamepad : faCode}
    />
  </div>
);

const Head = ({ name }) => (
  <h2 className="font-bold text-5xl md:text-7xl mb-6 md:mb-8">{name}</h2>
);

const Description = ({ colors = "", description = "", type }) => {
  return (
    <div className="mb-20">
      <div className="mb-6 md:mb-8 flex items-center gap-4 flex-wrap">
        <div className="badge badge-primary uppercase font-bold p-4">
          {type}
        </div>
        {colors.split(",").map((i) => (
          <div
            key={i}
            className="rounded-lg w-8 h-8 shadow-lg"
            style={{ backgroundColor: i }}
          />
        ))}
      </div>
      <div className="text-lg md:text-xl font-medium leading-6">
        {description}
      </div>
    </div>
  );
};

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
      <section className="relative">
        <div className="sticky top-0">
          <div className="relative h-52 md:h-96 overflow-hidden bg-primary">
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
        <div className="relative bg-base-100 min-h-screen">
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
