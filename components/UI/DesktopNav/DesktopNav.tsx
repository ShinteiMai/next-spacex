import React from "react";
import { TComponent } from "@components/types";
import clsx from "clsx";
import Image from "next/image";
import TextLink from "../TextLink";
import { useRouter } from "next/router";
import { SiGithub } from "react-icons/si";

interface Props extends TComponent {}

const DesktopNav = ({ className, "data-testid": testId }: Props) => {
  const router = useRouter();

  return (
    <div
      data-testid={testId || "desktop-nav"}
      className={className || "w-full"}
    >
      <div className="fixed w-full z-50">
        <div className="flex items-center justify-between w-full bg-white shadow-lg pt-2 pb-4 px-10">
          <div className="flex items-center" onClick={() => router.push("/")}>
            <Image
              onClick={() => router.push("/")}
              src="/images/logo.png"
              width={256}
              height={32}
              className="cursor-pointer hover:opacity-50 transition-all duration-150"
            />
            <TextLink href="https://github.com/ShinteiMai/next-spacex" newTab>
              <SiGithub size={28} className="mt-2 ml-4 transform hover:opacity-50 hover:-translate-y-1 transition-all duration-150" />
            </TextLink>
          </div>

          <nav className="inline-block mt-2">
            <TextLink className="mr-8 uppercase font-bold text-sm hover:opacity-75" href="/">
              Launches
            </TextLink>
            <TextLink
              className="mr-8 uppercase font-bold text-sm hover:opacity-75"
              href="/rockets"
            >
              Rockets
            </TextLink>
            <TextLink className="uppercase font-bold text-sm hover:opacity-75" href="/starlink">
              Starlink
            </TextLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
