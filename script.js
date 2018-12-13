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
      alert("You have not created a meal calendar yet. Please create a meal calendar first.")
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
  $('.foodPrefForm').submit(function(event){
    event.preventDefault();
    $('.js-foodPrefScreen').toggleClass('hidden');
    $('.js-mealCalendarScreen').toggleClass('hidden');
    $('.js-backButton').toggleClass('hidden');
  });
}

function getFoodPrefScreen() {
  //This function will display the food preferences screen.
    $('.js-homeScreen').toggleClass('hidden');
    $('.js-foodPrefScreen').toggleClass('hidden');
};

function updatePreviousMealCalendar() {
  previousMealCalendar.length= 0;
  previousMealCalendar = currentMealCalendar.slice();
  currentMealCalendar.length = 0;
}

function changeMealCalendar() {
  $('.js-changeMealCalendarButton').on('click', function (event){
    event.preventDefault();
    getFoodPrefScreen();
    console.log("changecalenda working");
    updatePreviousMealCalendar();
  });
}

function startNewMealCalendar() {
  $('.js-newMealCalendar').on('click', function (event){
    event.preventDefault();
    getFoodPrefScreen();
    updatePreviousMealCalendar();
  });
}



function getFoodCategories() {
  let baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  let categorySelection = input.val();
  let foodCategoriesApi = '${baseUrl}${categorySelection}"';
}

function handleApp() {
  getHomeScreen();
  getExistingMealCalendar();
  changeMealCalendar();
  backToHome();
  getMealCalendarResults();
  startNewMealCalendar();
}

$(handleApp);