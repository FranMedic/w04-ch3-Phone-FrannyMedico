import PropTypes from "prop-types";
const Key = ({ text, classinfo, actionOnClick }) => {
  return (
    <li>
      <button className={classinfo ? "key" : "big key"} onClick={actionOnClick}>
        {text}
      </button>
    </li>
  );
};
Key.propTypes = {
  text: PropTypes.string.isRequired,
  classinfo: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
};

export default Key;
