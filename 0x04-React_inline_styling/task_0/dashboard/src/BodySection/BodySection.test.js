import React from "react";
<<<<<<< HEAD
import BodySection from "./BodySection";
import { shallow } from "enzyme";

describe("BodySection tests", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists("h2")).toBe(true);
    expect(wrapper.find("h2").html()).toEqual("<h2>test title</h2>");
    expect(wrapper.exists("p")).toBe(true);
    expect(wrapper.find("p").text()).toEqual("test children node");
=======
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe("Testing BodySection Component",() => {
  it(' checking that shallowing the component should render correctly the children and one h2 element', () => {
    const wrapper = shallow(<BodySection title="test title"><p>test children node</p></BodySection> );
    const h = wrapper.find('h2').text();
    const p = wrapper.find('p').text();
    expect(h).toEqual("test title");
    expect(p).toEqual("test children node");
    expect(wrapper.containsAllMatchingElements([h, p])).toEqual(true);
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
  });
});
