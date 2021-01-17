import { GetServerSideProps } from "next";
import React from "react";
import { QueryClient, useInfiniteQuery, useQuery } from "react-query";
import fromApi from "@api/fromApi";
import { dehydrate } from "react-query/hydration";
import { TLaunches, TQueryLaunches } from "@api/returnTypes";
import { DotLoader } from "react-spinners";
import { LaunchCard, LaunchDetails } from "@components/SpaceX";
import { Waypoint } from "react-waypoint";

const QUERY_LIMIT = 5;
const IndexPage = () => {
  const {
    data: upcomingLaunchData,
    isLoading: isUpcomingLaunchesLoading,
  } = useQuery<TLaunches>(["/launches"], fromApi.getUpcomingLaunches);
  const {
    data: launchesData,
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<TQueryLaunches>(
    "/launches/query",
    async ({ pageParam }) =>
      fromApi.getQueryLaunches("desc", QUERY_LIMIT, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.data.nextPage,
    }
  );

  return (
    <div className="mx-auto">
      <div>
        <p className="text-xl md:text-2xl font-medium uppercase mb-3">
          Upcoming Launch
        </p>
        {!isUpcomingLaunchesLoading && upcomingLaunchData ? (
          <LaunchDetails launch={upcomingLaunchData.data[0]} />
        ) : null}
      </div>

      <div>
        <p className="text-xl md:text-2xl font-medium uppercase mb-3">
          Launches
        </p>
        {!isLoading && launchesData ? (
          launchesData.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.data.docs.map((launch) => (
                <LaunchCard className="mb-4"  key={launch.id} launch={launch} />
              ))}
            </React.Fragment>
          ))
        ) : (
          <DotLoader />
        )}
      </div>
      <div className="py-24 mx-auto text-center">
        <Waypoint
          onEnter={() => {
            if (hasNextPage && !isFetchingNextPage) {
              fetchNextPage();
            }
          }}
        />
        <div className="mx-auto">
          {isFetching ? <DotLoader size={24} /> : null}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["/launches/query", 1],
    await fromApi.getQueryLaunches("desc", QUERY_LIMIT, 1)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default IndexPage;
