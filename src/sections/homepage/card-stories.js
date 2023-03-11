import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "@styles/home.module.scss";

export default function CardStories() {
  return (
    <div
      className={`${style.homeCard} ${style.right} min-h-[240px] overflow-hidden bg-[#D6E5E3]`}
    >
      <div className="p-6">
        <h3 className="mb-8 text-4xl font-extrabold text-primary">
          Stories, Skills
        </h3>
        <div className="mb-8 text-base font-semibold opacity-75 sm:text-lg [&>p]:mb-4">
          <p>
            Officially, i work as Frontend Developer (web) starting in 2018 😵
          </p>
          <p>I jump too far to ReactJS from only HTML & CSS skills 😅</p>
        </div>
        <button type="button" className="btn btn-primary ml-auto block">
          See More
          <span className="ml-4">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </button>
      </div>
    </div>
  );
}
