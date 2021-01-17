import React from "react";
import { TComponent } from "@components/types";
import clsx from "clsx";
import Image from "next/image";

interface Props extends TComponent {}

const Navbar = ({ className }: Props) => {
  return <div className={clsx(className, "")}>
    <Image src="/images/logo.png" width={256} height={32} />
  </div>;
};

export default Navbar;
