import dayjs from "dayjs";
import Trip from "./Trip";

const TripsResults = ({ date, results }) => {
  return (
    <>
      <h3 className="text-light py-3" id="search-results-heading-date">
        {dayjs(date).format("dddd, MMMM D, YYYY")}
      </h3>

      {results.map((trip) => {
        return <Trip trip={trip} />;
      })}
    </>
  );
};

export default TripsResults;
