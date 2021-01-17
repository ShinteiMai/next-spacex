import fromApi from "@api/fromApi";
import { TRockets } from "@api/returnTypes";
import RocketCard from "@components/SpaceX/RocketCard/RocketCard";
import { GetServerSideProps } from "next";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

const RocketsPage = () => {
  const { data } = useQuery<TRockets>("rockets", fromApi.getRockets);
  return (
    <div className="pb-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 md:gap-x-3 lg:gap-x-6 gap-y-6">
        {data?.data.map((rocket) => (
          <RocketCard key={rocket.id} rocket={rocket} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["/rockets"], await fromApi.getRockets());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default RocketsPage;
