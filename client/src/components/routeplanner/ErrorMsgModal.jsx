import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ErrorMsgModal = ({
  errorMsg,
  setErrorMsg,
  showModal,
  setShowModal,
}) => {
  const handleOnClick = () => {
    setErrorMsg(null);
    return setShowModal(false);
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="show-error-msg-modal"
      show={showModal}
      centered
    >
      <Modal.Body>
        <h3 className="text-center">Invalid!</h3>
        <p className="text-center">{errorMsg}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleOnClick}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorMsgModal;
