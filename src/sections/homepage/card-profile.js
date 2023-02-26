import Image from "next/image";
import style from "@styles/home.module.css";

const Frontside = () => (
  <div className={style.profileFront}>
    <div className="absolute left-0 top-0 w-full p-6 text-white">
      <div className="text-5xl font-bold mb-1">Jojo</div>
      <div className="text-xl font-semibold opacity-30">Frontend Developer</div>
    </div>
    <div className="absolute left-0 bottom-[64px] w-full opacity-90">
      <Image
        alt="Jojo"
        src="/profile/profile-bw.webp"
        width={314}
        height={100}
        priority
      />
    </div>
  </div>
);

const Backside = () => (
  <div className={style.profileBack}>
    <div className="bg-secondary">Hehehehe</div>
  </div>
);

export default function CardProfile({ toggleFlip, flip }) {
  const fullClass = `${style.homeCard} ${style.left} ${style.profile} ${
    flip ? style.flip : ""
  }`;

  return (
    <div className={fullClass} id="homeCardProfile">
      <div className="relative w-full h-full">
        <div className={style.profileInner}>
          <Frontside />
          <Backside />
        </div>
        <div className="absolute left-0 bottom-0 w-full bg-black">
          <button className={style.cta} onClick={toggleFlip}>
            {flip ? "Close" : "Contact Me"}
          </button>
        </div>
      </div>
    </div>
  );
}
