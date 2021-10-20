import PropTypes from "prop-types";
const Info = ({ calling }) => {
  return (
    <span data-testid="infoId" className="message">
      {calling ? "Calling..." : ""}
    </span>
  );
};

Info.propTypes = {
  calling: PropTypes.string.isRequired,
};

export default Info;
