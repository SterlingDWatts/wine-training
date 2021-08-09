import React from "react";
import ReactDOM from "react-dom";
import SideNav from "./SideNav";

describe("SideNav Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <SideNav header="test">
        <div></div>
      </SideNav>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
