import Form from "react-bootstrap/Form";

const TravelType = () => {
  return (
    <>
      <p className="text-light">When do you want to travel?</p>
      <div className="text-light">
        <Form.Check
          inline
          label="Now"
          name="travel-type"
          type="radio"
          id="option-now"
        />
        <Form.Check
          inline
          label="Enter departure time"
          name="travel-type"
          type="radio"
          id="option-departure"
        />
        <Form.Check
          inline
          label="Enter arrival time"
          name="travel-type"
          type="radio"
          id="option-arrival"
        />
      </div>
    </>
  );
};

export default TravelType;
