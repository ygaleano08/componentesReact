import React from "react";
import "./styles.css";

import { Sidebar } from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { ThumbContainer } from "./components/Thumb-container";
import homeIcon from "./images/home.png";
import fireIcon from "./images/tendencias.png";
import subscriptionsIcon from "./images/suscripciones.png";
import bibliotecaIcon from "./images/biblioteca.png";

import youtubeLogo from "./images/logo.png";
import videoIcon from "./images/video.png";

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
          icon: bibliotecaIcon,
          title: "Biblioteca"
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
