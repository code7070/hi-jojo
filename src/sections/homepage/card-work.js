import style from "@styles/home.module.scss";
import { WorkItem } from "./card-works";

export default function CardWork({ works }) {
  return (
    <div className={`${style.homeCard} ${style.left} min-h-16  bg-secondary `}>
      <div className="px-6 pt-6">
        <h3 className="mb-8 text-4xl font-extrabold opacity-70">Works</h3>
      </div>
      <div className="mb-8">
        {works?.map((item, index) => {
          const fromYear = item?.from?.year;
          const toYear = item?.to?.year;
          let yearDisplay = `${fromYear} - ${toYear}`;
          if (fromYear === toYear) yearDisplay = toYear;
          return (
            <WorkItem
              key={index}
              name={item.name}
              description={item.as}
              year={yearDisplay}
            />
          );
        })}
      </div>
    </div>
  );
}
