import moment from 'moment';

export default function formatTime(unitTimeStamp) {
  // Check if valid input first
  if (moment(unitTimeStamp).isValid()) {
    return moment(unitTimeStamp).format('MMM DD, YYYY HH:mm A');
  }
  // Ideally we throw an error of somekind to be picked up
  // by a logger, but we can just return nothing for now
  return 'Invalid Date';
}
