import style from "@styles/home.module.css";

export default function CardArticle() {
  return (
    <div className={`${style.homeCard} ${style.right} bg-[#D6E5E3] h-60`}>
      <div className="p-6">
        <div className="text-4xl text-primary font-extrabold">Articles</div>
      </div>
    </div>
  );
}
