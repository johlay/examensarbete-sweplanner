/**
 * Routeplanner controller is using ResRobot's API - an API from Trafiklab
 */

const axios = require("axios");
const { resrobot_api_key } = require("../config");

// ResRobot Stop lookup - provides information about stops, including their ids and position, by searching based on their name.
const routeplanner_stop_lookup_get = async (req, res) => {
  const { location } = req.query;

  try {
    const response = await axios(
      `https://api.resrobot.se/v2/location.name?input=${location}&format=json&key=${resrobot_api_key}`
    );

    const data = await response.data;

    if (!data) {
      throw Error("Unsuccessful when retrieving data");
    }

    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = { routeplanner_stop_lookup_get };
