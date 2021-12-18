import Form from "react-bootstrap/Form";
import SelectedTimeOption from "./SelectedTimeOption";

const TimeOptions = ({ travelTimeOption, setTravelTimeOption }) => {
  return (
    <>
      <p className="text-light">When do you want to travel?</p>
      <div className="text-light">
        <Form.Check
          inline
          label="Now"
          name="travel-type"
          type="radio"
          onChange={() => setTravelTimeOption({ type: "now" })}
          id="option-now"
        />
        <Form.Check
          inline
          label="Enter departure time"
          name="travel-type"
          type="radio"
          onChange={() => setTravelTimeOption({ type: "departure" })}
          id="option-departure"
        />
        <Form.Check
          inline
          label="Enter arrival time"
          name="travel-type"
          type="radio"
          onChange={() => setTravelTimeOption({ type: "arrival" })}
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
