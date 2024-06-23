import { Switch } from "@headlessui/react";
import classNames from "classnames";
import React from "react";

const Switcher = (props: {
  enabled: boolean;
  disabled?: boolean;
  setEnabled: (value: boolean) => void;
}) => {
  return (
    <Switch
      disabled={props.disabled}
      checked={props.enabled}
      onChange={props.setEnabled}
      className={classNames(
        "group inline-flex h-5 w-9 items-center rounded-full bg-cod-gray-800 transition",
        {
          "data-[checked]:bg-blue-600": !props.disabled,
          "data-[checked]:bg-cod-gray-800": props.disabled,
        }
      )}
    >
      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-4 " />
    </Switch>
  );
};

export default Switcher;
