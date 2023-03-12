import Router, { useRouter } from "next/router";
import nProgress from "nprogress";
import { Plus_Jakarta_Sans as Font } from "@next/font/google";
import Header from "@components/header";
import Footer from "@components/footer/footer";
import "nprogress/nprogress.css";
import "@styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-notion-x/src/styles.css";
import "@styles/notion/duper-style-default.scss";
import "@styles/notion/duper-style-stylish.scss";

const font = Font({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "block",
});

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const inWorkDetail = pathname === "/works/[slug]";
  const spacer = inWorkDetail ? "pt-[0px]" : "pt-[70px]";
  return (
    <>
      <main className={`${font.className} transition-all duration-200 ${spacer}`}>
        <div className="top-ornament" />
        <Component {...pageProps} />
      </main>
      <Header />
      <Footer />
    </>
  );
}
