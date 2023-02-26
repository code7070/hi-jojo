import { useRouter } from "next/router";
import EyeSlashIcon from "public/icons/eye-slash";

const PrivateIcon = () => (
  <div className="absolute right-0 top-0 -translate-y-[100%]">
    <div className="relative bg-error text-error-content rounded-full py-1 px-3 w-full h-full [&>svg]:w-6 [&>svg]:h-6 flex items-center justify-center ">
      <div className="absolute w-full h-full ring ring-error opacity-30 rounded-full hover:ring-0 hover:bg-error hover:animate-ping" />
      <EyeSlashIcon stroke={22} />
    </div>
  </div>
);

export const ColorBar = ({ colors }) => {
  if (!colors || colors.length < 1) return "";
  return (
    <div className="flex items-center">
      {colors.slice(0, 4).map((i, index) => (
        <div
          key={index}
          className={`w-8 h-2 border`}
          style={{ backgroundColor: i }}
        />
      ))}
    </div>
  );
};

const CardPhoto = ({ colors }) => {
  const colorList = colors?.split(",");

  return (
    <figure
      className="h-[180px] relative bg-slate-100"
      style={{ backgroundColor: colors ? colorList[0] : "" }}
    >
      <div className="absolute left-[8px] bottom-[8px]">
        <ColorBar colors={colorList} />
      </div>
    </figure>
  );
};

const CardBody = ({ name, description, stacks, navigate, isPrivate }) => {
  const stacklist = stacks?.split(",");

  return (
    <div className="bg-white relative">
      {isPrivate && <PrivateIcon />}
      <h3 className="font-black text-primary opacity-90 block text-xl md:text-2xl line-clamp-2">
        {name}
      </h3>
      <div className="hidden md:block">
        <div className="text-sm font-medium leading-normal opacity-80 line-clamp-2">
          {description}
        </div>
      </div>
      <div className="text-xs md:text-sm mt-2 font-medium tracking-wide flex flex-wrap">
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
      <div className="mt-4 card-actions justify-end">
        <button className="btn bg-black" onClick={navigate}>
          Details
        </button>
      </div>
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

  const navigate = () => {
    document.body.style.overflow = "hidden";
    push(`/works/${link || ""}`, undefined, { shallow: true, scroll: false });
  };

  const Content = () => (
    <>
      <CardPhoto isPrivate={isPrivate} colors={colors} />
      <div className="card-body p-5">
        <CardBody
          name={name}
          description={description}
          stacks={stacks}
          navigate={navigate}
          isPrivate={isPrivate}
        />
      </div>
    </>
  );

  // const cardClass = `relative rounded-2xl w-[100%] overflow-hidden max-w-xs my-4 md:my-0 ${evenClass} ${noFirstClass} transition-all duration-300 cursor-pointer hover:shadow-lg`;
  const cardClass = `relative card w-72 md:w-80 bg-white my-4 md:my-0 ${evenClass} ${noFirstClass} transition-all duration-300 cursor-pointer transition-all hover:shadow-xl translate-x-[10px] sm:translate-x-[0px]`;

  const Card = ({ children }) => {
    const id = `works-${link}`;
    if (asDiv)
      return (
        <div id={id} className={cardClass}>
          {children}
        </div>
      );
    else
      return (
        <section id={id} className={cardClass}>
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
