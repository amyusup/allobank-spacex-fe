import { IRocket, IRocketApiResponse } from "@/containers/rocket/rocket.types";

export const mapRocket = (rocket: IRocketApiResponse): IRocket => {
  return {
    id: rocket.id,
    name: rocket.name,
    description: rocket.description,
    flickrImages: rocket.flickr_images,
    costPerLaunch: rocket.cost_per_launch,
    country: rocket.country,
    firstFlight: rocket.first_flight,
  };
};

export const mapRockets = (rockets: IRocketApiResponse[]): IRocket[] => {
  return rockets.map(mapRocket);
};
