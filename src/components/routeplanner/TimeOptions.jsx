import { roundTimeHour, roundTimeMinute } from "../../helpers";
import dayjs from "dayjs";
import Form from "react-bootstrap/Form";
import SelectedTimeOption from "./SelectedTimeOption";

const TimeOptions = ({ travelTimeOption, setTravelTimeOption }) => {
  const now = dayjs(new Date());

  return (
    <>
      <p className="text-light">When do you want to travel?</p>
      <div className="text-light">
        <Form.Check
          inline
          label="Now"
          name="travel-type"
          type="radio"
          onChange={() =>
            setTravelTimeOption({
              type: "now",
              date: now.format("YYYY-MM-DD"),
              hour: roundTimeHour(now.hour(), now.minute()),
              minute: roundTimeMinute(now.minute()),
            })
          }
          id="option-now"
        />
        <Form.Check
          inline
          label="Enter departure time"
          name="travel-type"
          type="radio"
          onChange={() =>
            setTravelTimeOption({
              type: "departure",
              date: travelTimeOption?.date
                ? travelTimeOption?.date
                : now.format("YYYY-MM-DD"),
              hour: travelTimeOption?.hour
                ? travelTimeOption?.hour
                : roundTimeHour(now.hour(), now.minute()),
              minute: travelTimeOption?.minute
                ? travelTimeOption?.minute
                : roundTimeMinute(now.minute()),
            })
          }
          id="option-departure"
        />
        <Form.Check
          inline
          label="Enter arrival time"
          name="travel-type"
          type="radio"
          onChange={() =>
            setTravelTimeOption({
              type: "arrival",
              date: travelTimeOption?.date
                ? travelTimeOption?.date
                : now.format("YYYY-MM-DD"),
              hour: travelTimeOption?.hour
                ? travelTimeOption?.hour
                : roundTimeHour(now.hour(), now.minute()),
              minute: travelTimeOption?.minute
                ? travelTimeOption?.minute
                : roundTimeMinute(now.minute()),
            })
          }
          id="option-arrival"
        />
      </div>

      {travelTimeOption && travelTimeOption.type !== "now" && (
        <SelectedTimeOption
          travelTimeOption={travelTimeOption}
          setTravelTimeOption={setTravelTimeOption}
        />
      )}
    </>
  );
};

export default TimeOptions;
