import Image from "next/image";
import style from "@styles/home.module.scss";

const Frontside = ({ onClick }) => (
  <div className="h-full">
    <div className="absolute left-0 top-0 w-full p-6 text-white">
      <h3 className="text-5xl font-bold mb-1">Jojo</h3>
      <div className="text-xl font-semibold opacity-30">Frontend Developer</div>
    </div>
    <div className="absolute left-0 bottom-[48px] w-full opacity-90 [&>img]:w-full">
      <Image
        alt="Jojo"
        src="/profile/profile-bw.webp"
        width={314}
        height={100}
        priority
      />
    </div>
    <div className={style.ctaWrapper}>
      <button className={style.cta} onClick={onClick}>
        Contact Me
      </button>
    </div>
  </div>
);

const Backside = ({ onClick }) => (
  <div className={`${style.homeCard} bg-secondary h-full`}>
    <div className="bg-secondary">Hehehehe</div>
    <div className={style.ctaWrapper}>
      <button type="button" className={style.cta} onClick={onClick}>
        Close
      </button>
    </div>
  </div>
);

export default function CardProfile({ toggleFlip, flip }) {
  const fullClass = `${style.homeCard} ${style.left} ${style.profile}`;

  return (
    <div className={`${style.profileSection} ${flip ? style.flip : ""}`}>
      <div className={style.front}>
        <div className={fullClass} id="homeCardProfile">
          <Frontside onClick={toggleFlip} />
        </div>
      </div>
      <div className={style.back}>
        <Backside onClick={toggleFlip} />
      </div>
    </div>
  );
}
