import PropTypes from "prop-types";
import Action from "./Action/Action";
const Actions = (calling, isDisabled) => {
  return (
    <>
      {calling ? (
        <Action text="Hang" className="hang" isDisabled={isDisabled} hangFunc />
      ) : (
        <Action
          text="Call"
          className="call"
          isDisabled={isDisabled}
          callingFunc
        />
      )}
    </>
  );
};
export default Actions;
Actions.propTypes = {
  calling: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};
