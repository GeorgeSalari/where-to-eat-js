function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');
  function show_place(){
    var list_of_restaurant = ["Skillet At 163", "Qureshi Malaysia", "Marini's on 57", "Mandarin Grill"];
    var p = document.getElementById("restaurant");
    var rand = Math.floor(Math.random() * list_of_restaurant.length);
    p.innerHTML = list_of_restaurant[rand];
  }

  function start_program(){
    program = setInterval(function() {show_place()}, 200);
  }

  function myStopFunction() {
    clearInterval(program);
  }

  function cath_place(){
    myStopFunction();
    var p = document.getElementById("restaurant");
    var content = p.innerHTML;
    var show_place = document.getElementById("restaurant-chosen")
    if (show_place.innerHTML.length == 0) {
      show_place.innerHTML = content;
    } else {
      var p = document.getElementById("geted_restourant");
      show_place.innerHTML = content;
    }
  }
  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", start_program);

  getBtn = document.getElementById('get-restaurant-button');
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", cath_place);
}
// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);
