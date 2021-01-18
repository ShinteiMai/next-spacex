import React from "react";
import { TComponent } from "@components/types";
import { IRocket } from "@api/returnTypes";
import clsx from "clsx";

interface Props extends TComponent {
  rocket: IRocket;
}

const RocketTechnicalOverview = ({ rocket, className }: Props) => {
  return (
    <div
      className={clsx(
        "bg-primary-heavy bg-opacity-50 z-20 px-4 lg:px-10 py-6",
        className
      )}
    >
      <h2 className="text-white font-medium uppercase text-xl mb-8 mt-28 lg:mt-0">
        Technical Overview
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-10 gap-y-3">
        <div className="flex flex-col col-span-2">
          <p className="text-white font-medium text-sm uppercase text-opacity-75">
            Height
          </p>
          <hr className="opacity-50 mb-1" />
          <p className="text-white font-medium text-sm text-opacity-75">
            {rocket.height.meters.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}{" "}
            m &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            {rocket.height.feet.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}{" "}
            feet
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-white font-medium text-sm uppercase text-opacity-75">
            Stages
          </p>
          <hr className="opacity-50 mb-1" />
          <p className="text-white font-medium text-sm uppercase text-opacity-75">
            {rocket.stages}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-white font-medium text-sm uppercase text-opacity-75">
            Boosters
          </p>
          <hr className="opacity-50 mb-1" />
          <p className="text-white font-medium text-sm uppercase text-opacity-75">
            {rocket.boosters}
          </p>
        </div>
        <div className="flex flex-col col-span-2">
          <p className="text-white font-medium text-sm uppercase text-opacity-75">
            Cost Per Launch
          </p>
          <hr className="opacity-50 mb-1" />
          <p className="text-white font-medium text-sm uppercase text-opacity-75">
            {rocket.costPerLaunch.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>
        <div className="flex flex-col col-span-2">
          <p className="text-white font-medium text-sm uppercase text-opacity-75">
            Mass
          </p>
          <hr className="opacity-50 mb-1" />
          <p className="text-white font-medium text-sm text-opacity-75">
            {rocket.mass.kg.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}{" "}
            kg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            {rocket.mass.lb.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}{" "}
            lb
          </p>
        </div>
        <div className="flex flex-col col-span-2">
          <p className="text-white font-medium text-sm uppercase text-opacity-75">
            Diameter
          </p>
          <hr className="opacity-50 mb-1" />
          <p className="text-white font-medium text-sm text-opacity-75">
            {rocket.diameter.meters.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}{" "}
            m &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            {rocket.diameter.feet.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}{" "}
            feet
          </p>
        </div>
        <div className="flex flex-col col-span-2">
          <p className="text-white font-medium text-sm uppercase text-opacity-75">
            Success Rate
          </p>
          <hr className="opacity-50 mb-1" />
          <p className="text-white font-medium text-sm text-opacity-75">
            {rocket.successRatePct}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default RocketTechnicalOverview;
