export interface TResponse<TData> {
  data: TData;
}

export interface TQueryResponse<TData> {
  docs: TData;
  page: number;
  nextPage: number;
  hasNextPage: boolean;
}

export interface TQueryLaunches extends TResponse<TQueryResponse<ILaunches>> {}
export interface TLaunches extends TResponse<ILaunches> {}
export interface ILaunches extends Array<ILaunch> {}

export interface TLaunch extends TResponse<ILaunch> {}
export interface ILaunch {
  fairings: string | null;
  links: {
    [key: string]: any;
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

export interface TLaunchpad extends TResponse<ILaunchpad> {}
export interface ILaunchpad {
  name: string;
  fullName: string;
  locality: string;
  region: string;
  timezone: string;
  latitude: number;
  longitude: number;
  launchAttempts: number;
  launchSuccesses: number;
  rockets: string[];
  launches: string[];
  status: boolean;
  id: string;
}
export interface TRockets extends TResponse<IRocket[]> {}
export interface TRocket extends TResponse<IRocket> {}
export interface IRocket {
  height: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
  firstStage: {
    thrustSeaLevel: {
      kN: number;
      lbf: number;
    };
    thrustVacuum: {
      kN: number;
      lbf: number;
    };
    reusable: boolean;
    engines: number;
    fuelAmountTons: 1155;
    burnTimeSec: number;
  };
  secondStage: {
    thrust: {
      kN: number;
      lbf: number;
    };
    payloads: {
      compositeFairing: {
        height: {
          meters: number;
          feet: number;
        };
        diameter: {
          meters: number;
          feet: number;
        };
      };
      option1: string;
    };
    reusable: boolean;
    engines: number;
    fuelAmountTons: number;
    burnTimeSec: number;
  };
  engines: {
    isp: {
      seaLevel: number;
      vacuum: number;
    };
    thrustSeaLevel: {
      kN: number;
      lbf: number;
    };
    thrustVacuum: {
      kN: number;
      lbf: number;
    };
    number: number;
    type: string;
    version: string;
    layout: string;
    engineLossMax: string;
    propellant1: string;
    propellant2: string;
    thrustToWeight: string;
  };
  landingLegs: {
    number: number;
    material: string;
  };
  payloadWeights: {
    id: string;
    name: string;
    kg: number;
    lb: number;
  }[];
  flickrImages: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  costPerLaunch: number;
  successRatePct: number;
  firstFlight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
}
