import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ToggleIconAccordion from "./accordion/ToggleIconAccordion";
import TripDetails from "./TripDetails";

const Trip = ({ trip }) => {
  console.log("trip", trip);
  return (
    <>
      <Accordion className="bg-light rounded my-4 px-3 py-3">
        <Row>
          <Col>
            <p className="fw-bold mb-2">Malmö Värnhem -&gt; Helsingborg C</p>
            <p className="fw-bold mb-0">17:55 - 18:55</p>
            <p className="mb-0">Travel time: 55min</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <ToggleIconAccordion eventKey="0">Click me!</ToggleIconAccordion>
          </Col>
        </Row>
        <Accordion.Collapse eventKey="0">
          <div>
            <hr className="my-4" />
            <TripDetails />
          </div>
        </Accordion.Collapse>
      </Accordion>
    </>
  );
};

export default Trip;
