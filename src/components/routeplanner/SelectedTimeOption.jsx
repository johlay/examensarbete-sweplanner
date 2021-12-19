import { roundTimeMinute } from "../../helpers";
import dayjs from "dayjs";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const days = ["0", "1", "2", "3", "4", "5", "6"];

const hours = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];

const minutes = [
  "00",
  "05",
  "10",
  "15",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
];

const SelectedTimeOption = ({ travelTimeOption, setTravelTimeOption }) => {
  const now = dayjs(new Date());

  const handleSelectTime = (e, id) => {
    switch (id) {
      case "date": {
        setTravelTimeOption({ ...travelTimeOption, date: e.target.value });
        break;
      }

      case "hour": {
        setTravelTimeOption({ ...travelTimeOption, hour: e.target.value });
        break;
      }

      case "minute": {
        setTravelTimeOption({ ...travelTimeOption, minute: e.target.value });
        break;
      }

      default: {
        return;
      }
    }
  };

  return (
    <div className="my-3">
      <Row>
        <Col className="me-3" sm={5}>
          <Form.Group className="text-light" id="travel-date">
            <Form.Label>Day</Form.Label>
            <Form.Select
              onChange={(e) => handleSelectTime(e, "date")}
              aria-label="date"
              defaultValue={now.format("YYYY-MM-DD")}
            >
              {days.map((day) => {
                const date = dayjs().add(day, "days").format("YYYY-MM-DD");
                const showDay = dayjs()
                  .add(day, "days")
                  .format("dddd, MMMM D, YYYY");

                return (
                  <option key={`${day}-day-from-now`} value={date}>
                    {showDay}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="text-light" id="travel-hour">
            <Form.Label>Hour</Form.Label>
            <Form.Select
              aria-label="hour"
              defaultValue={now.format("HH")}
              onChange={(e) => handleSelectTime(e, "hour")}
            >
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="text-light" id="travel-minute">
            <Form.Label>Minute</Form.Label>
            <Form.Select
              aria-label="minute"
              defaultValue={roundTimeMinute(now.minute())}
              onChange={(e) => handleSelectTime(e, "minute")}
            >
              {minutes.map((minute) => (
                <option key={minute} value={minute}>
                  {minute}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default SelectedTimeOption;
