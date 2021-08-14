import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Viticulture from "./pages/Viticulture/Viticulture";
import Winemaking from "./pages/Winemaking/Winemaking";
import Napa from "./pages/Napa/Napa";
import Sonoma from "./pages/Sonoma/Sonoma";
import CentralCoast from "./pages/CentralCoast/CentralCoast";
import PacificNorthwest from "./pages/PacificNorthwest/PacificNorthwest";
import "./App.css";

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
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
      <Route path="/central-coast">
        <CentralCoast />
      </Route>
      <Route path="/pacific-northwest">
        <PacificNorthwest />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </div>
);

export default App;
