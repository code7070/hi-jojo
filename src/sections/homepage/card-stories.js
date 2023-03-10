import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "@styles/home.module.scss";

export default function CardStories() {
  return (
    <div
      className={`${style.homeCard} ${style.right} bg-[#D6E5E3] min-h-60 overflow-hidden`}
    >
      <div className="p-6">
        <h3 className="text-4xl text-primary font-extrabold mb-8">
          Stories, Skills
        </h3>
        <div className="font-semibold text-base sm:text-lg [&>p]:mb-4 opacity-75 mb-8">
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
