import classNames from "classnames";
import React, { HTMLAttributes, InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={classNames(
        "bg-cod-gray-900/50 rounded-xl outline-none text-cod-gray-100 py-2 px-1 font-inter border border-cod-gray-400/20",
        props.className
      )}
    />
  );
};

export default Input;
