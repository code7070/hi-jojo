import style from "@styles/home.module.css";
import workList from "@utils/worklist";
import Link from "next/link";
import { useRouter } from "next/router";

const Item = ({ name, link, year, description }) => {
  return (
    <Link href={`/works/${link}`} shallow={true} className={style.projectLink}>
      <div className={style.projectItem}>
        <div className={style.borders} />
        <div className="relative flex justify-between items-center">
          <div className="flex-1 line-clamp-1 pr-3 font-bold text-lg">
            {name}
          </div>
          <div className="text-xs">{year}</div>
        </div>
        <div className="opacity-50 font-normal text-xs sm:text-sm line-clamp-1">
          {description}
        </div>
      </div>
    </Link>
  );
};

const projectList = [
  workList[0].works[0],
  workList[1].works[0],
  workList[1].works[1],
];

export default function CardProject({}) {
  const router = useRouter();
  const toWorks = () => router.push("/works", "/works", { shallow: true });
  return (
    <div className={`${style.homeCard} ${style.left} bg-secondary  min-h-16 `}>
      <div className="pt-6 px-6">
        <h3 className="text-4xl font-extrabold opacity-70 mb-8">Works</h3>
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
