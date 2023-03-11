import style from "@styles/home.module.scss";
import { doScroll } from "@utils/helpers";
import { useState } from "react";
import CardStories from "./card-stories";
import CardExperience from "./card-experience";
import CardProfile from "./card-profile";
import CardWorks from "./card-works";

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
      <div className="mt-14 flex-wrap items-start justify-center md:flex xl:mt-0 xl:justify-end xl:gap-3">
        <div className={style.homeCardGrid}>
          <CardProfile flip={profileFlip} toggleFlip={toggleFlip} />
          <div className="block sm:hidden">
            <CardExperience toggleFlip={toggleFlip} />
          </div>
          <div className="hidden sm:block">
            <CardWorks />
          </div>
        </div>
        <div className={`${style.homeCardGrid} mt-10 xl:mt-0`}>
          <div className="block sm:hidden">
            <CardWorks />
          </div>
          <div className="hidden sm:block">
            <CardExperience toggleFlip={toggleFlip} />
          </div>
          <CardStories />
        </div>
      </div>
    </div>
  );
}
