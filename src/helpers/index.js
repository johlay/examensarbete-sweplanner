// check user's selected travel type.
const checkTravelType = (type) => {
  switch (type) {
    case "now": {
      return "0";
    }
    case "departure": {
      return "0";
    }

    case "arrival": {
      return "1";
    }

    default: {
      break;
    }
  }
};

// retrieve jwt access token from local storage
const retrieveJwtAccessToken = () => {
  return JSON.parse(localStorage.getItem("access_token"));
};

// check and round :MM of timestamp to nearest "15 minutes"
const roundTimeMinute = (minute) => {
  // if time is between HH:00:00 - HH:14:59 --> return "15"
  if (minute >= 0 && minute < 15) return "15";

  // if time is between HH:15:00 - HH:29:59 --> return "30"
  if (minute >= 15 && minute < 30) return "30";

  // if time is between HH:30:00 - HH:45:59 --> return "45"
  if (minute >= 30 && minute < 45) return "45";

  // if time is between HH:45:00 - HH:59:59 --> return "0"
  if (minute >= 45 && minute < 60) return "0";
};

export { checkTravelType, roundTimeMinute, retrieveJwtAccessToken };
