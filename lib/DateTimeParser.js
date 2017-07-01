module.exports.parseDates = (tripsArray) => {
  tripsArray.forEach( trip => {
    let timeIndex = trip.arrival_date.indexOf('T');
    trip.arrival_date = trip.arrival_date.substring(0, timeIndex);
    trip.departure_date = trip.departure_date.substring(0, timeIndex);
  });
};