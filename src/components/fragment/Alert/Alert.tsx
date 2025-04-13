"use client";

import {
  IAlert,
  TAlertVariant,
  defaultDescMap,
  defaultTitleMap,
} from "./alert.types";
import React, { JSX } from "react";

import Button from "@/components/element/Button";
import Error from "@/components/svg/Error";
import Loading from "@/components/svg/Loading";
import Modal from "@/components/element/Modal";
import Success from "@/components/svg/Success";

const iconMap: Record<TAlertVariant, JSX.Element> = {
  loading: <Loading />,
  success: <Success />,
  error: <Error />,
};

const Alert: React.FC<IAlert> = ({
  isOpen,
  onClose,
  variant,
  title,
  description,
  onRetry,
}) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="flex items-center justify-center mb-4">
        {iconMap[variant]}
      </div>
      <h2
        className={`text-xl font-semibold text-center ${
          variant === "success"
            ? "text-green-600"
            : variant === "error"
            ? "text-red-600"
            : "text-blue-600"
        }`}
      >
        {title || defaultTitleMap[variant]}
      </h2>
      <p className="text-gray-600 text-center mt-2">
        {description || defaultDescMap[variant]}
      </p>

      <div className="mt-4 space-y-2">
        {variant === "error" && onRetry && (
          <Button variant="danger" className="w-full" onClick={onRetry}>
            Try Again
          </Button>
        )}
        {variant !== "loading" && (
          <Button className="w-full" onClick={onClose}>
            Close
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default Alert;
