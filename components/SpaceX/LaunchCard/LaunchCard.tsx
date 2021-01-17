import React from "react";
import { TComponent } from "@components/types";
import clsx from "clsx";
import { ILaunch, TRocket } from "@api/returnTypes";
import { useRouter } from "next/router";
import Image from "next/image";
import { TextLink } from "@components/UI";
import { useQuery } from "react-query";
import fromApi from "@api/fromApi";

interface Props extends TComponent {
  launch: ILaunch;
}

const LaunchCard = ({ className, "data-testid": testId, launch }: Props) => {
  const { data: rocketData } = useQuery<TRocket>(
    ["rocket", launch.rocket],
    () => fromApi.getOneRocket(launch.rocket)
  );
  const router = useRouter();
  const date = new Date(launch.dateUtc);
  return (
    <div
      data-testid={testId || "launch-card"}
      className={clsx(
        "flex flex-col md:flex-row shadow-xl py-4 px-6 md:px-12 mb-4",
        className
      )}
    >
      <div className="text-center mr-0 md:mr-8 w-full md:w-48 mb-4">
        <div className="flex items-center justify-center md:inline-block">
          <img
            src={launch.links.patch.large || "/images/patch.png"}
            width={156}
            height={156}
            alt={launch.name || "launch"}
          />
        </div>

        <p className="font-medium text-lg md:text-xl">{`${date.toLocaleString(
          "default",
          {
            month: "long",
          }
        )}, ${date.getFullYear()}`}</p>
      </div>
      <div className="text-center md:text-left">
        <div
          className="flex items-center justify-center md:justify-start cursor-pointer transform hover:opacity-75 hover:-translate-y-1 transition-all duration-200"
          onClick={() => router.push(`/launches/${launch.id}`)}
        >
          <h1 className="font-medium text-3xl md:text-4xl ">{launch.name}</h1>

          <span className="font-medium text-xl md:text-2xl opacity-50 ml-5">
            {rocketData?.data.name}
          </span>
        </div>
        <div className="mt-2">
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
        <p className="text-sm">
          {launch.details || "No description available"}
        </p>
      </div>
    </div>
  );
};

export default LaunchCard;
