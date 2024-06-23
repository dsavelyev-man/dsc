import classNames from "classnames";
import React, { HTMLAttributes, PropsWithChildren } from "react";

const Tab = (
  props: HTMLAttributes<HTMLDivElement> & {
    active: boolean;
  }
) => {
  const { active, ...rest } = props;

  return (
    <div
      {...rest}
      className={classNames(
        "text-cod-gray-100/80 hover:bg-cod-gray-800/30 transition p-2 rounded-xl cursor-pointer hover:text-white",
        {
          "bg-cod-gray-800/30": active,
        }
      )}
    >
      {props.children}
    </div>
  );
};

export default Tab;
