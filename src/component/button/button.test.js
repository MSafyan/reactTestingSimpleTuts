import React from "react";
import { findByTestAttr, checkProps } from "./../../../utils/index";
import SharedButton from "./index";
import { shallow } from "enzyme";

describe("SharedButton Component", () => {
  describe("Checking Proptypes", () => {
    it("Should Not Throw a warning", () => {
      const expectedProps = {
        buttonText: "Example Button text",
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example button Text",
        emitEvent: () => {},
      };
      wrapper = shallow(<SharedButton />);
    });
    it("Should Render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
