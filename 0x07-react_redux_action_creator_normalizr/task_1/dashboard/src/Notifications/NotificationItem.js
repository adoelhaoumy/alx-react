import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    return (
      <li
        data-notification-type={type}
        onClick={() => markAsRead && markAsRead(id)}
        dangerouslySetInnerHTML={html ? { __html: html } : undefined}
        className={type === 'urgent' ? 'urgent' : undefined}
      >
        {!html && value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.string.isRequired, // changed to string as IDs are usually strings
};

NotificationItem.defaultProps = {
  value: '',
  html: '',
  markAsRead: null,
};

export default NotificationItem;
