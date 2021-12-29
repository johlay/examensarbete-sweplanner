import dayjs from "dayjs";
import Trip from "./Trip";

const SearchResults = ({ results, from, to }) => {
  const date = results[0]?.LegList?.Leg[0]?.Origin?.date;

  return (
    <>
      <h3 className="text-light py-3" id="search-results-heading-date">
        {dayjs(date).format("dddd, MMMM D, YYYY")}
      </h3>

      {results.map((trip, index) => {
        return <Trip key={index} from={from} to={to} trip={trip} />;
      })}
    </>
  );
};

export default SearchResults;
