import Alert from "react-bootstrap/Alert";

const ErrorBox = ({ error }) => {
  return (
    <Alert variant="danger" className="text-center fw-bold">
      {error}
    </Alert>
  );
};

export default ErrorBox;
