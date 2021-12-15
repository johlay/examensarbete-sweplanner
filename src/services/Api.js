/**
 * Routeplanner (REST API server)
 */

import axios from "axios";
import { retrieveJwtAccessToken } from "../helpers";

const jwt_access_token = retrieveJwtAccessToken();

// get locations based on user's search query
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
    return { value: location?.id, label: location?.name };
  });

  return locations;
};

export { getLocationName };
