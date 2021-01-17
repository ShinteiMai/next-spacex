import humps from "lodash-humps-ts";

export const camelcaseObject = (object: { [key: string]: any }) =>
  humps(object);
