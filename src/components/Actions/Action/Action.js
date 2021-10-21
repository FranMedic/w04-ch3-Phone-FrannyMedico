import PropTypes from "prop-types";
const Action = ({ text, className, callingFunc, hangFunc, isDisabled }) => {
  const callFunction = (event) => {
    event.preventDefault();
    callingFunc();
  };

  const hangFunction = (event) => {
    event.preventDefault();
    hangFunc();
  };

  return (
    <a
      href="action"
      onClick={
        text === "Call"
          ? (event) => callFunction(event)
          : (event) => hangFunction(event)
      }
      className={className + (isDisabled ? "" : " active")}
    >
      {text}
    </a>
  );
};

Action.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Action;
