import ActiveLink from "@/components/ActiveLink";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="dark:bg-dim-2 dark:border-transparent navbar border-b xl:border-b-0">
      <div className="navbar-content" data-nosnippet>
        <div>
          <Link href="/">
            <span className="dark:text-gold-1 navbar-brand">SYSAFARILA</span>
          </Link>
        </div>
        <div className="dark:text-gold-1 dark:text-opacity-80 navbar-links-mobile">
          <ActiveLink
            href="/portfolio"
            activeClassName="dark:text-gold-1 dark:text-opacity-100 text-gray-800"
          >
            <span className="hover:underline">Portfolio</span>
          </ActiveLink>
        </div>
        <div className="dark:text-gold-1 dark:text-opacity-80 navbar-links-desktop">
          <ActiveLink
            href="/"
            activeClassName="nav-link-desktop-active dark:text-gold-1"
          >
            <span className="capitalize hover:underline">home</span>
          </ActiveLink>
          <ActiveLink
            href="/portfolio"
            activeClassName="nav-link-desktop-active dark:text-gold-1"
          >
            <span className="capitalize hover:underline">portfolio</span>
          </ActiveLink>
        </div>
        <div className="dark:text-gold-1 dark:text-opacity-80 flex-col hidden italic text-gray-500 text-lg xl:flex">
          <span>© {new Date().getFullYear()} SySafarila</span>
          <span>
            Inspired by{" "}
            <a
              href="https://marketifythemes.net/html/tokyo/index.html#home"
              className="dark:text-gold-1 duration-500 font-semibold hover:underline transition-all"
            >
              Tokyo
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
