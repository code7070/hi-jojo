const statusMap = {
  private: { text: "🤫 Private project", label: "badge-error" },
  public: { text: "", label: "badge-warning" },
  undefined: { text: "", label: "badge-warning" },
};

const ProjectInfo = ({ title, description, techStacks, status }) => {
  const TechLabel = ({ item }) => (
    <span className="badge-secondary badge badge-sm m-1 font-semibold">
      {item}
    </span>
  );

  return (
    <div className="sticky top-32">
      <h1 className="hidden">Project</h1>
      <h2 className="projectTitle !leading-tight">{title}</h2>
      <h3 className="projectDesc">{description}</h3>
      <div className="mt-4 pr-2 text-sm">
        {techStacks
          ? techStacks.map((i) => <TechLabel key={i} item={i} />)
          : ""}
      </div>
      <div className="mt-4">
        <div
          className={`badge-outline badge font-bold ${statusMap[status].label}`}
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
      <div className="relative mx-auto mt-16 mb-8 flex max-w-screen-xl flex-col-reverse px-8 lg:flex-row xl:px-0">
        <div className="order-2 mx-auto mt-12 w-full max-w-md lg:mt-0 lg:w-2/4 lg:max-w-full xl:order-1 xl:w-2/5">
          <ProjectInfo
            title={title}
            description={description}
            techStacks={techStacks}
            status={status}
          />
        </div>
        <div className="order-2 flex w-full justify-end lg:w-2/4 xl:order-1 xl:w-3/5">
          {children}
          {/* <div className="w-full max-w-2xl p-2">{children}</div> */}
        </div>
      </div>
    </section>
  );
}
