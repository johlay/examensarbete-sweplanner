import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ToggleIconAccordion from "./accordion/ToggleIconAccordion";
import TripDetails from "./TripDetails";

// implement custom parse format
dayjs.extend(customParseFormat);

const Trip = ({ from, to, trip }) => {
  console.log("trip", trip);
  // destructuring from first travel origin
  const { time: originTime } = trip?.LegList?.Leg[0]?.Origin;
  // destructuring from last travel destination
  const { time: destinationTime } =
    trip?.LegList?.Leg[trip.LegList.Leg.length - 1]?.Destination;

  return (
    <>
      <Accordion className="bg-light rounded my-4 px-3 py-3">
        <Row>
          <Col>
            <p className="fw-bold mb-2">
              {from} -&gt; {to}
            </p>
            <p className="fw-bold mb-0">
              {dayjs(originTime, "HH:mm:ss").format("HH:mm")} -{" "}
              {dayjs(destinationTime, "HH:mm:ss").format("HH:mm")}
            </p>
            <p className="mb-0">
              Travel time:{" "}
              {dayjs(destinationTime, "HH:mm:ss").diff(
                dayjs(originTime, "HH:mm:ss"),
                "minute"
              )}
              min
            </p>
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
