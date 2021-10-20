const Info = ({ calling }) => {
  return (
    <span data-testid="infoId" className="message">
      {calling ? "Calling..." : ""}
    </span>
  );
};

export default Info;
