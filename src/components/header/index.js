import Link from "next/link";
import { useRouter } from "next/router";

const pages = [
  { name: "works", href: "/work" },
  { name: "articles", href: "/articles" },
];

export default function Header() {
  const { pathname: path, asPath } = useRouter();

  const atHome = path === "/";

  const linkClass =
    "rounded-3xl p-2 transition-all duration-200 font-medium text-lg md:text-xl text-center leading-none";

  const pageLinks = (href) => {
    let classes = `${linkClass} py-2 px-4 border-2 border-transparent hover:bg-secondary`;
    if (href === asPath)
      classes = `${classes} bg-primary text-white hover:bg-primary`;
    return classes;
  };

  return (
    <header className="fixed left-0 top-0 right-0 bg-base-100 max-h-[68px] z-50">
      <div className="content-wrapper py-4 ">
        <div className="container flex items-center justify-start h-9 gap-4">
          <Link href="/">
            <div
              className={`${
                atHome
                  ? "bg-primary text-secondary w-16"
                  : "bg-secondary text-primary w-24"
              }  ${linkClass}`}
            >
              <div style={{ verticalAlign: "middle" }}>
                {atHome ? "/" : "../"}
              </div>
            </div>
          </Link>
          <div
            className={`${
              atHome ? "w-48" : "w-32"
            } transition-all duration-200 bg-primary h-1 mx-4 rounded-2xl hidden sm:block`}
          />
          {pages.map(({ href, name }) => (
            <Link href={href} key={href} className={pageLinks(href)}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
