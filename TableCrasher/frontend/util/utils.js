export const parseTime = (timeSlot) => {
  let time = new Date(timeSlot);
  let minutes = time.getMinutes();
  if (minutes === 0) {
    minutes = "00";
  }
  let hours = time.getHours();
  let meridian = "AM";
  if (hours > 12 ) {
    hours -= 12;
    meridian = "PM";
  }
  return `${hours}:${minutes} ${meridian}`;

};

export const combineDateAndTime = (date, time) => {
  const timeString = time.getHours() + ':' + time.getMinutes() + ':00';

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Jan is 0, dec is 11
  const day = date.getDate();
  const dateString = '' + year + '-' + month + '-' + day;
  const combined = new Date(dateString + ' ' + timeString);

  return combined;
};
