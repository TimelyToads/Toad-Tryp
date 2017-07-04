import moment from 'moment';

module.exports = (str) => {
  return moment(str).format('dddd[,] MMMM Do YYYY');
}