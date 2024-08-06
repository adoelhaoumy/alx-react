<<<<<<< HEAD
import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper).toBeDefined();
  });

  it("renders correct list items", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find("ul").children()).toHaveLength(listNotifications.length);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
    expect(wrapper.find("ul").childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
    expect(wrapper.find("ul").childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
    expect(wrapper.find("ul").childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
  });

  it("renders an unordered list", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it("renders correct text", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(false);
  });

  it("displays menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(true);
    expect(wrapper.find("div.menuItem").html()).toEqual('<div class="menuItem"><p>Your notifications</p></div>');
  });

  it("does not display notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("div.Notifications").exists()).toBe(false);
  });

  it("does not display menuItem when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(true);
  });

  it("displays Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find("div.Notifications").exists()).toBe(true);
  });

  it("renders correctly when listCourses is not passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  it("renders correctly when empty array is passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  it("renders correctly when listNotifications is passed and with the right number of notifications", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it('renders "No new notifications for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);

    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });

  it("doesnt re-render when the list passed as prop is the same", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

    expect(wrapper.instance().shouldComponentUpdate(listNotifications)).toBe(false);
  });

  it("re-renders if listNotifications if listNotifications is changed", () => {
    const newListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "default", html: getLatestNotification() },
      { id: 4, type: "default", value: "Foo" },
    ];

    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

    expect(wrapper.instance().shouldComponentUpdate(newListNotifications)).toBe(true);
  });
});

describe("onclick event behaves as it should", () => {
  it("should call console.log", () => {
    const wrapper = shallow(<Notifications />);
    const spy = jest.spyOn(console, "log").mockImplementation();

    wrapper.instance().markAsRead = spy;
    wrapper.instance().markAsRead(1);
    expect(wrapper.instance().markAsRead).toBeCalledWith(1);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
=======
mport React from 'react';
import { jest } from '@jest/globals';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

describe("Testing the <Notifications /> Component", () => {
  
  let wrapper;
  const listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("<Notifications /> is rendered without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("<Notifications /> renders NotificationItems", () => {
    wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('NotificationItem')).not.toHaveLength(0);
  });

  it("<Notifications /> render the text 'Here is the list of notifications'", () => {
    wrapper.setProps({displayDrawer: true, listNotifications: [{id: 1, value: "New course available", type: "default"}]});
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
  });

  it("verify that the first NotificationItem element renders the right html", () => {
    wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find("NotificationItem").first().html()).toEqual('<li data-notification-type=\"default\">No new notification for now</li>');
  });

  it("verify that Notifications renders correctly if you dont pass the listNotifications property or if you pass an empty array", () => {
    wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find("NotificationItem").first().html()).toEqual('<li data-notification-type=\"default\">No new notification for now</li>');
    wrapper.setProps({displayDrawer: true, listNotifications: []});
    expect(wrapper.find("NotificationItem").first().html()).toEqual('<li data-notification-type=\"default\">No new notification for now</li>');
  });

  it("verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is", () => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
    expect(wrapper.find("NotificationItem").first().html()).toEqual('<li data-notification-type=\"default\">No new notification for now</li>');
    expect(wrapper.findWhere((node)=>{return node.text() === "Here is the list of notifications"})).toHaveLength(0);
  });

  it("menu item is being displayed when displayDrawer is false", () => {
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });
});

describe("Testing <Notification displayDrawer={true}/> ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true}/>);
  });

  it("menu item is being displayed when displayDrawer is true", () => {
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });
});

describe("Testing <Notification displayDrawer={true} listNotifications={[...]}/> ", () => {
  let wrapper;
  const listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
  });

  it("verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
    expect(wrapper.find("NotificationItem").first().props().value).toEqual('New course available');
  });
});

describe("Testing markAsRead method in the notification class Component", () => {
  it("Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
    const listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    console.log = jest.fn();
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    const mock = jest.spyOn(console, 'log');
    const noti = wrapper.find('li').first();
    noti.simulate('click');
    expect(mock).toBeCalledWith("Notification 1 has been marked as read");
    mock.mockRestore();
    jest.restoreAllMocks();
  });
});

describe("Testing the notification class Component re-rendering", () => {
  it("verify that when updating the props of the component with the same list, the component doesnt rerender", () => {
    const listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    const listNotifications2 = [
      {id: 1, value: "New course available changed", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    console.log = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    wrapper.setProps({listNotifications: listNotifications});
    expect(wrapper.find('NotificationItem').length).toBe(3);
    expect(wrapper.find('NotificationItem').first().props().value).toEqual("New course available");
  });

  it("verify that when updating the props of the component with a longer list, the component does rerender", () => {
    const listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    const listNotifications2 = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New course available2", type: "default"},
      {id: 3, value: "New resume available", type: "urgent"},
      {id: 4, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    console.log = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    wrapper.setProps({listNotifications: listNotifications2});
    expect(wrapper.find("NotificationItem").at(1).props().value).toEqual("New course available2");
    expect(wrapper.find("NotificationItem").length).toBe(4);
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
  });
});
