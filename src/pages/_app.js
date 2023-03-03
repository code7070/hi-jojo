import Router from "next/router";
import nProgress from "nprogress";
import { Plus_Jakarta_Sans as Font } from "@next/font/google";
import Header from "@components/header";
import Footer from "@components/footer/footer";
import "nprogress/nprogress.css";
import "@styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const font = Font({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "block",
});

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={font.className}>
        <div className="top-ornament" />
        <Component {...pageProps} />
      </main>
      <Header />
      <Footer />
    </>
  );
}
