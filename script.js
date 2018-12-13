// 'use strict';
let currentMealCalendar=[];
let previousMealCalendar=[];

function getHomeScreen() {
  $('.getStartedForm').on('submit', function (event){
    event.preventDefault();
    $('.getStartedScreen').toggleClass('hidden');
    console.log("working");
    $('.js-homeScreen').toggleClass('hidden');
  });
};

function getExistingMealCalendar() {
  $('.js-viewMealCalendarButton').on('click', function (event){
    event.preventDefault();
    $('.js-homeScreen').toggleClass('hidden');
    $('.js-backButton').toggleClass('hidden');
    if (currentMealCalendar.length == 0) {
      $('.js-calendarErrorMessage').html('You have not created a meal calendar yet.');
    }
    else {
      getMealCalendarResults();
    }
  });
};

function backToHome() {
  $('.js-backButton').on('click', function (event){
    event.preventDefault();
    $('.js-homeScreen').toggleClass('hidden');
    $('.js-backButton').toggleClass('hidden');
  })
}

function getMealCalendarResults() {
  //This function will display the latest meal calendar with the most
  //recent food preferences.
}

function getFoodPrefScreen() {
  //This function will display the food preferences screen.
    $('.js-homeScreen').toggleClass('hidden');
    $('.js-foodPrefScreen').toggleClass('.hidden');
};

function changeMealCalendar() {
  $('.js-changeMealCalendarButton').on('click', function (event){
    event.preventDefault();
    // getFoodPrefScreen();
    $('.js-homeScreen').toggleClass('hidden');
    $('.js-foodPrefScreen').toggleClass('.hidden');
    $('.js-backButton').toggleClass('hidden');
    previousMealCalendar.length= 0;
    previousMealCalendar = currentMealCalendar.slice();
    currentMealCalendar.length = 0;
  });
}



// function getFoodCategories() {
//   let baseUrl = "https://www.themealdb.com/api/json/v1/1/";
//   let foodCategoriesApi = "${baseUrl}";
// }

function handleApp() {
  getHomeScreen();
  getExistingMealCalendar();
  changeMealCalendar();
  backToHome();
}

$(handleApp);