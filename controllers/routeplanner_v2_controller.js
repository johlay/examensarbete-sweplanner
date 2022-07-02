/**
 * Routeplanner controller is using ResRobot's API version 2.1 - an API from Trafiklab
 */

const axios = require("axios");
const { resrobot_api_v2_key } = require("../config");

// ResRobot Routeplanner - provides routes between two stops or points
const routeplanner_routes_get = async (req, res) => {
  const { date, time, originId, destId, searchForArrival } = req.query;

  try {
    const response = await axios.get(
      `https://api.resrobot.se/v2.1/trip?format=json&date=${date}&time=${time}&originId=${originId}&destId=${destId}&searchForArrival=${searchForArrival}&lang=en&accessId=${resrobot_api_v2_key}`
    );

    const data = await response.data;

    if (!data) {
      throw Error(
        "Unsuccessful when retrieving data for: 'Routeplanner's routes'"
      );
    }

    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// ResRobot Stop lookup - provides information about stops, including their ids and position, by searching based on their name.
const routeplanner_stop_lookup_get = async (req, res) => {
  const { location } = req.query;

  try {
    const response = await axios(
      `https://api.resrobot.se/v2.1/location.name?input=${location}&format=json&accessId=${resrobot_api_v2_key}`
    );

    const data = await response.data;

    if (!data) {
      throw Error("Unsuccessful when retrieving data for: 'stop lookup'");
    }

    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = { routeplanner_routes_get, routeplanner_stop_lookup_get };
