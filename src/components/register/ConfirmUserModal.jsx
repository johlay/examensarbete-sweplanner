import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ConfirmUserModal = ({ showModal }) => {
  const navigate = useNavigate();

  return (
    <Modal
      size="lg"
      aria-labelledby="confirm-user-modal"
      show={showModal}
      centered
    >
      <Modal.Body className="bg-">
        <h3 className="text-center">Congratulations!</h3>
        <p className="text-center">
          Your account has been successfully created. You can now login.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={() => navigate("/login")}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmUserModal;
