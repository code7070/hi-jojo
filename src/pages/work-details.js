import Close from "@icons/Close";
import workList from "@utils/worklist";
import { useRouter } from "next/router";
import PageHead from "./PageHead";
import styles from "@styles/work-detail.module.css";
import { useEffect, useState } from "react";

export default function WorkDetail({ params = [] }) {
  const [workTarget, setWorkTarget] = useState({});
  const [open, setOpen] = useState(false);

  const { replace, asPath } = useRouter();

  const doBack = () => {
    document.body.style.overflow = "auto";
    replace("/works", undefined, { shallow: true });
    setOpen("closed");
    setTimeout(() => {
      if (Object.keys(workTarget).length < 1) setOpen(false);
    }, 500);
  };

  const target = asPath.length > 7 ? asPath.slice(7) : "";

  useEffect(() => {
    if (target) {
      workList.map((i) => {
        const catched = i.works.find((i) => i.link === target);
        if (catched) setWorkTarget(catched);
      });
      setOpen("show");
    } else setWorkTarget(false);
  }, [target]);

  const hasWork = workTarget && Object.keys(workTarget).length > 1;

  const classJoiner = (name = "") => `${styles[name]} ${styles[open || ""]}`;

  return (
    <>
      {hasWork && <PageHead title={`Works - ${workTarget.name}`} />}
      <div className={classJoiner("overlay")} onClick={doBack} />

      <div className={classJoiner("modal")}>
        <div className="relative w-full h-full">
          <div className={classJoiner("btnClose")}>
            <button
              onClick={doBack}
              type="button"
              className="btn btn-sm btn-error btn-outline btn-circle border-2"
            >
              <Close size={24} />
            </button>
          </div>
          <div className={styles.content}>{/*  */}</div>
          <div className="sm:hidden">
            <button
              className="btn btn-error rounded-t-none w-full font-bold tracking-wide"
              onClick={doBack}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
