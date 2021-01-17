import { AxiosResponse } from "axios";
import { QueryClient, useInfiniteQuery, useQuery } from "react-query";

export const prefetchQuery = async (
  queryClient: QueryClient,
  endpoint: any,
  apiCall: Promise<AxiosResponse<any>>
): Promise<void> => {
  await queryClient.prefetchQuery(endpoint, apiCall as any);
};

export const useQueryWrapper = <T extends unknown>(
  endpoint: any,
  apiCall: () => Promise<AxiosResponse<any>>,
  options?: { [key: string]: any }
) => {
  return useQuery<T>(endpoint, apiCall as any, options);
};

export const useInfiniteQueryWrapper = <T extends unknown>(
  endpoint: any,
  apiCall: any,
  options?: { [key: string]: any }
) => {
  return useInfiniteQuery<T>(endpoint, apiCall as any, options);
};
