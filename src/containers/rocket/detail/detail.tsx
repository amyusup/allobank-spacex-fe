"use client";

import Image from "@/components/element/Image";
import InfoBox from "@/components/element/InfoBox";
import UIState from "@/components/fragment/UIState";
import { mapRocket } from "@/helper/mapRocket";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useRocketContext } from "../rocket.context";

const Detail = () => {
  const {
    rockets,
    loadingDetail,
    detailRocket,
    error,
    setDetailRocket,
    setLoadingDetail,
    setError,
  } = useRocketContext();
  const { id: rocketId } = useParams();
  const found = rockets.find((r) => r.id === rocketId);

  const fetchDetailRocket = async () => {
    setLoadingDetail(true);
    setError(false);
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v4/rockets/${rocketId}`
      );
      const data = await response.json();
      const mapped = mapRocket(data);
      setDetailRocket(mapped);
    } catch {
      setDetailRocket(undefined);
      setError(true);
    } finally {
      setLoadingDetail(false);
    }
  };

  useEffect(() => {
    setLoadingDetail(true);
    if (found) {
      setDetailRocket(found);
      setLoadingDetail(false);
    } else {
      fetchDetailRocket();
    }
  }, [rockets, rocketId]);

  return (
    <UIState loading={loadingDetail} error={error} onRetry={fetchDetailRocket}>
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-blue-600">
            {detailRocket?.name}
          </h1>
          <p className="text-gray-600 text-lg">{detailRocket?.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {detailRocket?.flickrImages.map((url, i) => (
            <Image
              key={i}
              src={url || ""}
              alt={`${detailRocket?.name}-image-${i + 1}`}
              className="w-full  object-cover rounded-xl shadow-sm border mb-2 transition-transform transform hover:scale-105"
            />
          ))}

          {!detailRocket?.flickrImages.length && (
            <Image
              src={""}
              alt="no-image"
              className="w-full  object-cover rounded-xl shadow-sm border mb-2"
            />
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <InfoBox label="Country" value={detailRocket?.country || "Unknown"} />
          <InfoBox
            label="First Flight"
            value={detailRocket?.firstFlight || "Not available"}
          />
          <InfoBox
            label="Cost per Launch"
            value={
              detailRocket?.costPerLaunch
                ? `$${detailRocket?.costPerLaunch.toLocaleString()}`
                : "Unknown"
            }
          />
        </div>
      </div>
    </UIState>
  );
};

export default Detail;
