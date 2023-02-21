import EyeSlashIcon from "public/icons/eye-slash";

export default function ProjectCard({
  name = "Project Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  stacks,
  isEven,
  isFirst,
  isPrivate,
}) {
  let evenClass = "md:translate-x-[60%]";
  if (isEven) evenClass = "md:-translate-x-[60%]";
  const stacklist = `${stacks}`.split(",");
  const noFirstClass = isFirst ? "" : "md:-mt-36";
  return (
    <div
      className={`relative rounded-2xl border-b-8 border-4 border-accent w-[100%] max-w-xs overflow-hidden ${evenClass} ${noFirstClass} my-6 transition-all duration-300 cursor-pointer hover:border-primary`}
    >
      <div className="h-[160px] bg-slate-100 relative">
        {isPrivate && (
          <div className="absolute right-0 bottom-0 -translate-x-[10px] translate-y-[50%]">
            <div className="relative bg-error text-error-content rounded-full py-1 px-3 w-full h-full [&>svg]:w-6 [&>svg]:h-6 flex items-center justify-center">
              <div className="absolute w-full h-full ring ring-error opacity-30 rounded-full hover:ring-0 hover:bg-error hover:animate-ping" />
              <EyeSlashIcon stroke={22} />
            </div>
          </div>
        )}
      </div>
      <div className="p-4 bg-white">
        <div className="font-black opacity-60 text-2xl">{name}</div>
        <div className="text-sm font-medium leading-normal opacity-80 line-clamp-4">
          {description}
        </div>
        <div className="text-sm my-4 font-bold tracking-wide flex flex-wrap">
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
      </div>
    </div>
  );
}
