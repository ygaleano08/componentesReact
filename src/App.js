import React from "react";
import "./styles.css";

import { Sidebar } from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { ThumbContainer } from "./components/Thumb-container";

import fireIcon from "./images/tendencias.png";
import homeIcon from "./images/home.png";
// import historyIcon from "./icons/iconfinder_ic_restore_48px_3669259.png";
import subscriptionsIcon from "./images/suscripcion.png";
import notificationIcon from "./images/campana.png";
// import appsIcon from "./icons/iconfinder_ic_view_module_48px_3669149.png";
// import bellIcon from "./icons/iconfinder_icon-ios7-bell_211694.png";
import youtubeLogo from "./images/logo.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: [
        {
          icon: homeIcon,
          title: "Principal"
        },
        {
          icon: fireIcon,
          title: "Tendencias"
        },
        {
          icon: subscriptionsIcon,
          title: "Suscripciones"
        },
        {
          icon: notificationIcon,
          title: "Alerta"
        }
      ],
      logo: youtubeLogo
    };
  }

  render() {
    return (
      <div className="App">
        <Sidebar icons={this.state.menuItems} />
        <Navbar logo={this.state.logo} />
        <ThumbContainer />
      </div>
    );
  }
}

export default App;
