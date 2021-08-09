import React from "react";
import ReactDom from "react-dom";
import { render, screen } from "@testing-library/react";
import ForYourInfo from "./ForYourInfo";

describe("ForYourInfo Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(
      <ForYourInfo>
        <div></div>
      </ForYourInfo>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });

  it("renders the children that are passed in", () => {
    render(
      <ForYourInfo backgroundColor="green">
        <div>Hello</div>
      </ForYourInfo>
    );
    const helloContent = screen.getByText(/Hello/i);
    expect(helloContent).toBeInTheDocument();
  });
});
