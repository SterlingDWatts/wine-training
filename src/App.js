import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Viticulture from "./pages/Viticulture/Viticulture";
import Winemaking from "./pages/Winemaking/Winemaking";
import Napa from "./pages/Napa/Napa";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Sonoma from "./pages/Sonoma/Sonoma";

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route path="/viticulture">
        <Viticulture />
      </Route>
      <Route path="/winemaking">
        <Winemaking />
      </Route>
      <Route path="/napa">
        <Napa />
      </Route>
      <Route path="/sonoma">
        <Sonoma />
      </Route>
      <Route path="/" exact>
        <Landing />
      </Route>
    </Switch>
  </div>
);

export default App;
