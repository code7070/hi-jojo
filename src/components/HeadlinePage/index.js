import styles from "@styles/headline-page.module.scss";

export default function HeadlinePage({ line1, line2 }) {
  return (
    <div className="headerPage mt-20 mb-24 sm:mb-32 text-center px-8">
      <div className={styles.headline1}>What i do, called</div>
      <div>
        <h2 className={styles.headline2}>Works</h2>
      </div>
    </div>
  );
}
