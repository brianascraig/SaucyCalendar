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
    var options = [];
    var beef = $("#beef").is(":checked");
    var pork = $("#pork").is(":checked");
    var chicken = $("#chicken").is(":checked");
    var seafood = $("#seafood").is(":checked");
    var lamb = $("#lamb").is(":checked");
    var vegan = $("#vegan").is(":checked");
    var pasta = $("#pasta").is(":checked");
    var vegetarian = $("#vegetarian").is(":checked");
    if(beef) options.push("beef");
    if(pork) options.push("pork");
    if(chicken) options.push("chicken");
    if(seafood) options.push("seafood");
    if(lamb) options.push("lamb");
    if(vegan) options.push("vegan");
    if(pasta) options.push("pasta");
    if(vegetarian) options.push("vegetarian");
    $('.js-foodPrefScreen').toggleClass('hidden');
    $('.js-mealCalendarScreen').toggleClass('hidden');
    $('.js-backButton').toggleClass('hidden');
    if(!options) {
      console.log("you must make a selection!")
      return;
    } else {
      getFoodCategories(options)
    }
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



function getFoodCategories(categories) {
  let baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  // let foodCategoriesApi = '${baseUrl}${categorySelection}';
  $.ajax({
    contentType: "application/json; charset=utf-8",
    headers: {
      "accept": "application/json; odata=verbose"
    },
    type: 'GET',
    url: `${baseUrl,categories[0]}`,
    success: (data) => {
      console.log(data);
    },
    error: (error) => {
      console.log(error);
    }
  });
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
