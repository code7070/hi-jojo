import Router from "next/router";
import nProgress from "nprogress";
import { Montserrat } from "@next/font/google";
import Header from "@components/header";
import "nprogress/nprogress.css";
import "@styles/globals.css";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "block",
});

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
      <Header />
    </>
  );
}
