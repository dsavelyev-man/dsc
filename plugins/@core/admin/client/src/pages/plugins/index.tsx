import React, { useState } from "react";
import Default from "../../components/layouts/Default";
import Card from "../../components/ui/Card";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import InputWithIcon from "../../components/ui/InputWithIcon";
import Tab from "./components/Tab";
import { DSPlugin } from "../../api/plugins";
import Item from "./components/Item";

enum Tabs {
  Installed = "installed",
  Recommended = "recommended",
}

const PluginsPage = () => {
  const [activeTab, setActiveTab] = useState({
    tab: "installed",
  });
  const [list, setList] = useState<DSPlugin[]>([
    {
      id: 1,
      name: "@core/editor",
      label: "DS Editor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      version: "0.0.1",
      picture: "/resources/antilogo.png",
      active: true,
      can_be_disabled: true,
    },
    {
      id: 2,
      name: "@core/admin",
      label: "DS Admin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      version: "0.0.1",
      picture: "/resources/antilogo.png",
      active: true,
      can_be_disabled: true,
    },
  ]);

  const setActive = (e: React.MouseEvent<HTMLDivElement>) => {
    const tab = e.currentTarget.dataset.tab as Tabs;
    setActiveTab({ tab });
  };

  //   const getList = () => {
  //     const;
  //   };

  return (
    <Default>
      <Card>
        <div className="px-8 pt-8">
          <h1 className="text-xl font-bold text-cod-gray-100">Plugins</h1>
        </div>
        <div className="pt-4 px-8">
          <InputWithIcon
            icon={MagnifyingGlassIcon}
            placeholder="Search for a plugin"
          />
        </div>
        <div className="mt-4 px-8">
          <div className="flex gap-4">
            <Tab
              onClick={setActive}
              active={activeTab.tab === Tabs.Installed}
              data-tab={Tabs.Installed}
            >
              Installed
            </Tab>
            <Tab
              onClick={setActive}
              active={activeTab.tab === Tabs.Recommended}
              data-tab={Tabs.Recommended}
            >
              Recommended
            </Tab>
          </div>
        </div>
        <div className="px-8 mt-4 grid grid-cols-[repeat(3,minmax(400px,1fr))] gap-4">
          {list.map((item) => (
            <Item plugin={item} key={item.id} />
          ))}
        </div>
      </Card>
    </Default>
  );
};

export default PluginsPage;
