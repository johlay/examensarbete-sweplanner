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

export { checkTravelType, checkTransportType };
