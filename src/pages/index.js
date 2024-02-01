/* eslint-disable @next/next/no-img-element */
import Meta from "@/components/Meta";
import MainLayout from "@/layouts/Main";
import { useState } from "react";

export default function Home() {
  let photos = [
    { path: "/images/safarila.webp" },
    {
      path: "/images/safarila-street.jpg",
    },
    {
      path: "/images/nyotnyot.jpg",
    },
  ];
  const [photo, setPhoto] = useState(photos[0].path);

  const changePhoto = () => {
    switch (photo) {
      case "/images/safarila.webp":
        setPhoto(photos[1].path);
        break;

      case "/images/safarila-street.jpg":
        setPhoto(photos[2].path);
        break;

      default:
        setPhoto(photos[0].path);
        break;
    }
  };

  return (
    <MainLayout>
      <Meta
        title="Web Developer With React, Tailwind CSS, And Laravel | Syahrul Safarila"
        description="Developing some website with React as javascript library, Tailwind CSS as CSS framework, and Laravel as backend's framework"
        image="https://i.pinimg.com/originals/1c/09/36/1c0936c9e5cd191312bcdc8216db9c08.jpg"
      />
      <main className="flex flex-col gap-y-5 items-center justify-center main-landing-page p-5 relative dark:bg-dim-1">
        <div className="flex flex-col gap-y-7 items-center w-full xl:flex-row xl:gap-x-16 xl:justify-center">
          <img
            src={photo}
            width="30"
            height="30"
            className="border-4 border-gray-700 dark:border-gold-1 dark:border-opacity-40 duration-500 lg:w-1/4 md:w-1/3 transition-all w-1/2 xl:w-72"
            alt="Syahrul's Photo"
            style={{
              animation: "morph 8s ease-in-out infinite 1s",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            }}
            onClick={changePhoto}
          />
          <div className="flex flex-col gap-y-7 items-center xl:items-start xl:w-min">
            <h1 className="dark:text-gold-1 duration-500 font-extrabold font-family-Montserrat hover:tracking-widest text-3xl text-gray-800 text-shadow tracking-normal transition-all uppercase whitespace-nowrap xl:text-5xl">
              Syahrul Safarila
            </h1>
            <p className="dark:text-gold-1 duration-500 text-center text-gray-600 transition-all xl:text-left xl:text-xl">
              Backend & Frontend Web Developer
            </p>
            <div className="dark:hidden flex gap-x-4">
              <a
                href="https://instagram.com/sysafarila"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://github.com/sysafarila"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://id.linkedin.com/in/syahrul-safarila-4a1274188"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="dark:flex hidden gap-x-4">
              <a
                href="https://instagram.com/sysafarila"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gold-1"
              >
                Instagram
              </a>
              <a
                href="https://github.com/sysafarila"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gold-1"
              >
                GitHub
              </a>
              <a
                href="https://id.linkedin.com/in/syahrul-safarila-4a1274188"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gold-1"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
