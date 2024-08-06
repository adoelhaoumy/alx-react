<<<<<<< HEAD
import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    const wrapper = shallow(<NotificationItem />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
  });

  it('renders correct html from  html="<u>test</u>" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ html: "<u>test</u>" });
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});

describe("onclick event behaves as it should", () => {
  it("should call console.log", () => {
    const wrapper = shallow(<NotificationItem />);
    const spy = jest.fn();

    wrapper.setProps({ value: "test item", markAsRead: spy, id: 1 });
    wrapper.find("li").props().onClick();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
=======
mport React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe("Testing <NotificationItem />", () => {
  let  wrapper;

  it("<NotificationItem /> renders without crashing", () => {
    wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
  });

  it("<NotificationItem />  renders the correct html by passing dummy type and value props,", () => {
    wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li").text()).toBe("test");
    expect(wrapper.find("li").prop("data-notification-type")).toBe("default");
  });

  it("<NotificationItem />  renders the correct html by passing a dummy html prop,", () => {
    wrapper = shallow(<NotificationItem html={{__html:"<u>test</u>"}} />);
    expect(wrapper.find("li").html()).toBe("<li data-notification-type=\"default\"><u>test</u></li>");
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
  });
});
