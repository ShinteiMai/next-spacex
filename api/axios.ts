import { camelcaseObject } from "@utils/camelcaseObject";
import { HTTP_METHODS } from "@utils/types";
import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.spacexdata.com/v4"
});

export const createApiRequest = async (
  url: string,
  method: HTTP_METHODS,
  data: any
) => {
  try {
    const response = await axios({
      url,
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data,
    });
    return camelcaseObject(response);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export default axios;