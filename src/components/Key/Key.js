import PropTypes from "prop-types";
const Key = ({ text, actionOnClick }) => {
  return (
    <li>
      <button className="key" onClick={actionOnClick}>
        {text}
      </button>
    </li>
  );
};
Key.propTypes = {
  text: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
};

export default Key;
