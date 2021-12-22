/**
 * Routeplanner (REST API server)
 */

import axios from "axios";
import { checkTravelType, retrieveJwtAccessToken } from "../helpers";

const jwt_access_token = retrieveJwtAccessToken();

// get locations based on user's search query for: "select location field box"
const getLocationName = async (query) => {
  const response = await axios.get(
    `http://localhost:3001/api/v1/routeplanner/stop-lookup/?location=${query}`,
    {
      headers: {
        Authorization: "Bearer " + jwt_access_token,
      },
    }
  );

  const data = await response.data;

  const locations = await data?.data?.StopLocation?.map((location) => {
    return { value: location?.id, label: location?.name, data: location };
  });

  return locations;
};

// save logged in user's search input with reference to routeplanner's travel stop (from, to)
const saveSearchHistory = async (searchDetails) => {
  // checks if there are any search details, return null if none
  if (!searchDetails) return null;

  const response = await axios({
    url: `http://localhost:3001/api/v1/user/search-history`,
    data: searchDetails,
    method: "PUT",
    headers: {
      Authorization: "Bearer " + jwt_access_token,
    },
  });

  return response.data;
};

// return search results based on user's input
const search = async (searchDetails) => {
  // checks if there are any search details, return null if none
  if (!searchDetails) return null;

  // destructuring
  const { from, to } = searchDetails;
  const {
    travelTimeOption: { date, hour, minute, type },
  } = searchDetails;

  // check what what travel type that user has picked.
  const searchForArrival = checkTravelType(type); // now, departure = returns "0", arrival returns = "1"

  const response = await axios.get(
    `http://localhost:3001/api/v1/routeplanner/routes/?date=${date}&time=${hour}:${minute}&originId=${from}&destId=${to}&searchForArrival=${searchForArrival}`,
    {
      headers: {
        Authorization: "Bearer " + jwt_access_token,
      },
    }
  );

  return response.data;
};

export { getLocationName, saveSearchHistory, search };
