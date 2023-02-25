import { useRouter } from "next/router";
import EyeSlashIcon from "public/icons/eye-slash";

const PrivateIcon = () => (
  <div className="absolute right-0 bottom-0 -translate-x-[10px] translate-y-[50%]">
    <div className="relative bg-error text-error-content rounded-full py-1 px-3 w-full h-full [&>svg]:w-6 [&>svg]:h-6 flex items-center justify-center ">
      <div className="absolute w-full h-full ring ring-error opacity-30 rounded-full hover:ring-0 hover:bg-error hover:animate-ping" />
      <EyeSlashIcon stroke={22} />
    </div>
  </div>
);

const ColorBar = ({ colors }) => {
  if (!colors || colors.length < 1) return "";
  const eachClass = "w-8 h-2";
  return (
    <div className="flex items-center justify-center absolute left-[8px] bottom-[8px]">
      {colors.slice(0, 4).map((i, index) => (
        <div key={index} className={eachClass} style={{ backgroundColor: i }} />
      ))}
    </div>
  );
};

export default function ProjectCard({
  name = "Project Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  stacks,
  isEven,
  isFirst,
  isPrivate,
  asDiv,
  link,
  colors,
}) {
  let evenClass = "md:translate-x-[60%]";
  if (isEven) evenClass = "md:-translate-x-[60%]";
  const noFirstClass = isFirst ? "" : "md:-mt-44";

  const { push } = useRouter();

  const stacklist = stacks?.split(",");
  const colorList = colors?.split(",");

  const Content = () => (
    <>
      <div
        className="h-[180px] relative bg-slate-100"
        style={{ backgroundColor: colors ? colorList[0] : "" }}
      >
        <ColorBar colors={colorList} />
        {isPrivate && <PrivateIcon />}
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-black opacity-60 text-2xl line-clamp-2">{name}</h3>
        <div className="hidden sm:block">
          <div className="text-sm font-medium leading-normal opacity-80 line-clamp-2">
            {description}
          </div>
        </div>
        <div className="text-xs sm:text-sm mt-2 font-medium tracking-wide flex flex-wrap">
          {stacklist.map((i, index) => {
            const isLast = index + 1 === stacklist.length;
            const classComma = isLast ? "" : "after:content-[',']";
            return (
              <span
                key={i}
                className={`opacity-30 hover:opacity-80 hover:underline mr-2 ${classComma}`}
              >
                {i}
              </span>
            );
          })}
        </div>
        <div className="mt-4 text-center">
          <button className="btn btn-wide bg-black" onClick={navigate}>
            Details
          </button>
        </div>
      </div>
    </>
  );

  const cardClass = `relative rounded-2xl w-[100%] overflow-hidden max-w-xs my-4 md:my-0 ${evenClass} ${noFirstClass} transition-all duration-300 cursor-pointer hover:shadow-lg`;

  const navigate = () => {
    document.body.style.overflow = "hidden";
    push(`/works/${link || ""}`, undefined, { shallow: true, scroll: false });
  };

  const Card = ({ children }) => {
    const id = `works-${link}`;
    if (asDiv)
      return (
        <div id={id} className={cardClass} onClick={navigate}>
          {children}
        </div>
      );
    else
      return (
        <section id={id} className={cardClass} onClick={navigate}>
          {children}
        </section>
      );
  };

  return (
    <Card>
      <Content />
    </Card>
  );
}
