import React from 'react';

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

export const getWeekDay = (day_num) => {
  let weekday = new Array(7);
  weekday[0] =  "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return weekday[day_num];
};

export const getMonth = (month_num) => {
  let month = new Array(12);
  month[0] =  "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  month[12] = "July";

  return month[month_num];
};

export const parseDate = (timeSlot) => {
  let dateTime = new Date(timeSlot);
  let weekDay = getWeekDay(dateTime.getDay());
  let date = dateTime.getDate();
  let month = getMonth(dateTime.getMonth());

  return `${weekDay}, ${month} ${date}`;

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

export const loadingDiv = () => {
  return (<div><i className="fa fa-spinner fa-spin fa-4x" aria-hidden="true"></i></div>);
};
