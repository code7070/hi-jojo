import styles from "@styles/headline-page.module.scss";

export default function HeadlinePage({ line1, line2 }) {
  return (
    <div className="headerPage mt-20 mb-24 px-8 text-center sm:mb-32">
      <div className={styles.headline1}>{line1}</div>
      <div>
        <h2 className={styles.headline2}>{line2}</h2>
      </div>
    </div>
  );
}
