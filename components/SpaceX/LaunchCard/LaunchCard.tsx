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
      <div className="text-center mr-8 w-48">
        <img
          src={launch.links.patch.large || "/images/patch.png"}
          width={156}
          height={156}
          alt={launch.name || "launch"}
        />
        <p className="font-medium text-lg md:text-xl">{`${date.toLocaleString(
          "default",
          {
            month: "long",
          }
        )}, ${date.getFullYear()}`}</p>
      </div>
      <div>
        <h1
          onClick={() => router.push(`/launches/${launch.id}`)}
          className="font-medium text-2xl md:text-4xl cursor-pointer transform hover:opacity-75 hover:-translate-y-1 transition-all duration-200"
        >
          {launch.name}
          <span className="font-medium text-lg md:text-2xl opacity-50 ml-5">
            {rocketData?.data.name}
          </span>
        </h1>
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
