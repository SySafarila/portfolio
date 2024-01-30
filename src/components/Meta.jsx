import Head from "next/head";
import { useRecoilValue } from "recoil";
import { ThemeColor } from "./Recoil";

const Meta = (props) => {
  const themeColor = useRecoilValue(ThemeColor);
  return (
    <Head>
      <title>
        {props.title ??
          "Web Developer With React, Tailwind CSS, And Laravel | Syahrul Safarila"}
      </title>
      <link rel="icon" href="/favicon.svg" />
      <link
        rel="canonical"
        href={props.canonical ?? "https://www.sysafarila.com"}
      />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      {/* <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      /> */}
      <meta name="description" content={props.description} />
      {/* google */}
      <meta itemProp="name" content={props.title} />
      <meta itemProp="description" content={props.description} />
      <meta itemProp="image" content={props.image ?? "summary_large_image"} />
      {/* facebook */}
      <meta property="og:url" content="https://sysafarila.tech" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta
        property="og:image"
        content={props.image ?? "summary_large_image"}
      />
      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta
        name="twitter:image"
        content={props.image ?? "summary_large_image"}
      />
      {/* themeColor */}
      <meta name="theme-color" content={themeColor} />
      {/* Manifest */}
      {/* <link rel="manifest" href="/manifest.json" /> */}
      <meta
        name="keywords"
        content="website, developer, react js, tailwind css, laravel, sysafarila, syahrul safarila"
      />
    </Head>
  );
};

export default Meta;

//  Add this meta to allow request across https & http
//  <meta
//    httpEquiv="Content-Security-Policy"
//    content="upgrade-insecure-requests"
//  />;
