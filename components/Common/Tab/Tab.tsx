import React from "react";
import { TComponent } from "@components/types";
import clsx from "clsx";
import { Underline } from "@components/UI";

interface Props extends TComponent {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Tab = ({
  children,
  isActive,
  onClick,
  className,
  "data-testid": testId,
}: Props) => {
  return (
    <div
      className={clsx("cursor-pointer", className)}
      onClick={onClick}
      data-testid={testId || "tab"}
    >
      {children}
      <div className="relative">
        <Underline isActive={isActive} />
      </div>
    </div>
  );
};

export default Tab;
