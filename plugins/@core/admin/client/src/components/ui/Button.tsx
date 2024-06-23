import React from "react";
import classNames from "classnames";
import { VariantProps, cva } from "class-variance-authority";

const button = cva("px-4 py-2 rounded-xl border transition", {
  variants: {
    color: {
      default:
        "bg-cod-gray-600 border-cod-gray-500 text-cod-gray-100 hover:bg-cod-gray-500 focus:bg-cod-gray-500",
      primary:
        "bg-blue-600 border-blue-500 text-blue-100 hover:bg-blue-500 focus:bg-blue-500",
    },
  },

  defaultVariants: {
    color: "default",
  },
});

export type ButtonProps = VariantProps<typeof button> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, color, ...props }: ButtonProps) => {
  return (
    <button className={classNames(button({ color }), className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
