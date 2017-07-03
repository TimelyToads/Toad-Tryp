module.exports = (str) => {
  let hour = parseInt(str.substring(0, 2), 10);
  let minute = str.substring(2, 5);
  let meridiem = (hour > 12) ? ' PM' : ' AM'
  hour = (hour === 0) ? '12' : hour.toString()
  return hour + minute + meridiem;
};