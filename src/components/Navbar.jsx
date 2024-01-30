import ActiveLink from "@/components/ActiveLink";
import Link from "next/link";
// import Script from "next/script";
// import { useEffect } from "react";

export default function Navbar() {
  // useEffect(() => {
  //   const dropdowns = document.querySelectorAll('[data-dropdown="true"]');

  //   dropdowns.forEach((dropdown) => {
  //     let dropdownTrigger = dropdown.querySelector(
  //       '[data-dropdown-trigger="true"]'
  //     );
  //     dropdownTrigger.addEventListener("click", (e) => {
  //       e.stopPropagation();
  //       dropdown.dataset.dropdown = "show";
  //       // console.count("y");
  //     });
  //   });

  //   window.addEventListener("click", () => {
  //     const dropdowns = document.querySelectorAll('[data-dropdown="show"]');
  //     dropdowns.forEach((dropdown) => {
  //       dropdown.dataset.dropdown = true;
  //       // console.count("x");
  //     });
  //   });
  // }, []);

  return (
    <nav className="dark:bg-dim-2 dark:border-transparent navbar">
      <div className="navbar-content" data-nosnippet>
        <div>
          <Link href="/">
            <span className="dark:text-gold-1 navbar-brand">SYSAFARILA</span>
          </Link>
        </div>
        <div className="dark:text-gold-1 dark:text-opacity-80 navbar-links-mobile">
          {/* <ActiveLink
            href="/about"
            activeClassName="dark:text-gold-1 dark:text-opacity-100 text-gray-800"
          >
            <span>person</span>
          </ActiveLink> */}
          <ActiveLink
            href="/portfolio"
            activeClassName="dark:text-gold-1 dark:text-opacity-100 text-gray-800"
          >
            <span>Portfolio</span>
          </ActiveLink>
          {/* <ActiveLink
            href="/account"
            activeClassName="dark:text-gold-1 dark:text-opacity-100 text-gray-800"
          >
            <span>account_circle</span>
          </ActiveLink> */}
        </div>
        <div className="dark:text-gold-1 dark:text-opacity-80 navbar-links-desktop">
          <ActiveLink
            href="/"
            activeClassName="nav-link-desktop-active dark:text-gold-1"
          >
            <span className="capitalize">home</span>
          </ActiveLink>
          {/* <ActiveLink
            href="/about"
            activeClassName="nav-link-desktop-active dark:text-gold-1"
          >
            <span className="capitalize">about</span>
          </ActiveLink> */}
          <ActiveLink
            href="/portfolio"
            activeClassName="nav-link-desktop-active dark:text-gold-1"
          >
            <span className="capitalize">portfolio</span>
          </ActiveLink>
          {/* <ActiveLink
            href="/account"
            activeClassName="nav-link-desktop-active dark:text-gold-1"
          >
            <span className="capitalize">account</span>
          </ActiveLink> */}
        </div>
        <div className="dark:text-gold-1 dark:text-opacity-80 flex-col hidden italic text-gray-500 text-lg xl:flex">
          <span>© {new Date().getFullYear()} SySafarila</span>
          <span>
            Inspired by{" "}
            <a
              href="https://marketifythemes.net/html/tokyo/index.html#home"
              className="dark:text-gold-1 duration-500 font-semibold hover:text-gray-800 transition-all"
            >
              Tokyo
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
