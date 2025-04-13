"use client";

import { IAlert, IAlertContextType, TAlertVariant } from "./alert.types";
import React, { createContext, useContext, useState } from "react";

import Alert from "./Alert";

const AlertContext = createContext<IAlertContextType | null>(null);

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alert, setAlert] = useState<IAlert | null>(null);

  const showAlert = (
    variant: TAlertVariant,
    title: string,
    description: string,
    onRetry?: () => void,
    onClose?: () => void
  ) => {
    setAlert({
      isOpen: true,
      variant,
      title,
      description,
      onRetry,
      onClose: onClose ?? closeAlert,
    });
  };

  const closeAlert = () => setAlert(null);

  const value: IAlertContextType = {
    setLoadingAlert: (title, description) =>
      showAlert("loading", title || "", description || ""),
    setSuccessAlert: (title, description) =>
      showAlert("success", title || "", description || ""),
    setFailedAlert: (title, description, onRetry) =>
      showAlert("error", title || "", description || "", onRetry),
    closeAlert,
  };

  return (
    <AlertContext.Provider value={value}>
      {children}
      {alert && (
        <Alert
          isOpen={alert.isOpen}
          variant={alert.variant}
          title={alert.title}
          description={alert.description}
          onRetry={alert.onRetry}
          onClose={closeAlert}
        />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useAlert must be used within AlertProvider");
  return context;
};
