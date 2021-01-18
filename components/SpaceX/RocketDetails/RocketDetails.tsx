import React, { useState } from "react";
import { TComponent } from "@components/types";
import clsx from "clsx";
import { IRocket } from "@api/returnTypes";
import { Slider, Tab } from "@components/Common";
import RocketTechnicalOverview from "../RocketTechnicalOverview/RocketTechnicalOverview";
import { AnimateSharedLayout, motion } from "framer-motion";
import RocketImage from "../RocketImage";

interface Props extends TComponent {
  rocket: IRocket;
}

type ListTabs = "engines" | "stages" | "payloads";

const RocketDetails = ({ className, "data-testid": testId, rocket }: Props) => {
  const [activeTab, setActiveTab] = useState<ListTabs>("engines");

  return (
    <div>
      <div
        className={clsx("grid grid-cols-1 lg:grid-cols-2", className)}
        data-testid={testId || "rocket-details"}
      >
        <div className="relative h-screen lg:h-screen-5/6">
          <Slider imageUrls={rocket.flickrImages}>
            <motion.div className="absolute w-full bottom-0 h-screen lg:h-screen-1/4">
              <RocketTechnicalOverview rocket={rocket} className="h-screen lg:h-screen-1/4 w-full bottom-0" />
            </motion.div>
          </Slider>
        </div>
        <div className="px:6 md:px-12 mt-4">
          <h1 className="text-4xl md:text-6xl font-semibold">{rocket.name}</h1>
          <p className="mt-3 text-sm">"{rocket.description}"</p>
          <AnimateSharedLayout>
            <ul className="mt-5 grid grid-cols-3 text-center">
              <Tab
                onClick={() => setActiveTab("engines")}
                isActive={activeTab === "engines"}
              >
                Engines
              </Tab>
              <Tab
                onClick={() => setActiveTab("stages")}
                isActive={activeTab === "stages"}
              >
                Stages
              </Tab>
              <Tab
                onClick={() => setActiveTab("payloads")}
                isActive={activeTab === "payloads"}
              >
                Payloads
              </Tab>
            </ul>
          </AnimateSharedLayout>
        </div>
      </div>
    </div>
  );
};

export default RocketDetails;
