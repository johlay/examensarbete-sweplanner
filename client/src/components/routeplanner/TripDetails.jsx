import { checkTransportType } from "../../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// implement dayjs duration format
dayjs.extend(duration);

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

  // time
  const days = dayjs
    .duration(destinationTimestamp.diff(originTimestamp))
    .days();
  const hours = dayjs
    .duration(destinationTimestamp.diff(originTimestamp))
    .hours();
  const minutes = dayjs
    .duration(destinationTimestamp.diff(originTimestamp))
    .minutes();

  return (
    <div className="border border-1 border-dark mx-5 my-3 rounded px-3 py-3">
      <Row>
        <Col>
          <p>
            <span aria-label="icon-transport-type">
              <FontAwesomeIcon
                className="mb-2"
                icon={checkTransportType(
                  tripDetails?.type,
                  tripDetails?.Product[0]?.catCode
                )}
                size="2x"
                color="dark"
              />
            </span>
            <br />
            <span
              aria-label="transport-name-and-direction"
              className="fw-bold mb-3"
            >
              {tripDetails?.name}{" "}
              {tripDetails?.type !== "WALK" &&
                `towards ${tripDetails?.direction}`}
            </span>
          </p>

          <p>
            <span aria-label="departure-time" className="fw-bold">
              {dayjs(origin?.time, "HH:mm:ss").format("HH:mm")}
            </span>
            <span aria-label="departure-stop" className="ps-3">
              {origin?.name}
            </span>
          </p>
          <p>
            <span aria-label="arrival-time" className="fw-bold">
              {dayjs(destination?.time, "HH:mm:ss").format("HH:mm")}
            </span>
            <span aria-label="arrival-stop" className="ps-3">
              {destination?.name}
            </span>
          </p>
        </Col>
        <Col className="d-flex justify-content-end align-items-end">
          <span>
            Travel time: {days !== 0 && `${days}d `}
            {hours !== 0 && `${hours}h `}
            {minutes && `${minutes}min`}
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default TripDetails;
