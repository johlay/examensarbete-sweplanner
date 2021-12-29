import { Link } from "react-router-dom";

const WelcomeMessage = () => {
  return (
    <>
      <h2 className="text-center text-light py-3 fw-bold">SwePlanner</h2>
      <p className="text-center text-light">
        A travel planner that provides route information and time estimates for
        taking a journey on all public transport across Sweden.
      </p>
      <p className="text-center text-light">
        Services are only available for members.
      </p>
      <p className="text-center text-light">
        Not a member at SwePlanner?{" "}
        <Link className="text-light" to="/register">
          Register now
        </Link>
      </p>
    </>
  );
};

export default WelcomeMessage;
