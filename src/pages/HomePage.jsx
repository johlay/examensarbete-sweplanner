import Container from "react-bootstrap/Container";
import WelcomeMessage from "../components/home/WelcomeMessage";

const HomePage = () => {
  return (
    <Container className="my-5">
      <WelcomeMessage />
    </Container>
  );
};

export default HomePage;
