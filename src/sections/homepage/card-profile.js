import Image from "next/image";
import style from "@styles/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const ToggleView = ({ onClick, flip }) => (
  <div className={style.ctaWrapper}>
    <button className={style.cta} onClick={onClick}>
      {flip ? "Contact Me" : "Close"}
    </button>
  </div>
);

const Frontside = ({ onClick, flip }) => (
  <div
    className={`${style.homeCard} ${style.left} ${style.profile}`}
    id="homeCardProfile"
  >
    <div className="h-full">
      <div className="absolute left-0 top-0 w-full p-6 text-white">
        <h3 className="text-5xl font-bold mb-1">Jojo</h3>
        <div className="text-xl font-semibold opacity-30">
          Frontend Developer
        </div>
      </div>
      <div className="absolute left-0 bottom-[36px] w-full opacity-90 [&>img]:w-full">
        <Image
          alt="Jojo"
          src="/profile/profile-bw.webp"
          width={314}
          height={100}
          priority
        />
      </div>
      <ToggleView onClick={onClick} flip={flip} />
    </div>
  </div>
);

const Backside = ({ onClick, flip }) => (
  <div className={`${style.homeCard} bg-secondary h-full`}>
    <div className="relative p-8">
      <div className="font-extrabold text-2xl mb-6">Jojo</div>
      <ul className="mb-8 block [&>li]:block [&>li]:mb-2 [&>li]:ml-2 [&>li]:font-medium">
        <li>Frontend Developer</li>
        <li>4 years experience</li>
        <li>Familiarly with JS library & framework</li>
        <li>Able to work as a team or as single fighter</li>
        <li>Wiling to work remotely</li>
      </ul>
      <button
        type="button"
        className="btn btn-primary btn-ghost flex-1 w-full gap-4 font-bold"
      >
        <FontAwesomeIcon icon={faFilePdf} size="xl" />
        <div>See My CV</div>
      </button>
    </div>
    <ToggleView onClick={onClick} flip={flip} />
  </div>
);

export default function CardProfile({ toggleFlip, flip }) {
  return (
    <div className={`${style.profileSection} ${flip ? style.flip : ""}`}>
      <div className={style.front}>
        <Frontside onClick={toggleFlip} flip={flip} />
      </div>
      <div className={style.back}>
        <Backside onClick={toggleFlip} flip={flip} />
      </div>
    </div>
  );
}
