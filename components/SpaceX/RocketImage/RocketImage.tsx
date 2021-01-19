import React from "react";
import { TComponent } from "@components/types";

interface Props extends TComponent {
  url: string;
  name: string;
}

const RocketImage = ({ url, name }: Props) => {
  return (
    <img
      className="object-cover absolute inline-block h-screen md:h-screen-5/6"
      src={url}
      alt={name}
    />
  );
};

export default RocketImage;
