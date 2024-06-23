import classNames from "classnames";
import React, { HTMLAttributes } from "react";

const Card = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={classNames(
        "w-full h-full bg-cod-gray-900/20 rounded border-xl border-cod-gray-500/10",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default Card;
