import React from "react";
import ReactDom from "react-dom";
import { render, screen } from "@testing-library/react";
import Content from "./Content";

describe("Content Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(
      <Content>
        <div></div>
      </Content>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });

  it("renders displays any children passed in", () => {
    render(
      <Content>
        <div>Hello</div>
      </Content>
    );
    const helloContent = screen.getByText(/Hello/i);
    expect(helloContent).toBeInTheDocument();
  });
});
