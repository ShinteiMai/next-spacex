import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { GetServerSideProps } from "next";
import { QueryClient } from "react-query";
import fromApi from "@api/fromApi";
import { prefetchQuery, useQueryWrapper } from "@api/query";
import { dehydrate } from "react-query/hydration";
import { TLaunches } from "@api/returnTypes";
import { DotLoader } from "react-spinners";

const IndexPage = () => {
  const { data, isLoading } = useQueryWrapper<TLaunches>(
    "launches",
    fromApi.getLaunches
  );
  return (
    <div className="mt-24">
      <div className="flex mx-auto items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-accents-2">
          next-tailwind-boilerplate
        </h1>
        <div className="ml-4">
          <SiGithub size={32} />
        </div>
      </div>

      <p className="mt-3 text-sm text-center text-accents-1">
        A battery-packaged boilerplate for Next.js + Tailwind integrated with
        TypeScript support and full unit & integration testing modules such as
        react-testing-library and Cypress.
      </p>

      <div className="mx-auto mt-8 flex justify-around items-center max-w-sm">
        <Image src="/images/react.png" width={50} height={50} />
        <Image src="/images/tailwind.png" width={50} height={35} />
        <Image src="/images/typescript.png" width={50} height={50} />
      </div>
      {!isLoading && !!data ? (
        data.data.map((launch) => (
          <div className="mb-2 shadow-lg px-8 py-2 transform hover:-translate-y-2 transition-all duration-150">
            {launch.links.patch.small && (
              <img
                src={launch.links.patch.small}
                width={75}
                height={75}
                alt={launch.name || "launch"}
              />
            )}
            <h1 className="text-lg text-accents-2">{launch.name}</h1>
            <p className="text-sm text-accents-1">{launch.details}</p>
          </div>
        ))
      ) : (
        <div className="mx-auto text-center flex items-center justify-center mt-8">
          <DotLoader color="#64FFDA"  />
        </div>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await prefetchQuery(queryClient, "launches", fromApi.getLaunches());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default IndexPage;
