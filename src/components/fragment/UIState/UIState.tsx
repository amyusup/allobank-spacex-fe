"use client";

import { useEffect, useState } from "react";

import Button from "@/components/element/Button";
import Error from "../../svg/Error";
import Loading from "../../svg/Loading";

interface IUIStateProps {
  loading: boolean;
  error: boolean;
  onRetry: () => void;
  children: React.ReactNode;
}

const UIState = ({ loading, error, onRetry, children }: IUIStateProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!loading && !error) {
      const timeout = setTimeout(() => setShowContent(true), 50);
      return () => clearTimeout(timeout);
    } else {
      setShowContent(false);
    }
  }, [loading, error]);

  return (
    <div className="relative min-h-[50vh]">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100">
          <div className="rounded-lg p-6 max-w-sm w-full text-center">
            <div className="flex items-center justify-center mb-4">
              <Loading />
            </div>
            <h2 className="text-xl font-semibold text-blue-600">Loading...</h2>
            <p className="text-gray-600 mt-2">
              Please wait while we process your request.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100">
          <div className="shadow-md rounded-lg p-6 max-w-sm w-full">
            <div className="flex items-center justify-center mb-4">
              <Error />
            </div>
            <h2 className="text-xl font-semibold text-center text-red-600">
              An Error Occurred
            </h2>
            <p className="text-gray-600 text-center mt-2">
              We encountered a problem while processing your request. Please try
              again later.
            </p>
            <div className="mt-4">
              <Button variant="danger" className="w-full" onClick={onRetry}>
                Try Again
              </Button>
            </div>
          </div>
        </div>
      )}

      <div
        className={`transition-all duration-500 ease-in-out transform ${
          showContent
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default UIState;
