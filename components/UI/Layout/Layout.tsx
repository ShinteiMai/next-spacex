import React from "react";
import Head from "next/head";
import { TComponent } from "@components/types";
import DesktopNav from "../DesktopNav";
import MobileNav from "../MobileNav";

interface Props extends TComponent {
  title?: string;
}

const metaTags = {
  url: "https://spacex.stevenhansel.com",
  title: "Next SpaceX",
  description:
    "A SpaceX web app to track SpaceX launches, view rockets, and visualize Starlink positions around the globe.",
  thumbnail: "/images/favicon.jpg",
};

const Layout = ({ children, title }: Props) => {
  return (
    <div data-testid="layout">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* SEO & Meta Tags */}
        <title>{title && `${title} | `}next-spacex</title>
        <link rel="shortcut icon" href={metaTags.thumbnail} />
        <meta name="title" content={metaTags.title} />
        <meta name="description" content={metaTags.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaTags.url} />
        <meta property="og:title" content={metaTags.title} />
        <meta property="og:description" content={metaTags.description} />
        <meta property="og:image" content={metaTags.thumbnail} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metaTags.url} />
        <meta property="twitter:title" content={metaTags.title} />
        <meta property="twitter:description" content={metaTags.description} />
        <meta property="twitter:image" content={metaTags.thumbnail} />

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
      <div className="">
        <MobileNav className="block md:hidden" />
        <DesktopNav className="hidden md:block" />

        <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-24 pt-24">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
