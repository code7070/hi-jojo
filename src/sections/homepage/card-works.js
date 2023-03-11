import style from "@styles/home.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

const Item = ({ name, link, year, description }) => {
  return (
    <Link href={`/works/${link}`} shallow={true} className={style.projectLink}>
      <div className={style.projectItem}>
        <div className={style.borders} />
        <div className="relative flex items-center justify-between">
          <div className="flex-1 pr-3 text-lg font-bold line-clamp-1">{name}</div>
          <div className="text-xs">{year}</div>
        </div>
        <div className="text-xs font-normal opacity-50 line-clamp-1 sm:text-sm">
          {description}
        </div>
      </div>
    </Link>
  );
};

export default function CardProject({ favowork }) {
  const router = useRouter();
  const toWorks = () => router.push("/works", "/works", { shallow: true });
  return (
    <div className={`${style.homeCard} ${style.left} min-h-16  bg-secondary `}>
      <div className="px-6 pt-6">
        <h3 className="mb-8 text-4xl font-extrabold opacity-70">Works</h3>
      </div>
      <div className="mb-8">
        {favowork.map((item) => (
          <Item key={item.link} {...item} />
        ))}
      </div>
      <button
        className="btn-primary btn w-full rounded-none border-transparent bg-primary font-bold outline-none transition-all duration-100 hover:tracking-widest active:rounded-xl"
        onClick={toWorks}
        type="button"
      >
        See More
      </button>
    </div>
  );
}
