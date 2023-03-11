import Image from "next/image";
import style from "@styles/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFilePdf,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
        <h3 className="mb-1 text-5xl font-bold">Jojo</h3>
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

const ContactRow = ({ icon, children }) => (
  <div className="mb-6">
    <div className="w-1/6">
      <FontAwesomeIcon icon={icon} size="lg" />
    </div>
    <div className="flex-1 font-semibold">{children}</div>
  </div>
);

const LinkOffer = ({ children, href }) => (
  <a className="underline hover:no-underline" href={href} target="_blank">
    {children}
  </a>
);

const Backside = ({ onClick, flip }) => {
  const mail = "azizditya+contact@gmail.com";
  const linkedLink = "https://www.linkedin.com/in/aditya-a-332510145/";
  return (
    <div className={`${style.homeCard} h-full bg-secondary`}>
      <div className="relative p-8">
        <div className="mb-6 text-2xl font-extrabold">Jojo</div>
        <ContactRow icon={faEnvelope}>
          <LinkOffer href={`mailto:${mail}`}>{mail}</LinkOffer>
        </ContactRow>
        <ContactRow icon={faLocationArrow}>
          <div className="flex-1 font-semibold">Bekasi, Indonesia</div>
        </ContactRow>
        <ContactRow icon={faLinkedin}>
          <LinkOffer href={linkedLink}>LinkedIn</LinkOffer>
        </ContactRow>
        <div className="my-8">
          <button
            type="button"
            className="btn-outline btn-primary btn-circle btn w-full flex-1 gap-4 font-bold"
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
