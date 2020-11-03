import React from "react";

export default function Logo(props) {
  return (
    <div className="icon">
      <img src={props.logo} alt="logo" />
    </div>
  );
}
