import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuthContext from "../../hooks/useAuthContext";

const HttpErrorModal = ({ showHttpErrorModal, setShowHttpErrorModal }) => {
  const { logout } = useAuthContext();

  const handleOnClick = () => {
    setShowHttpErrorModal(false);
    return logout();
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="http-error-msg-modal"
      show={showHttpErrorModal?.status}
      centered
    >
      <Modal.Body>
        <h3 className="text-center">{showHttpErrorModal?.error?.statusText}</h3>
        <p className="text-center">Please try to login again.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleOnClick}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HttpErrorModal;
