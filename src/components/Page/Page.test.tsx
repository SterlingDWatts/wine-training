import React from "react";
import ReactDOM from "react-dom";
import Page from "./Page";

describe("Page Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Page className="Test">
        <div></div>
      </Page>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
