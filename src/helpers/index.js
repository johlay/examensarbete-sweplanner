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

// check transport type and return matching fontawesome icon
const checkTransportType = (type, product) => {
  // WALK = walk
  if (type === "WALK") {
    return ["fas", "walking"];
  }

  // TRSF = transfers where the traveller has to walk between stations
  if (type === "TRSF") {
    return ["fas", "walking"];
  }

  // JNY = public transport
  if (type === "JNY") {
    const buses = ["3", "7", "9"];
    const ferries = ["8"];
    const trains = ["1", "2", "4", "5", "6"];

    // check if transport type (product) is bus
    if (buses.includes(product)) {
      return ["fas", "bus"];
    }

    // check if transport type (product) is ferry
    if (ferries.includes(product)) {
      return ["fas", "ship"];
    }

    // check if transport type (product) is train
    if (trains.includes(product)) {
      return ["fas", "train"];
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

  // if time is between HH:45:00 - HH:59:59 --> return "00"
  if (minute >= 45 && minute < 60) return "00";
};

export {
  checkTransportType,
  checkTravelType,
  roundTimeMinute,
  retrieveJwtAccessToken,
};
