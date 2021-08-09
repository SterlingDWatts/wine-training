import React from "react";
import ReactDOM from "react-dom";
import StudyImage from "./StudyImage";
import AtlasPeak from "../../assets/AtlasPeak.png";

describe("StudyImage Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<StudyImage src={AtlasPeak} alt="Atlas Peak" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
