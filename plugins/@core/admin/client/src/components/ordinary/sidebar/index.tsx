import React from "react";
import { Link } from "react-router-dom";
import CLink from "./Link";
import {
  HomeIcon,
  GlobeAltIcon,
  ArrowUpCircleIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

const Sidebar = () => {
  return (
    <div className="bg-cod-gray-950 text-white h-full py-2 fixed w-[200px]">
      <div className="px-2 border-b border-b-cod-gray-600/20 pb-2">
        <button className="hover:bg-cod-gray-800/30 transition p-2 rounded-xl w-full text-left">
          <span className="bg-black p-1 rounded-full border border-cod-gray-400/30">
            DS
          </span>
          Admin
        </button>
      </div>
      <ul className="py-2 px-2">
        <CLink icon={HomeIcon} to="/">
          Dashboard
        </CLink>
        <CLink icon={ArrowUpCircleIcon} to="/plugins">
          Plugins
        </CLink>
        <CLink icon={UserIcon} to="/users">
          <div>
            Users
            <span className="text-[10px] pl-1 text-cod-gray-400">Admin</span>
          </div>
        </CLink>
      </ul>
    </div>
  );
};

export default Sidebar;
