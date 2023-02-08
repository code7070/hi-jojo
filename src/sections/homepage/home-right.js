import style from "@styles/home.module.css";
import CardArticle from "./card-article";
import CardExperience from "./card-experience";
import CardProfile from "./card-profile";
import CardProject from "./card-project";

export default function HomeRight() {
  return (
    <div className={style.homeGrid}>
      <div className="md:flex xl:gap-3 flex-wrap items-start justify-center xl:justify-end mt-14 xl:mt-0">
        <div className={style.homeCardGrid}>
          <CardProfile />
          <CardProject />
        </div>
        <div className={`${style.homeCardGrid} mt-10 xl:mt-0`}>
          <CardExperience />
          <CardArticle />
        </div>
      </div>
    </div>
  );
}
