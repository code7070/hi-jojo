import Close from "@icons/Close";
import workList from "@utils/worklist";
import { useRouter } from "next/router";
import PageHead from "./PageHead";
import styles from "@styles/work-detail.module.css";

export default function WorkDetail({ params = [] }) {
  const { replace, asPath } = useRouter();

  const doBack = () => {
    document.body.style.overflow = "auto";
    replace("/works", undefined, { shallow: true });
  };

  const target = asPath.length > 7 ? asPath.slice(7) : "";

  let workTarget = {};
  if (target)
    workList.map((i) => {
      const catched = i.works.find((i) => i.link === target);
      if (catched) workTarget = catched;
    });

  const hasWork = workTarget && Object.keys(workTarget).length > 1;

  const showClass = hasWork ? styles.show : "";

  return (
    <>
      {hasWork && <PageHead title={`Jojo - Works - ${workTarget.name}`} />}
      <div className={`${styles.overlay} ${showClass}`} onClick={doBack} />
      <div className={`${styles.modal} ${showClass}`}>
        <div className="relative w-full h-full">
          <div className={`${styles.btnClose} ${showClass}`}>
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
