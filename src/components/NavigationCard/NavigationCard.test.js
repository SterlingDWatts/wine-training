import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import NavigationCard from "./NavigationCard";
import AtlasPeak from "../../assets/AtlasPeak.png";

describe("NavigationCard Component", () => {
  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <NavigationCard to="/atlas" src={AtlasPeak} alt="Atlas Peak">
          Test
        </NavigationCard>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
