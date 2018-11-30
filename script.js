// 'use strict';

function getHomeScreen() {
  $('.getStartedForm').on('submit', function (event){
    event.preventDefault();
    
    $('.getStartedScreen').toggleClass('hidden');
    console.log("working");
  });
};



// function getFoodCategories() {
//   let baseUrl = "https://www.themealdb.com/api/json/v1/1/";
//   let foodCategoriesApi = "${baseUrl}";
// }

function handleApp() {
  getHomeScreen();
}

$(handleApp);