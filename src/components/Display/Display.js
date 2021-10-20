import PropTypes from "prop-types";
const Display = ({ numberString }) => {
  return <span className="number">{numberString}</span>;
};

Display.propTypes = {
  numberString: PropTypes.string.isRequired,
};
