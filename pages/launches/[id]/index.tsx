import fromApi from "@api/fromApi";
import { TLaunch } from "@api/returnTypes";
import { LaunchDetails } from "@components/SpaceX";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { DotLoader } from "react-spinners";

const LaunchDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useQuery<TLaunch>(["launch", id], () =>
    fromApi.getOneLaunches(String(id))
  );

  if (isLoading) {
    return (
      <div className="text-center mx-auto mt-24">
        <DotLoader size={32} />
      </div>
    );
  }

  return (
    <div className="mt-3">
      <span
        onClick={() => router.push("/")}
        className="uppercase font-medium text-xl mb-1 cursor-pointer transition-all duration-150 hover:opacity-75"
      >
        Go Back
      </span>
      {!isLoading && data ? (
        <LaunchDetails launch={data.data} />
      ) : (
        <DotLoader />
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["/launches", id],
    await fromApi.getOneLaunches(String(id))
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default LaunchDetailsPage;
