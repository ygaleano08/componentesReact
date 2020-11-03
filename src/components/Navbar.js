import React from "react";

import Icon from "./Icon";
import Login from "./Login";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <Logo logo={props.logo} />
      <Searchbar />
      <Icon />
      <Icon />
      <Icon />
      <Login />
    </div>
  );
}
