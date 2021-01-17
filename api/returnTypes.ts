export interface TResponse<TData> {
  data: TData;
}
export interface TLaunches extends TResponse<ILaunches> {}
export interface ILaunches extends Array<ILaunch> {};

export interface TLaunch extends TResponse<ILaunch> {};
export interface ILaunch {
  fairings: string | null;
  links: {
    [key: string]: {
      [key: string]: string;
    };
  };
  staticFireDateUtc: string;
  staticFireDateUnix: number;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: string[];
  details: string;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  autoUpdate: boolean;
  flightNumber: number;
  name: string;
  dateUtc: string;
  dateUnix: number;
  dateLocal: string;
  datePrecision: string;
  upcoming: boolean;
  cores: {
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landingAttempt: boolean;
    landingSuccess: boolean;
    landingType: string;
    landpad: string;
  }[];
  id: string;

}

