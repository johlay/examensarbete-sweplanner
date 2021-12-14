import { useRef, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorBox from "../partials/ErrorBox";

const RegistrationForm = () => {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [error, setError] = useState(null);

  const { register } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    // checks if password matches each other
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords doesn't match each other.");
    }

    // checks if password is at least six characters.
    if (passwordRef.current.value.length < 6) {
      return setError(
        "Password is too short. It needs to be at least six characters."
      );
    }

    register({
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
      .then((data) => {
        if (data.status === 201) {
          // show modal which confirms successful registration
        } else {
          return setError(data.data.message);
        }
      })
      .catch(() => {
        return setError("An error occured. Please try again!");
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center text-light py-3">Registration</h2>
      {error && <ErrorBox error={error} />}
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
