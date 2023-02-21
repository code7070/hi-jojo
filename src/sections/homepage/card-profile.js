import Image from "next/image";
import style from "@styles/home.module.css";

export default function CardProfile() {
  return (
    <div
      className={`${style.homeCard} ${style.left} bg-primary h-[430px] xl:-mt-10`}
    >
      <div className="absolute left-0 top-0 w-full p-6 text-white">
        <div className="text-5xl font-bold mb-1">Jojo</div>
        <div className="text-xl font-semibold opacity-30">
          Frontend Developer
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full opacity-90">
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
}
