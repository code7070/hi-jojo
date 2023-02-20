import PageHead from "./PageHead";
import styles from "@styles/home.module.css";
import HomeRight from "src/sections/homepage/home-right";

export default function Home() {
  return (
    <>
      <PageHead />
      <div className={styles.home}>
        <div className={`container ${styles.homeInner}`}>
          <div className={styles.homeGrid}>
            <div className={`headerPage text-center xl:text-left`}>
              <span className={styles.headingLine1}>Helping to</span>
              <div className={styles.headingLine2}>
                <div className={styles.underline1}>design,</div>
                &nbsp;
                <div className={styles.underline2}>code</div> and
              </div>
              <div className={styles.headingLine3}>build your own.</div>
            </div>
            <div className="mt-4 font-semibold text-base lg:text-lg max-w-md transition-all hidden xl:block">
              A frontend developer who try to help digitalize your&nbsp;
              <span className="word-underline animated">awe-some-thing</span>.
            </div>
          </div>
          <HomeRight />
        </div>
      </div>
    </>
  );
}
