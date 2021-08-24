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
import Bordeaux from "./pages/Bordeaux/Bordeaux";
import Burgundy from "./pages/Burgundy/Burgundy";
import RhoneValley from "./pages/RhoneValley/RhoneValley";
import LoireValley from "./pages/LoireValley/LoireValley";
import "./App.css";

const App: React.FC = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/study-guide/viticulture">
        <Viticulture />
      </Route>
      <Route path="/study-guide/winemaking">
        <Winemaking />
      </Route>
      <Route path="/study-guide/usa/napa">
        <Napa />
      </Route>
      <Route path="/study-guide/usa/sonoma">
        <Sonoma />
      </Route>
      <Route path="/study-guide/usa/central-coast">
        <CentralCoast />
      </Route>
      <Route path="/study-guide/usa/pacific-northwest">
        <PacificNorthwest />
      </Route>
      <Route path="/study-guide/france/bordeaux">
        <Bordeaux />
      </Route>
      <Route path="/study-guide/france/burgundy">
        <Burgundy />
      </Route>
      <Route path="/study-guide/france/rhone-valley">
        <RhoneValley />
      </Route>
      <Route path="/study-guide/france/loire-valley">
        <LoireValley />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </div>
);

export default App;
