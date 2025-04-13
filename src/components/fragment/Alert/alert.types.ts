export type TAlertVariant = "loading" | "success" | "error";

export interface IAlert {
  isOpen: boolean;
  onClose: () => void;
  variant: TAlertVariant;
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export const defaultTitleMap = {
  loading: "Loading...",
  success: "Success!",
  error: "An Error Occurred",
};

export const defaultDescMap = {
  loading: "Please wait while we process your request.",
  success: "Your request was completed successfully.",
  error: "We encountered a problem. Please try again.",
};

export interface IAlertContextType {
  setLoadingAlert: (title?: string, description?: string) => void;
  setSuccessAlert: (title?: string, description?: string) => void;
  setFailedAlert: (
    title?: string,
    description?: string,
    onRetry?: () => void
  ) => void;
  closeAlert: () => void;
}
