import Key from "../Key/Key";
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
