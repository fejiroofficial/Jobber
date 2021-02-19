import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import logo from "./assets/logo.svg";
import menu from "./assets/menu-icon.svg";
import briefcase from "./assets/briefcase.svg";
import "antd/dist/antd.css";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="nav">
          <img className="burger-menu" src={menu} alt=""/>
          <img className="logo" src={logo} alt="" />
          <div className="nav-item">
            <img src={briefcase} alt="" />
            <span>Jobs</span>
          </div>
        </div>
        <div className="main">
          <Route path="/" component={Home} exact />
        </div>
      </div>
    </Router>
  );
}

export default App;
