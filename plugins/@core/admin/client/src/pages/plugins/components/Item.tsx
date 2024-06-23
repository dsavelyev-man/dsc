import React, { useState } from "react";
import { DSPlugin } from "../../../api/plugins";
import Card from "../../../components/ui/Card";
import Switcher from "../../../components/ui/Switcher";

const Item = (props: { plugin: DSPlugin }) => {
  const [disabled, setDisabled] = useState(props.plugin.active);

  return (
    <Card className="p-2">
      <div className="flex gap-2">
        <div className="flex justify-between gap-2">
          <img
            src={props.plugin.picture}
            height={50}
            width={50}
            className="rounded-full"
          />
          <div>
            <h2 className="text-cod-gray-100">{props.plugin.label}</h2>
            <p className="text-cod-gray-400/80 text-[0.8rem]">
              {props.plugin.name}
            </p>
          </div>
        </div>
        <div className="ml-auto">
          <p className="text-cod-gray-400/80">{props.plugin.version}</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-cod-gray-100/80">{props.plugin.description}</p>
      </div>
      <div className="flex justify-end">
        <Switcher
          disabled={!props.plugin.can_be_disabled}
          enabled={disabled}
          setEnabled={setDisabled}
        />
      </div>
    </Card>
  );
};

export default Item;
