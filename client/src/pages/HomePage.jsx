import Container from "react-bootstrap/Container";
import Routeplanner from "../components/routeplanner/Routeplanner";
import WelcomeMessage from "../components/home/WelcomeMessage";
import useAuthContext from "../hooks/useAuthContext";

const HomePage = () => {
  const { currentUser } = useAuthContext();

  return (
    <Container className="my-5">
      {!currentUser ? <WelcomeMessage /> : <Routeplanner />}
    </Container>
  );
};

export default HomePage;
