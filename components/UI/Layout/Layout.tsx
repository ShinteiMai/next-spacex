import React from "react";
import Head from "next/head";
import { TComponent } from "@components/types";
import Navbar from "../Navbar";

interface Props extends TComponent {
  title?: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <div data-testid="layout">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* SEO & Meta Tags */}
        <title>{title && `${title} | `}next-spacex</title>
        <link rel="shortcut icon" href="/images/favicon.jpg" />
        <meta name="title" content="next-spacex" />
        <meta
          name="description"
          content="A web app about SpaceX built with Next.js, TypeScript, Tailwind CSS and react-query supported with SpaceX-API. Track SpaceX launches, view rockets, and visualize Starlink positions around the globe."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spacex.stevenhansel.com/" />
        <meta property="og:title" content="next-spacex" />
        <meta
          property="og:description"
          content="A web app about SpaceX built with Next.js, TypeScript, Tailwind CSS and react-query supported with SpaceX-API. Track SpaceX launches, view rockets, and visualize Starlink positions around the globe."
        />
        <meta property="og:image" content="/images/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://spacex.stevenhansel.com/"
        />
        <meta property="twitter:title" content="next-spacex" />
        <meta
          property="twitter:description"
          content="A web app about SpaceX built with Next.js, TypeScript, Tailwind CSS and react-query supported with SpaceX-API. Track SpaceX launches, view rockets, and visualize Starlink positions around the globe."
        />
        <meta property="twitter:image" content="/images/logo.png" />

        {/* Fonts */}
        <link
          rel="preload"
          href="/fonts/heebo/Heebo-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/heebo/Heebo-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/heebo/Heebo-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/heebo/Heebo-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/heebo/Heebo-ExtraBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/heebo/Heebo-Black.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className="max-w-3xl mx-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
