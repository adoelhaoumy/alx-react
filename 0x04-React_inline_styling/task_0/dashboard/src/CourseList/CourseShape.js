<<<<<<< HEAD
import PropTypes from "prop-types";

const CourseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
});

export default CourseShape;
=======
mport PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired
}
);
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
