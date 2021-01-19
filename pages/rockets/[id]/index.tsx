import fromApi from "@api/fromApi";
import { TRocket } from "@api/returnTypes";
import RocketDetails from "@components/SpaceX/RocketDetails/RocketDetails";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { DotLoader } from "react-spinners";

const RocketDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useQuery<TRocket>(["rocket", id], () =>
    fromApi.getOneRocket(String(id))
  );

  if (isLoading) {
    return (
      <div className="text-center mx-auto mt-24">
        <DotLoader size={32} />
      </div>
    );
  }

  return (
    <div className="">
      <span
        onClick={() => router.push("/rockets")}
        className="uppercase font-medium text-xl mb-1 cursor-pointer transition-all duration-150 hover:opacity-75"
      >
        Go Back
      </span>
      {!isLoading && data ? <RocketDetails rocket={data.data} /> : null}
    </div>
  );
};

export default RocketDetailsPage;
