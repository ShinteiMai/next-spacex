import { HTTP_METHODS } from "@utils/types";
import { createApiRequest } from "./axios";

export type SortOrder = "asc" | "desc";
class ApiCallCreator {
  async getLaunches() {
    return createApiRequest("/launches", HTTP_METHODS.GET, {});
  }

  async getOneLaunches(id: string) {
    return createApiRequest(`/launches/${id}`, HTTP_METHODS.GET, {});
  }

  async getQueryLaunches(sort: SortOrder, limit: number, page: number) {
    return createApiRequest("/launches/query", HTTP_METHODS.POST, {
      query: {},
      options: {
        page,
        limit,
        sort: {
          date_utc: sort,
        },
      },
    });
  }

  async getUpcomingLaunches() {
    return createApiRequest("/launches/upcoming", HTTP_METHODS.GET, {});
  }

  async getOneLaunchpad(id: string) {
    return createApiRequest(`/launchpads/${id}`, HTTP_METHODS.GET, {});
  }

  async getRockets() {
    return createApiRequest("/rockets", HTTP_METHODS.GET, {});
  }

  async getOneRocket(id: string) {
    return createApiRequest(`/rockets/${id}`, HTTP_METHODS.GET, {});
  }
}

const fromApi = new ApiCallCreator();
export default fromApi;
