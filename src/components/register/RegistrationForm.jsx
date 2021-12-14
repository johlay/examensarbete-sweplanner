import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegistrationForm = () => {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center text-light py-3">Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group id="first-name" className="mb-3">
          <Form.Label className="text-light">First name</Form.Label>
          <Form.Control type="text" ref={firstNameRef} required />
        </Form.Group>

        <Form.Group id="last-name" className="mb-3">
          <Form.Label className="text-light">Last name</Form.Label>
          <Form.Control type="text" ref={lastNameRef} required />
        </Form.Group>

        <Form.Group id="email" className="mb-3">
          <Form.Label className="text-light">Email</Form.Label>
          <Form.Control type="email" ref={emailRef} required />
        </Form.Group>

        <Form.Group id="password" className="mb-3">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} required />
        </Form.Group>

        <Form.Group id="confirm-password" className="mb-3">
          <Form.Label className="text-light">Confirm password</Form.Label>
          <Form.Control type="password" ref={confirmPasswordRef} required />
        </Form.Group>

        <hr className="bg-light my-4" />

        <div className="d-grid gap-2">
          <Button type="submit" variant="dark">
            Register now
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationForm;
