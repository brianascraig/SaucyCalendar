'use strict';

function getCalendarDisplay () {
  $('.viewMealCalendarButton').on('click', event => {
   $('#calendar').fullCalendar({
  defaultView: 'month'
}); 
  })
}

getCalendarDisplay();
