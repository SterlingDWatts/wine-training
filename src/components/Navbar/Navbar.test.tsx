import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
