import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname: path } = useRouter();

  const atHome = path === "/";

  return (
    <header className="fixed left-0 top-0 right-0 bg-base-100 max-h-[68px] z-50">
      <div className="content-wrapper py-4 ">
        <div className="container flex items-center justify-start h-9">
          <Link href="/">
            <div
              className={`rounded-3xl p-2 transition-all duration-200 bg-primary font-bold text-xl text-secondary text-center leading-none ${
                atHome ? "w-20" : "w-32"
              }`}
            >
              <div style={{ verticalAlign: "middle" }}>
                {atHome ? "/jojo" : "/home"}
              </div>
            </div>
          </Link>
          <div
            className={`${
              atHome ? "w-40" : "w-32"
            } bg-primary h-1 mx-4 rounded-2xl`}
          />
        </div>
      </div>
    </header>
  );
}
