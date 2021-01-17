import React from "react";
import { TComponent } from "@components/types";
import clsx from "clsx";
import { IRocket } from "@api/returnTypes";
import { capitalize } from "@utils/capitalize";
import { useRouter } from "next/router";

interface Props extends TComponent {
  rocket: IRocket;
}

const RocketCard = ({ className, "data-testid": testId, rocket }: Props) => {
  const router = useRouter();

  return (
    <div
      className={clsx(
        "cursor-pointer border-black border-opacity-25 border-solid shadow-2xl transition-all duration-150 hover:opacity-75 transform hover:-translate-y-1",
        className
      )}
      onClick={() => router.push(`/rockets/${rocket.id}`)}
      data-testid={testId || "rocket-card"}
    >
      <div className="">
        <img
          src={rocket.flickrImages[0]}
          alt={rocket.name}
          className="object-cover w-full h-84"
        />
      </div>
      <div className="px-2 md:px-8 pb-2 md:pb-4 mt-4">
        <h1 className="font-medium text-3xl mb-1">{rocket.name}</h1>
        <p className="font-medium text-xl mb-1">
          {capitalize(rocket.engines.type)} |{" "}
          <span className="opacity-50 font-normal">
            {capitalize(rocket.engines.version)}
          </span>
        </p>
        <p className="font-normal">
          {rocket.stages} Stages • {rocket.boosters} Boosters
        </p>
      </div>
    </div>
  );
};

export default RocketCard;
