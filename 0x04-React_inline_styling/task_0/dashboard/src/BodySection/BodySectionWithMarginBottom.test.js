import React from "react";
<<<<<<< HEAD
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("BodySectionWithMarginBottom tests", () => {
  it("should apply margin bottom to child component", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);

    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).html()).toEqual('<div class="bodySection"><h2>test title</h2></div>');
=======
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe("Testing BodySectionWithMarginBottom Component",() => {
  it('checking that shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component', () => {
    let wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);
		expect(wrapper.find("BodySection").exists()).toBe(true);
    wrapper = shallow(<BodySectionWithMarginBottom title="test title"><p>test children</p></BodySectionWithMarginBottom>)
		expect(wrapper.find("BodySection").props().title).toBe('test title');
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
  });
});
