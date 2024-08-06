<<<<<<< HEAD
import PropTypes from "prop-types";

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

export default NotificationItemShape;
=======
import PropType from 'prop-types';

export default PropType.shape({
  id: PropType.number.isRequired,
  html: PropType.shape({__html: PropType.string}),
  type: PropType.string.isRequired,
  value: PropType.string
});
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
