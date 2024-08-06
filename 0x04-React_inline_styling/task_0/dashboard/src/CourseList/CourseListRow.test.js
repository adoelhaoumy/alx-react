<<<<<<< HEAD
import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);

    expect(wrapper.find("tr").children()).toHaveLength(1);
    expect(wrapper.find("tr").childAt(0).html()).toEqual('<th style="background-color:#deb5b545" colSpan="2">test</th>');
  });

  it("should render two cells when textSecondCell not null", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);

    expect(wrapper.find("tr").children()).toHaveLength(2);
    expect(wrapper.find("tr").childAt(0).html()).toEqual("<td>test</td>");
    expect(wrapper.find("tr").childAt(1).html()).toEqual("<td>test</td>");
=======
mport React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("Testing <CourseListRow />", () => {
  it("When isHeader is true test the component renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    let wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first cell test"/>);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    expect(wrapper.find('th').text()).toEqual('first cell test');
  });

  it("When isHeader is true test the component renders two cells when textSecondCell is present", () => {
    let wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first cell test" textSecondCell="second cell test"/>);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toEqual('first cell test');
    expect(wrapper.find('th').at(1).text()).toEqual('second cell test');
  });

  it("When isHeader is false test the component renders correctly two td elements within a tr element", () => {
    let wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="first cell test" textSecondCell="second cell test"/>);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('first cell test');
    expect(wrapper.find('td').at(1).text()).toEqual('second cell test');
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
  });
});
