import { HTTP_METHODS } from "@utils/types";
import { createApiRequest } from "./axios";

export type Endpoints = "launches";
export type ResponseObject = [any, Endpoints];

class ApiCallCreator {
  async getLaunches() {
    return createApiRequest(`/launches`, HTTP_METHODS.GET, {});
  }
}

const fromApi = new ApiCallCreator();
export default fromApi;
