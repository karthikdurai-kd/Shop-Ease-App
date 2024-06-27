const Loading = () => {
  return (
    <div
      className="spinner-border text-primary container d-flex flex-column justify-content-center align-items-center"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
