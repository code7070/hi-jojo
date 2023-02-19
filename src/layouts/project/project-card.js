export default function ProjectCard({
  name = "Project Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  isEven,
  stacks,
}) {
  let evenClass = "md:-translate-x-[60%]";
  if (isEven) evenClass = "md:translate-x-[60%]";
  const stacklist = `${stacks}`.split(",");
  return (
    <div
      className={`relative rounded-2xl border-b-8 border-4 border-secondary w-[100%] max-w-xs overflow-hidden ${evenClass} mb-6 transition-all duration-300 cursor-pointer hover:border-primary`}
    >
      <div className="h-[160px] bg-slate-100"></div>
      <div className="p-4 bg-white">
        <div className="font-black opacity-60 text-2xl">{name}</div>
        <div className="text-sm font-medium leading-normal opacity-80">
          {description}
        </div>
        <div className="text-sm my-4 font-bold tracking-wide">
          {stacklist.map((i) => (
            <span
              key={i}
              className="opacity-30 hover:opacity-80 hover:underline mr-2 after:content-[',']"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
