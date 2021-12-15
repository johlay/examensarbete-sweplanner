import SelectLocationField from "./SelectLocationField";

const Routeplanner = () => {
  return (
    <>
      <h2 className="h3 text-light py-3" id="my-profile">
        Plan your travel
      </h2>
      <p className="text-light">
        You can search between stops, addresses, or locations
      </p>

      <div className="my-4">
        <SelectLocationField />
      </div>

      <div className="my-4">
        <SelectLocationField />
      </div>
    </>
  );
};

export default Routeplanner;
