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
            <h2 className={`headerPage text-center xl:text-left`}>
              <span className={styles.headingLine1}>Helping to</span>
              <div className={styles.headingLine2}>
                <div className={styles.underline1}>design,</div>
                &nbsp;
                <div className={styles.underline2}>code</div> and
              </div>
              <div className={styles.headingLine3}>build your own.</div>
            </h2>
            <div className="mt-4 font-semibold text-base text-center mx-auto xl:mx-0 xl:text-left xl:text-lg max-w-md transition-all xl:block">
              A frontend developer who loves{" "}
              <span className="word-underline animated">
                &lt;CleanCode /&gt;
              </span>
              <br />
              and make &nbsp;
              <span className="word-underline animated">awe-some-thing</span>.
            </div>
          </div>
          <HomeRight />
        </div>
      </div>
    </>
  );
}
