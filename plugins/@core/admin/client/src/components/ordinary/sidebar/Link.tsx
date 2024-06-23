import React, { HTMLAttributes } from "react";
import { Link as RLink } from "react-router-dom";

const Link = ({
  to,
  children,
  icon,
}: {
  to: string;
  children: React.ReactNode;
  icon: React.FunctionComponent<HTMLAttributes<SVGSVGElement>>;
}) => {
  return (
    <li className="flex">
      <RLink
        className="hover:bg-cod-gray-800/30 transition p-2 rounded-xl w-full text-left flex gap-2 text-cod-gray-100 hover:text-white"
        to={to}
      >
        <span>
          {React.createElement(icon, {
            className: "w-5 h-5",
          })}
        </span>
        {children}
      </RLink>
    </li>
  );
};

export default Link;
