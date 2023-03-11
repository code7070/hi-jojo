import Link from "next/link";
import { useRouter } from "next/router";

const pages = [
  { name: "works", href: "/works" },
  { name: "articles", href: "/articles" },
];

export default function Header() {
  const { pathname: path, asPath } = useRouter();

  const atHome = path === "/";

  const linkClass =
    "rounded-3xl p-2 transition-all duration-200 font-medium text-lg md:text-xl text-center leading-none";

  const pageLinks = (href) => {
    let classes = `${linkClass} py-2 px-4 border-2 border-transparent hover:bg-secondary`;
    if (href === asPath || asPath.includes(href))
      classes = `${classes} bg-primary text-white hover:bg-primary`;
    return classes;
  };

  const inWorkDetail = path === "/works/[slug]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 max-h-[68px] bg-base-100 transition-all duration-200 ${
        inWorkDetail ? "translate-y-[-100%]" : ""
      }`}
    >
      <div className="content-wrapper py-4">
        <div className="container flex h-9 items-center justify-start gap-4">
          <Link href="/">
            <div
              className={`${
                atHome
                  ? "w-16 bg-primary text-secondary"
                  : "w-24 bg-secondary text-primary"
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
            } mx-4 hidden h-1 rounded-2xl bg-primary transition-all duration-200 sm:block`}
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
