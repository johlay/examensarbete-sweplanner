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
  // details about first travel origin
  const origin = trip?.LegList?.Leg[0]?.Origin;
  const originTimestamp = dayjs(
    `${origin?.date} ${origin?.time}`,
    "YYYY-MM-DD HH:mm:ss"
  );
  // details about last travel destination
  const destination =
    trip?.LegList?.Leg[trip?.LegList?.Leg?.length - 1]?.Destination;
  const destinationTimestamp = dayjs(
    `${destination?.date} ${destination?.time}`,
    "YYYY-MM-DD HH:mm:ss"
  );

  return (
    <>
      <Accordion className="bg-light rounded my-4 px-3 py-3">
        <Row>
          <Col>
            <p className="fw-bold mb-2">
              {origin?.name} -&gt; {destination?.name}
            </p>
            <p className="fw-bold mb-0">
              {dayjs(origin?.time, "HH:mm:ss").format("HH:mm")} -{" "}
              {dayjs(destination?.time, "HH:mm:ss").format("HH:mm")}
            </p>
            <p className="mb-0">
              Travel time:{" "}
              {dayjs(destinationTimestamp).diff(originTimestamp, "minute")}
              min
            </p>
          </Col>
          <Col className="d-flex justify-content-end">
            <ToggleIconAccordion eventKey="0" />
          </Col>
        </Row>
        <Accordion.Collapse eventKey="0">
          <div>
            <hr className="my-4" />
            {trip?.LegList.Leg.map((tripDetails, index) => {
              return <TripDetails key={index} tripDetails={tripDetails} />;
            })}
          </div>
        </Accordion.Collapse>
      </Accordion>
    </>
  );
};

export default Trip;
