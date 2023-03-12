import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "@styles/home.module.scss";
import Link from "next/link";

export default function CardStories() {
  return (
    <div
      className={`${style.homeCard} ${style.right} min-h-[240px] overflow-hidden bg-[#D6E5E3]`}
    >
      <div className="p-6">
        <h3 className="mb-8 text-4xl font-extrabold text-primary">Stories, Skills</h3>
        <div className="mb-8 text-base font-semibold opacity-75 sm:text-lg [&>p]:mb-4">
          <p>Officially, i work as Frontend Developer (web) starting in 2018 😵</p>
          <p>I jump too far to ReactJS from only HTML & CSS skills 😅</p>
        </div>
        <div className="flex items-end">
          <Link href="/stories" className="btn-primary btn ml-auto">
            See More
            <span className="ml-4">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
