import Image from "next/image";
import style from "@styles/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFilePdf,
  faLocation,
  faLocationArrow,
  faMessage,
  faPhone,
  faPhoneAlt,
  faPhoneFlip,
  faPhoneSlash,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ToggleView = ({ onClick, flip }) => (
  <div className={style.ctaWrapper}>
    <button className={style.cta} onClick={onClick}>
      {flip ? "Close" : "Contact Me"}
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

const Backside = ({ onClick, flip }) => {
  const mail = "azizditya+contact@gmail.com";
  return (
    <div className={`${style.homeCard} bg-secondary h-full`}>
      <div className="relative p-8">
        <div className="font-extrabold text-2xl mb-6">Jojo</div>
        <div className="mb-6">
          <div className="w-1/6">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </div>
          <div className="flex-1 font-semibold">
            <a href={`mailto:${mail}`} className="underline">
              {mail}
            </a>
          </div>
        </div>
        <div className="mb-6">
          <div className="w-1/6">
            <FontAwesomeIcon icon={faLocationArrow} size="lg" />
          </div>
          <div className="flex-1 font-semibold">Bekasi, Indonesia</div>
        </div>
        <div className="my-8">
          <button
            type="button"
            className="btn btn-primary btn-outline btn-circle flex-1 w-full gap-4 font-bold"
          >
            <FontAwesomeIcon icon={faFilePdf} size="lg" />
            <div>See My CV</div>
          </button>
        </div>
      </div>
      <ToggleView onClick={onClick} flip={flip} />
    </div>
  );
};

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
