import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAtttribute } from "../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors ", () => {
    const wrapper = findByTestAtttribute(component, "HeaderComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should render a logo", () => {
    const logo = findByTestAtttribute(component, "LogoIMG");
    expect(logo.length).toBe(1);
  });
});
