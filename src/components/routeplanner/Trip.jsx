import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ToggleIconAccordion from "./accordion/ToggleIconAccordion";
import TripDetails from "./TripDetails";

// implement additional dayjs formats
dayjs.extend(customParseFormat);
dayjs.extend(duration);

const Trip = ({ trip }) => {
  // details about first travel origin
  const origin = trip?.LegList?.Leg[0]?.Origin;
  // details about last travel destination
  const destination =
    trip?.LegList?.Leg[trip?.LegList?.Leg?.length - 1]?.Destination;

  // time
  const days = dayjs.duration(trip?.duration).days();
  const hours = dayjs.duration(trip?.duration).hours();
  const minutes = dayjs.duration(trip?.duration).minutes();

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
              Travel time: {days !== 0 && `${days}d `}
              {hours !== 0 && `${hours}h `}
              {minutes && `${minutes}min`}
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
