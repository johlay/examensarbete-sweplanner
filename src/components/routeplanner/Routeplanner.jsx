import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { search } from "../../services/Api";
import Button from "react-bootstrap/Button";
import SelectLocationField from "./SelectLocationField";
import TimeOptions from "./TimeOptions";
import TripsResults from "./TripsResults";

const Routeplanner = () => {
  const [searchDetails, setSearchDetails] = useState(null);
  const [selectFrom, setSelectFrom] = useState(null);
  const [selectTo, setSelectTo] = useState(null);
  const [travelTimeOption, setTravelTimeOption] = useState(null);

  const selectProps = { setSelectFrom, setSelectTo };

  const { data, isFetching, refetch } = useQuery(
    [`get-search-results`],
    async () => await search(searchDetails)
  );

  console.log("travelTimeOption:", travelTimeOption);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchDetails]);

  const handleSearch = () => {
    // checks if all required fields are filled in.
    // if (!selectFrom) {
    //   alert("You need to fill in where you want to leave");
    //   return;
    // }

    // if (!selectTo) {
    //   alert("You need to fill in where you want to go");
    //   return;
    // }

    // if (!travelTimeOption) {
    //   alert("You need to choose when you want to travel");
    //   return;
    // }

    // create new variable storing search details.
    const newSearchDetails = {
      from: selectFrom?.data?.id,
      to: selectTo?.data?.id,
    };

    return setSearchDetails(newSearchDetails);
  };

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

      <TimeOptions
        travelTimeOption={travelTimeOption}
        setTravelTimeOption={setTravelTimeOption}
      />

      <div className="d-flex justify-content-center my-5">
        <Button onClick={handleSearch} className="w-50" variant="dark">
          Search trip
        </Button>
      </div>

      {isFetching && <p>Loading...</p>}

      {/* {data && <TripsResults results={data} />} */}
    </>
  );
};

export default Routeplanner;
