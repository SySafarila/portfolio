import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function SysafarilaCom(props) {
  useEffect(() => {
    const html = document.querySelector("html");
    html.lang = "en-US";

    document
      .querySelector("body")
      .classList.add(
        "bg-gray-100",
        "dark:bg-dim-1",
        "relative",
        "touch-highlight-transparent"
      );

    checkTheme();
    themeListener();

    return () => {
      document
        .querySelector("body")
        .classList.remove(
          "bg-gray-100",
          "relative",
          "touch-highlight-transparent"
        );
    };
  }, []);

  const checkTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
      // setThemeColor("#0F172A");
    } else {
      document.querySelector("html").classList.remove("dark");
      // setThemeColor("#fff");
    }
  };

  const themeListener = () => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (event.matches) {
          // darkmode
          document.querySelector("html").classList.add("dark");
          // setThemeColor("#0F172A");
        } else {
          // lightmode
          document.querySelector("html").classList.remove("dark");
          // setThemeColor("#fff");
        }
      });
  };

  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
