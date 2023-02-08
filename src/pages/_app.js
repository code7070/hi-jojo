import { Montserrat } from "@next/font/google";
import Header from "@components/header";
import "@styles/globals.css";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "block",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
