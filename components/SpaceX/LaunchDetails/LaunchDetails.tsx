import React from "react";
import Image from "next/image";
import { TComponent } from "@components/types";
import clsx from "clsx";
import { ILaunch, TLaunchpad, TRocket } from "@api/returnTypes";
import { TextLink } from "@components/UI";
import { useQuery } from "react-query";
import { MdLocationOn } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";
import { SiGooglecalendar } from "react-icons/si";
import fromApi from "@api/fromApi";

interface Props extends TComponent {
  launch: ILaunch;
}

const LaunchDetails = ({ className, "data-testid": testId, launch }: Props) => {
  const { data: launchpadData } = useQuery<TLaunchpad>(
    ["launchpad", launch.launchpad],
    () => fromApi.getOneLaunchpad(launch.launchpad)
  );
  const { data: rocketData } = useQuery<TRocket>(
    ["rocket", launch.rocket],
    () => fromApi.getOneRocket(launch.rocket)
  );
  const date = new Date(launch.dateUtc);
  return (
    <div
      className={clsx("relative h-screen-5/6 w-full mb-24", className)}
      data-testid={testId || "launch-details"}
    >
      <div className="top-0 left-0 absolute bg-black bg-opacity-50 z-20 h-screen-5/6 w-full" />
      <img
        className="top-0 left-0 absolute object-cover h-screen-5/6 w-full"
        src={launch.links.flickr.original[0] || "/images/placeholder.jpg"}
        alt={`launch-img-${launch.name}`}
      />
      <div className="absolute right-0 md:right-24 top-12 md:top-32 z-30 ">
        <div className="w-full md:w-132 px-6">
          <div className="mb-5">
            <img
              src={launch.links.patch.large || "/images/patch.png"}
              width={80}
              height={80}
              alt={`upcoming-${launch.name}`}
            />
          </div>
          <div className="flex items-center mb-5">
            <h1 className="uppercase font-medium text-white text-xl md:text-4xl mr-6">
              {launch.name}
            </h1>
            <div className="flex items-end">
              {!!launch.links.reddit.campaign ? (
                <TextLink
                  className="mr-2"
                  href={launch.links.reddit.campaign}
                  newTab
                >
                  <span>
                    <Image
                      src="/images/reddit.png"
                      alt={`${launch.name}-reddit`}
                      width={32}
                      height={32}
                      className="transition-all duration-150 hover:opacity-75"
                    />
                  </span>
                </TextLink>
              ) : null}
              {!!launch.links.webcast ? (
                <TextLink href={launch.links.webcast} newTab>
                  <span>
                    <Image
                      src="/images/youtube.png"
                      alt={`${launch.name}-reddit`}
                      width={32}
                      height={32}
                      className="transition-all duration-150 hover:opacity-75"
                    />
                  </span>
                </TextLink>
              ) : null}
            </div>
          </div>

          <h2 className="text-white text-lg md:text-2xl mr-9 flex items-center mb-4">
            <span className="mr-4">
              <MdLocationOn size={24} />
            </span>
            {launchpadData?.data.name}
          </h2>
          <h2 className="text-white text-lg md:text-2xl mr-9 flex items-center mb-4">
            <span className="mr-4">
              <IoRocketSharp size={24} />
            </span>
            {rocketData?.data.name}
          </h2>
          <h2 className="text-white text-lg md:text-2xl mr-9 flex items-center mb-4">
            <span className="mr-4">
              <SiGooglecalendar size={24} />
            </span>
            {date.toLocaleTimeString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            UTC
          </h2>

          <div className="mt-6">
            <p className="text-white">
              {launch.details || "No description provided"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchDetails;
