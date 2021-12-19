import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const TripDetails = () => {
  return (
    <div className="border border-1 border-dark mx-5 rounded px-3 py-3">
      <Row>
        <Col>
          <span aria-label="icon-transport-type">
            <FontAwesomeIcon
              className="mb-3"
              icon={faBus}
              size="2x"
              color="light"
            />
          </span>
          <p>
            <span aria-label="departure-time">17:55</span>
            <span aria-label="departure-stop" className="fw-bold ps-3">
              Malmö Värnhem
            </span>
          </p>
          <p>
            <span aria-label="arrival-time">18:02</span>
            <span aria-label="arrival-stop" className="fw-bold ps-3">
              Malmö C
            </span>
          </p>
        </Col>
        <Col className="d-flex justify-content-end align-items-end">
          <span>Travel time: 45min</span>
        </Col>
      </Row>
    </div>
  );
};

export default TripDetails;
