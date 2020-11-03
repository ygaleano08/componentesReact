import React from "react";

import Icon from "./Icon";

export function Sidebar(props) {
  return (
    <div className="sidebar">
      <Icon icon={props.icons[0].icon} title={props.icons[0].title} />
      <Icon icon={props.icons[1].icon} title={props.icons[1].title} />
      <Icon icon={props.icons[2].icon} title={props.icons[2].title} />
      <Icon icon={props.icons[3].icon} title={props.icons[3].title} />
    </div>
  );
}
