import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import NavigationCard from "./NavigationCard";

describe("NavigationCard Component", () => {
  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <NavigationCard
          title="Atlas"
          extra="Study Guide | Winemaking"
          to="/atlas"
          src="../../assets/AtlasPeak.png"
          alt="Atlas Peak"
          onClick={() => {}}
        >
          Test
        </NavigationCard>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
