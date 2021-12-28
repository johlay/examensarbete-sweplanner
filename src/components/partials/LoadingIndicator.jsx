import SyncLoader from "react-spinners/SyncLoader";

const LoadingIndicator = () => {
  return (
    <div className="text-center">
      <SyncLoader color={"#FFF"} size={12} />
    </div>
  );
};

export default LoadingIndicator;
