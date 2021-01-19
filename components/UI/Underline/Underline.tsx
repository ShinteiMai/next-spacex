import React from "react";
import { TComponent } from "@components/types";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Props extends TComponent {
  isActive?: boolean;
}

const Underline = ({ isActive, "data-testid": testId, className }: Props) => {
  return (
    <div
      className={clsx("relative", className)}
      data-testid={testId || "underline"}
    >
      {isActive && (
        <motion.div
          transition={{ duration: 0.333, ease: "easeInOut" }}
          layoutId="underline"
          className="h-1 bg-black mt-2 absolute w-full"
        />
      )}

      <div className="h-1 bg-black mt-2 bg-opacity-25 absolute w-full" />
    </div>
  );
};

export default Underline;
