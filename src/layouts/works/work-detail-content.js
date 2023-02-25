import { ColorBar } from "@layouts/project/project-card";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WorkContent({ workTarget = {} }) {
  const [view, setView] = useState(false);

  useEffect(() => {
    setView(false);
  }, [workTarget]);

  const hasWork = Object.keys(workTarget).length > 0;

  const isViewGallery = view === "gallery";

  const setGallery = () => setView(isViewGallery ? false : "gallery");

  const addTransition = (otherClass = "") =>
    `${otherClass} transition-all duration-200`;

  return (
    <div className={addTransition("relative p-4 h-full overflow-hidden")}>
      <div
        className={`${addTransition(
          "relative w-full bg-slate-100 rounded-2xl ease-out"
        )} ${isViewGallery ? "h-[100%]" : "h-[50%] sm:h-[60%]"}`}
      >
        <button
          className={`${addTransition(
            `btn btn-ghost btn-sm btn-square rounded-2xl absolute bottom-0 right-0`
          )} ${isViewGallery ? "rotate-45" : "rotate-0"}`}
          onClick={setGallery}
        >
          <Image
            alt="Enlarge"
            width={20}
            height={20}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nO2UTQrCMBCFv531QgrmDi1Gco9251270WOoxUhgAkM6EZG6KPgglPJ+wiQzgTVhA3RAkOWBxtA1wmVdJ94ZWiCq9QAOhs4Jp7WtFRiEfALDBxUNoo3irQb28j2/CdOaWAs8Sil6974SpquYxGsetiuMF0N3LTZylcv7YwE0wE79p4MfDd1YXMq+NilphG5ftM1dvL9v7LD06Pli4Kei0TOccFrrrcAtcFLPUhqn2vOVuKxLnuRdCV59iEJXnsDQDgAAAABJRU5ErkJggg=="
          />
        </button>
      </div>
      <div
        className={`${addTransition(
          "block sm:flex items-start ease-in overflow-hidden"
        )} ${isViewGallery ? "h-[0%] opacity-0" : "h-[40%]"}`}
      >
        <div className="sm:w-1/2 p-4">
          <div className="text-2xl sm:text-5xl font-extrabold sm:mb-4">
            {hasWork ? (
              workTarget.name
            ) : (
              <div className="w-full h-9 bg-slate-200" />
            )}
          </div>
          <div className="font-extrabold sm:text-lg mb-2 opacity-50">
            {workTarget.year}
          </div>
          <div className="flex flex-wrap gap-2 -mx-2">
            {workTarget.stacks?.split(",").map((stack, index) => (
              <div
                className="badge badge-secondary badge-sm font-medium"
                key={index}
              >
                {stack}
              </div>
            ))}
          </div>
          <div className="my-4 relative py-2">
            <ColorBar colors={workTarget?.colors?.split(",")} />
          </div>
        </div>
        <div className="sm:w-1/2 p-4 text-sm sm:text-base">
          {workTarget.description}
        </div>
      </div>
    </div>
  );
}
