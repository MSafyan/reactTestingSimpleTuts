import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./../../../utils/index";
import ListItem from "./index";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should Not throw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "some text",
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example",
        desc: "Some text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("should render without error", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a title", () => {
      const title = findByTestAttr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });
    it("Should render a desc", () => {
      const desc = findByTestAttr(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });
    it("Should not Rendered", () => {
      let wrapper;
      beforeEach(() => {
        const props = {
          title: "Example",
          desc: "Some text",
        };
        wrapper = shallow(<ListItem {...props} />);
      });
      it("component is not rendered", () => {
        const component=findByTestAttr(wrapper,'listItemComponent'),
        expect(component.length).toBe(0);
      });
    });
  });
});
