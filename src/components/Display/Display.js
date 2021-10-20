import PropTypes from "prop-types";
const Display = ({ numberString }) => {
  return (
    <span data-testid="displayid" className="number">
      {numberString}
    </span>
  );
};

Display.propTypes = {
  numberString: PropTypes.string.isRequired,
};

export default Display;
