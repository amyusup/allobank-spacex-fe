"use client";

import { ReactNode, createContext, useContext, useState } from "react";

import { IRocket } from "@/containers/rocket/rocket.types";

interface IRocketContextType {
  rockets: IRocket[];
  detailRocket?: IRocket;
  loading: boolean;
  loadingDetail: boolean;
  error: boolean;
  setRockets: (rocket: IRocket[]) => void;
  setLoading: (loading: boolean) => void;
  setDetailRocket: (rocket: IRocket | undefined) => void;
  setLoadingDetail: (loading: boolean) => void;
  setError: (error: boolean) => void;
}

const RocketContext = createContext<IRocketContextType | undefined>(undefined);

export const RocketProvider = ({ children }: { children: ReactNode }) => {
  const [rockets, setRockets] = useState<IRocket[]>([]);
  const [detailRocket, setDetailRocket] = useState<IRocket | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingDetail, setLoadingDetail] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  return (
    <RocketContext.Provider
      value={{
        rockets,
        detailRocket,
        loading,
        loadingDetail,
        error,
        setRockets,
        setLoading,
        setLoadingDetail,
        setDetailRocket,
        setError,
      }}
    >
      {children}
    </RocketContext.Provider>
  );
};

export const useRocketContext = () => {
  const context = useContext(RocketContext);
  if (!context) {
    throw new Error("useRocketContext must be used within a RocketProvider");
  }
  return context as IRocketContextType;
};
