export interface IRocket {
  id: string;
  name: string;
  description: string;
  flickrImages: string[];
  costPerLaunch?: number;
  country?: string;
  firstFlight?: string;
}

export interface IRocketApiResponse {
  id: string;
  name: string;
  description: string;
  flickr_images: string[];
  cost_per_launch?: number;
  country?: string;
  first_flight?: string;
}

export const defaultRocket: IRocket = {
  id: "",
  name: "",
  description: "",
  flickrImages: [],
  costPerLaunch: 0,
  country: "",
  firstFlight: "",
};
