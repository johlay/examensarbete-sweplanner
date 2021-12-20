import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const TripDetails = ({ tripDetails }) => {
  // details about origin stop
  const origin = tripDetails?.Origin;
  const originTimestamp = dayjs(
    `${origin?.date} ${origin?.time}`,
    "YYYY-MM-DD HH:mm:ss"
  );

  // details about destination stop
  const destination = tripDetails?.Destination;
  const destinationTimestamp = dayjs(
    `${destination?.date} ${destination?.time}`,
    "YYYY-MM-DD HH:mm:ss"
  );

  return (
    <div className="border border-1 border-dark mx-5 my-3 rounded px-3 py-3">
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
            <span aria-label="departure-time">
              {dayjs(origin?.time, "HH:mm:ss").format("HH:mm")}
            </span>
            <span aria-label="departure-stop" className="fw-bold ps-3">
              {origin?.name}
            </span>
          </p>
          <p>
            <span aria-label="arrival-time">
              {dayjs(destination?.time, "HH:mm:ss").format("HH:mm")}
            </span>
            <span aria-label="arrival-stop" className="fw-bold ps-3">
              {destination?.name}
            </span>
          </p>
        </Col>
        <Col className="d-flex justify-content-end align-items-end">
          <span>
            Travel time:{" "}
            {dayjs(destinationTimestamp).diff(originTimestamp, "minute")}
            min
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default TripDetails;
