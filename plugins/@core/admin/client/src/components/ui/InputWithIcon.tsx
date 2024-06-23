import classNames from "classnames";
import React, { HTMLAttributes, InputHTMLAttributes } from "react";
import Input from "./Input";

const InputWithIcon = (
  props: InputHTMLAttributes<HTMLInputElement> & {
    icon: React.FunctionComponent<HTMLAttributes<SVGSVGElement>>;
  }
) => {
  const { icon, ...inputProps } = props;
  return (
    <div className="flex items-center gap-2 relative">
      {React.createElement(icon, {
        className: "w-4 h-4 text-cod-gray-400 absolute left-2",
      })}
      <Input {...inputProps} className="pl-8" />
    </div>
  );
};

export default InputWithIcon;
