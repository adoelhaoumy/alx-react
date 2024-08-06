<<<<<<< HEAD
import PropTypes from "prop-types";
import React, { Component } from "react";
=======
import React, { Component } from 'react'
import PropTypes from 'prop-types';
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4

class BodySection extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="bodySection">
=======
      <div className='bodySection'>
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

<<<<<<< HEAD
BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
=======
BodySection. defaultProps = {
	children: <React.Fragment />
};

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
};

export default BodySection;
