const statusMap = {
  private: { text: "🤫 Private project", label: "badge-error" },
  public: { text: "", label: "badge-warning" },
  undefined: { text: "", label: "badge-warning" },
};

const ProjectInfo = ({ title, description, techStacks, status }) => {
  const TechLabel = ({ item }) => (
    <span className="badge badge-secondary badge-sm m-1 font-semibold">
      {item}
    </span>
  );

  return (
    <div className="sticky top-32">
      <h1 className="hidden">Project</h1>
      <h2 className="projectTitle !leading-tight">{title}</h2>
      <h3 className="projectDesc">{description}</h3>
      <div className="mt-4 text-sm pr-2">
        {techStacks
          ? techStacks.map((i) => <TechLabel key={i} item={i} />)
          : ""}
      </div>
      <div className="mt-4">
        <div
          className={`badge badge-outline font-bold ${statusMap[status].label}`}
        >
          {statusMap[status].text}
        </div>
      </div>
    </div>
  );
};

export default function ProjectPlayground({
  title = "",
  description,
  children,
  techStacks,
  status,
}) {
  return (
    <section>
      <div className="relative flex flex-col-reverse lg:flex-row max-w-screen-xl mx-auto mt-16 mb-8 px-8 xl:px-0">
        <div className="w-full lg:w-2/4 xl:w-2/5 order-2 xl:order-1 mt-12 lg:mt-0 max-w-md mx-auto lg:max-w-full">
          <ProjectInfo
            title={title}
            description={description}
            techStacks={techStacks}
            status={status}
          />
        </div>
        <div className="w-full lg:w-2/4 xl:w-3/5 flex justify-end order-2 xl:order-1">
          {children}
          {/* <div className="w-full max-w-2xl p-2">{children}</div> */}
        </div>
      </div>
    </section>
  );
}
