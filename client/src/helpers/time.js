// check and round HH
const roundTimeHour = (hour, minute) => {
  // if HH is 23 and MM is between HH:45:59 - HH:59:59 --> return "00"
  if (hour >= 23 && minute >= 45 && minute < 60) return "00";

  // if HH is 0 and MM is between HH:00:00 - HH:45:00 --> return "00"
  if (hour === 0 && minute > 0 && minute < 45) return "00";

  // if HH is 0 and MM is between HH:45:00 - HH:59:59 --> return String("01")
  if (hour === 0 && minute >= 45 && minute < 60) return String("01");

  // if HH is between 1 <--> 9 and MM is between HH:00:00 - HH: 44:59 --> return String("0") + same hour
  if (hour > 0 && hour < 9 && minute > 0 && minute < 45)
    return String("0" + hour);

  // if HH is between 1 <-->9 and MM is between HH:45:00 - HH:59:59 --> return String("0") + next upcoming hour
  if (hour > 0 && hour < 9 && minute >= 45 && minute < 60)
    return String("0" + (hour + 1));

  // if HH is 9 and MM is between HH:45:59 - HH:59:59 --> return next upcoming hour
  if (hour === 9 && minute >= 45 && minute < 60) return "10";

  // if HH is 9 and MM is between HH:00:00 - HH:44:59 --> return same hour
  if (hour === 9 && minute >= 0 && minute < 45) return "09";

  // if HH is not 9 and MM is between HH:00:00 - HH:44:59 --> return same hour
  if (hour !== 9 && minute >= 0 && minute < 45) return String(hour);
  // if (hour !== 9 && minute >= 0 && minute < 45) return String("0" + hour);

  // if HH is not 9 and MM is between HH:45:00 - HH:59:59 --> return next upcoming hour
  if (hour !== 9 && minute >= 45 && minute < 60) return String(hour + 1);
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

export { roundTimeHour, roundTimeMinute };
