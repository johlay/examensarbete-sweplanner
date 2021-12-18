import { useState } from "react";
import Button from "react-bootstrap/Button";
import SelectLocationField from "./SelectLocationField";
import TravelType from "./TravelType";

const Routeplanner = () => {
  const [selectFrom, setSelectFrom] = useState("");
  const [selectTo, setSelectTo] = useState("");

  const selectProps = { setSelectFrom, setSelectTo };

  return (
    <>
      <h2 className="h3 text-light py-3" id="my-profile">
        Plan your travel
      </h2>
      <p className="text-light">
        You can search between stops, addresses, or locations
      </p>

      <div className="my-4">
        <SelectLocationField
          name="From"
          select={selectProps}
          placeholder="From"
        />
      </div>

      <div className="my-4">
        <SelectLocationField name="To" placeholder="To" select={selectProps} />
      </div>

      <TravelType />

      <div className="d-flex justify-content-center my-5">
        <Button className="w-50" variant="dark">
          Search trip
        </Button>
      </div>
    </>
  );
};

export default Routeplanner;
