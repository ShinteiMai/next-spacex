import { AxiosResponse } from "axios";
import { QueryClient, useQuery } from "react-query";
import { Endpoints } from "./fromApi";

export const prefetchQuery = async (
  queryClient: QueryClient,
  endpoint: Endpoints,
  apiCall: Promise<AxiosResponse<any>>
): Promise<void> => {
  await queryClient.prefetchQuery(endpoint,  apiCall as any);
};

export const useQueryWrapper = <T extends unknown>(
  endpoint: Endpoints,
  apiCall:  () => Promise<AxiosResponse<any>>
) => {
  return useQuery<T>(endpoint, apiCall as any);
};
