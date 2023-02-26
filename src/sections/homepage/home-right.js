import style from "@styles/home.module.css";
import { doScroll } from "@utils/helpers";
import { useEffect, useState } from "react";
import CardArticle from "./card-article";
import CardExperience from "./card-experience";
import CardProfile from "./card-profile";
import CardProject from "./card-project";

export default function HomeRight() {
  const [profileFlip, setProfileFlip] = useState(false);

  const toggleFlip = () => {
    if (!profileFlip) {
      const el = document.getElementById("homeCardProfile");
      doScroll(el);
    }
    setProfileFlip(!profileFlip);
  };

  return (
    <div className={style.homeGrid}>
      <div className="md:flex xl:gap-3 flex-wrap items-start justify-center xl:justify-end mt-14 xl:mt-0">
        <div className={style.homeCardGrid}>
          <CardProfile flip={profileFlip} toggleFlip={toggleFlip} />
          <CardProject />
        </div>
        <div className={`${style.homeCardGrid} mt-10 xl:mt-0`}>
          <CardExperience toggleFlip={toggleFlip} />
          <CardArticle />
        </div>
      </div>
    </div>
  );
}
