import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname: path } = useRouter();

  const atHome = path === "/";

  return (
    <header>
      <div className="content-wrapper py-4 ">
        <div className="container flex items-center justify-start h-9">
          <Link href="/">
            <div className="bg-jo-green-1 rounded-3xl overflow-hidden px-3 py-2 flex items-center justify-center">
              <div
                className={` bg-jo-green-1 text-jo-green-5 font-medium text-xl transition-all flex items-center leading-none justify-center ${
                  atHome ? "w-9" : "w-[80px]"
                }`}
              >
                /{atHome ? "jo" : "home"}
              </div>
            </div>
          </Link>
          <div className="w-32 bg-jo-green-1 h-[1px] mx-4" />
        </div>
      </div>
    </header>
  );
}
