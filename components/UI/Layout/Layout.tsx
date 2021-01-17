import React from "react";
import Head from "next/head";
import { TComponent } from "@components/types";

interface Props extends TComponent {}

const Layout = ({ children }: Props) => {
  return (
    <div data-testid="layout">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* SEO & Meta Tags */}
        <title>next-tailwind-boilerplate</title>
        <link rel="shortcut icon" href="/images/typescript.png" />
        <meta name="title" content="next-tailwind-boilerplate" />
        <meta
          name="description"
          content=""
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stevenhansel.com/" />
        <meta property="og:title" content="Steven Hansel" />
        <meta
          property="og:description"
          content="a passionate software engineer building robust web & mobile applications. Interested in TypeScript, React, NestJS & GraphQL. "
        />
        <meta
          property="og:image"
          content="https://stevenhansel.s3-ap-southeast-1.amazonaws.com/profile.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://stevenhansel.com/" />
        <meta property="twitter:title" content="Steven Hansel" />
        <meta
          property="twitter:description"
          content="a passionate software engineer building robust web & mobile applications. Interested in TypeScript, React, NestJS & GraphQL. "
        />
        <meta
          property="twitter:image"
          content="https://stevenhansel.s3-ap-southeast-1.amazonaws.com/profile.png"
        />

        {/* Fonts */}
        <link
          rel="preload"
          href="/fonts/poppins/Poppins-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/poppins/Poppins-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/poppins/Poppins-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/poppins/Poppins-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/poppins/Poppins-ExtraBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/poppins/Poppins-Black.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
