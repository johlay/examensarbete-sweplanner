/**
 * Routeplanner (REST API server)
 */

import axios from "axios";
import { checkTravelType } from "../helpers";

const base_url = process.env.REACT_APP_REST_API_BASE_URL;

// get locations based on user's search query for: "select location field box"
const getLocationName = async (query, accessToken) => {
  const response = await axios
    .get(`${base_url}/api/v1/routeplanner/stop-lookup/?location=${query}`, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
    .then((data) => data)
    .catch((error) => error.response);

  // if response status is 401 (unauthorized) then return the error object
  if (response?.status === 401) {
    return { error: response };
  }

  const data = await response.data;

  const locations = await data?.data?.StopLocation?.map((location) => {
    return { value: location?.id, label: location?.name, data: location };
  });

  return { data: locations };
};

// save logged in user's search input with reference to routeplanner's travel stop (from, to)
const saveSearchHistory = async (searchDetails, accessToken) => {
  // checks if there are any search details, return null if none
  if (!searchDetails) return null;

  const response = await axios({
    url: `${base_url}/api/v1/user/search-history`,
    data: searchDetails,
    method: "PUT",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });

  return response.data;
};

// return search results based on user's input
const search = async (searchDetails, accessToken) => {
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
    `${base_url}/api/v1/routeplanner/routes/?date=${date}&time=${hour}:${minute}&originId=${from}&destId=${to}&searchForArrival=${searchForArrival}`,
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );

  return response.data;
};

export { getLocationName, saveSearchHistory, search };
