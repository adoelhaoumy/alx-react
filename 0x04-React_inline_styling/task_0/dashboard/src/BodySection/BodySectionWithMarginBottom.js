<<<<<<< HEAD
import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";
=======
mport React, { Component } from 'react'
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';
import PropTypes from 'prop-types';
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
=======
      <div className='bodySectionWithMargin'>
        <BodySection {...this.props}/>
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
      </div>
    );
  }
}

<<<<<<< HEAD
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
=======
BodySectionWithMarginBottom. defaultProps = {
	children: <React.Fragment />
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
};

export default BodySectionWithMarginBottom;
