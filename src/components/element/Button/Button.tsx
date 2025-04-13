"use client";

import { classFushion } from "@/helper/classFushion";
import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none focus:outline-none hover:ring-2 hover:ring-blue-600",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline:
          "border border-blue-600  bg-transparent text-blue-600 hover:bg-blue-700 hover:text-white",
        danger: "bg-red-500 text-white hover:bg-red-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  variant?: "default" | "outline" | "danger";
  size?: "default" | "sm" | "lg";
}

const Button = ({ className, variant, size, ...props }: IButtonProps) => {
  return (
    <button
      className={classFushion(buttonStyles({ variant, size }), className)}
      {...props}
    />
  );
};

export default Button;
