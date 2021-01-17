import fromApi from "@api/fromApi";
import { TLaunch } from "@api/returnTypes";
import { LaunchDetails } from "@components/SpaceX";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { DotLoader } from "react-spinners";

const LaunchDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useQuery<TLaunch>(["launch", id], () =>
    fromApi.getOneLaunches(String(id))
  );

  return (
    <div className="mt-3">
      <p
        onClick={() => router.push("/")}
        className="uppercase font-medium text-xl mb-1 cursor-pointer transition-all duration-150 hover:opacity-75"
      >
        Go Back
      </p>
      {!isLoading && data ? (
        <LaunchDetails launch={data.data} />
      ) : (
        <DotLoader />
      )}
    </div>
  );
};
export default LaunchDetailsPage;
