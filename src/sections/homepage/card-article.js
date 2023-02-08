import style from "@styles/home.module.css";

export default function CardArticle() {
  return (
    <div className={`${style.homeCard} ${style.right} bg-neutral h-60`}>
      <div className="p-6">
        <div className="text-4xl font-extrabold opacity-50">Articles</div>
      </div>
    </div>
  );
}
