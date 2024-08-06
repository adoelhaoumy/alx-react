import React from "react";
import PropTypes from "prop-types";

<<<<<<< HEAD
const rowStyle = {
  backgroundColor: "#f5f5f5ab",
};

const headerStyle = {
  backgroundColor: "#deb5b545",
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={headerStyle} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th style={headerStyle}>{textFirstCell}</th>
            <th style={headerStyle}>{textSecondCell}</th>
=======
function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const headerStyle = { backgroundColor: "#deb5b545" };
  const rowStyle = { backgroundColor: "#f5f5f5ab" };
  const selectedStyle = isHeader ? headerStyle : rowStyle;

  return (
    <tr style={selectedStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

<<<<<<< HEAD
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

=======
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

<<<<<<< HEAD
=======
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
export default CourseListRow;
