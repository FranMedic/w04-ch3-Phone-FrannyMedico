import Key from "../Key/Key";
import PropTypes from "prop-types";
const Keyboard = ({ numbersList, numbersKeys, deleteKeys }) => {
  return (
    <ol className="keyboard">
      {numbersList.map(({ id, text, type }) => (
        <Key
          key={id}
          text={text}
          classinfo={type}
          actionOnClick={type ? numbersKeys : deleteKeys}
        />
      ))}
      ;
    </ol>
  );
};
export default Keyboard;
Keyboard.propTypes = {
  numbersList: PropTypes.array.isRequired,
  numbersKeys: PropTypes.func.isRequired,
  deleteKeys: PropTypes.func.isRequired,
};
