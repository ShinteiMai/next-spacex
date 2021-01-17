import React from "react";
import { TComponent } from "@components/types";
import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import TextLink from "../TextLink";
import { SiGithub } from "react-icons/si";

interface Props extends TComponent {}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const toggleAnimation = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 0px 0px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
};

const MobileNav = ({ className, "data-testid": testId }: Props) => {
  const [isOpen, toggleIsOpen] = useCycle(false, true);
  return (
    <div className={clsx("fixed ml-0 mt-0 w-full z-50", className)}>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <div className="flex items-center backdrop-blur bg-opacity-95 bg-white relative pb-4 pt-2 shadow-lg">
          <div className="ml-5 mt-5 absolute inline-block">
            <MenuToggle toggle={() => toggleIsOpen()} />
          </div>

          <div className="flex w-full items-center justify-center ml-8">
            <Image src="/images/logo.png" width={256} height={32} />
          </div>
        </div>
        <motion.div
          className={clsx("w-full bg-opacity-80 backdrop-blur bg-white block", {
            "h-screen": isOpen,
            "h-0": !isOpen,
            hidden: !isOpen,
          })}
          variants={toggleAnimation}
        >
          <nav
            data-testid={testId || "navbar"}
            className="flex justify-between items-center flex-col md:flex-row"
          >
            <div className="flex flex-col md:flex-row mt-8 md:mt-0">
              <TextLink
                className="mr-0 md:mr-8 mb-5 md:mb-0 uppercase font-bold text-sm"
                href="/"
              >
                Launches
              </TextLink>
              <TextLink
                className="mr-0 md:mr-8 mb-5 md:mb-0 uppercase font-bold text-sm"
                href="/rockets"
              >
                Rockets
              </TextLink>
              <TextLink
                className="mr-0 md:mr-8 mb-5 md:mb-0 uppercase font-bold text-sm"
                href="/starlink"
              >
                Starlink
              </TextLink>
              <TextLink href="https://github.com/ShinteiMai/next-spacex" newTab>
                <SiGithub
                  size={28}
                  className="mt-2 ml-4 transform hover:opacity-50 hover:-translate-y-1 transition-all duration-150"
                />
              </TextLink>
            </div>
          </nav>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default MobileNav;
