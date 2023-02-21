import style from "@styles/home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Item = ({ name, link, year }) => {
  return (
    <Link href={link}>
      <div className={style.projectItem}>
        {/* <div className={style.bgRipple} /> */}
        <div className={style.borders} />
        <div className="relative flex justify-between items-center">
          <div className="flex-1 line-clamp-1 pr-3">{name}</div>
          <div className="text-xs">{year}</div>
        </div>
      </div>
    </Link>
  );
};

const projectList = [
  { name: "Event", year: 2018, link: "/project/event-a" },
  { name: "Submission Web", year: 2019, link: "/project/submission-a" },
  { name: "Quiz Web", year: 2020, link: "/project/quiz-m" },
];

export default function CardProject({}) {
  const router = useRouter();
  const toWorks = () => router.push("/works", "/works", { shallow: true });
  return (
    <div className={`${style.homeCard} ${style.left} bg-secondary  min-h-16 `}>
      <div className="pt-6 px-6">
        <div className="text-4xl font-extrabold opacity-70 mb-8">Works</div>
      </div>
      <div className="mb-8">
        {projectList.slice(0, 3).map((item) => (
          <Item key={item.link} {...item} />
        ))}
      </div>
      <button
        className="btn btn-primary bg-primary border-transparent rounded-none w-full font-bold outline-none transition-all duration-100 hover:tracking-widest active:rounded-xl"
        onClick={toWorks}
        type="button"
      >
        See More
      </button>
    </div>
  );
}
