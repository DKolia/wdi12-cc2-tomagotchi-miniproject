console.log("Hello there!");

// To Do List //////////////////////////////////////////////////////////////////
// 1. Build a scorecard for needs
// 2. Build a scorecard for age
// 3. Create a start button to begin the game
// 5. Add special effect images- (food, needy, etc images)
// 6. Animation frames
////////////////////////////////////////////////////////////////////////////////

// const $p = $('<p/>')
// $p.text('placeholder text')

//  Start button logic
$('#start-btn').on('click', (e) => {
  $("#start-btn").remove()
  startTimer()

});


// Establishes a new Notagotchi
class Notagotchi {
  constructor(notaName){
    this.name = notaName;
    this.food = 5;
    this.fun = 5;
    this.sleep = 5;
    this.age = 0;
  }
  //  These fully refill a need
  getFed(){
    this.food = 10;
    //  Clicking "feed" button displays food image for 2 seconds
    $('#infoBar').empty().append('You feed your Notagotchi.');

    console.log(this.food);
  }
  getRest(){
    this.sleep = 10;
    //  Clicking "rest" button displays sleep image for 2 seconds
    $('#infoBar').text('You put your Notagotchi to sleep...');
    console.log(this.sleep);
  }
  getFun(){
    this.fun = 10;
    //  Clicking "play" button displays play image for 2 seconds
    $('#infoBar').text('You play with your Notagotchi!' + this.fun);
    console.log(this.fun);
  }



  //  This advances the age and later causes it to die of old age... eventually
  getOlder(){
    this.age  = this.age + 1;
    //  Happens every 7 min if still alive
    console.log("Your Notagotchi celebrates a birthday!");
    console.log("Your Notagotchi is " + this.age + " years old!");
    if (notagotchiOnScreen.age === 0) {
      $("#petImage").empty().append('<img src="images/NewZaggle.jpg" />');
    }
    if (notagotchiOnScreen.age === 1) {
      $("#petImage").empty().append('<img src="images/Zaggle1.jpg" />');
    }
    if (notagotchiOnScreen.age === 2) {
      $("#petImage").empty().append('<img src="images/Zaggle2.jpg" />');
    }
    if (notagotchiOnScreen.age === 3) {
      $("#petImage").empty().append('<img src="images/Zaggle3.jpg" />');
    }
    if (notagotchiOnScreen.age === 4) {
      $("#petImage").empty().append('<img src="images/Zaggle4.jpg" />');
    }
    if (notagotchiOnScreen.age === 5) {
      $("#petImage").empty().append('<img src="images/Zaggle5.jpg" />');
    }
    //  Now entering advanced ages where Notagotchi has a change to pass from age
    if (notagotchiOnScreen.age === 5) {
      // 10% chance of Death,
      if (getRandomInt(0,100) <= 11 ){
        console.log("Your " + notagotchiName + " has passed from old age.");
        this.die()
      }
    }
    if (notagotchiOnScreen.age === 6) {
      // 30% chance of Death,
      if (getRandomInt(0,100) <= 31 ){
        console.log("Your " + notagotchiName + " has passed from old age.");
        this.die()
      }
    }
    if (notagotchiOnScreen.age === 7) {
      // 50% chance of Death,
      if (getRandomInt(0,100) <= 51 ){
        console.log("Your " + notagotchiName + " has passed from old age.");
        this.die()
      }
    }
    if (notagotchiOnScreen.age === 8) {
      // 70% chance of Death,
      if (getRandomInt(0,100) <= 71 ){
      console.log("Your " + notagotchiName + " has passed from old age.");
      this.die()
      }
    }
    if (notagotchiOnScreen.age === 9) {
      // 90% chance of Death,
      if (getRandomInt(0,100) <= 91 ){
      console.log("Your " + notagotchiName + " has passed from old age.");
      this.die()
      }
    }
    if (notagotchiOnScreen.age >= 10) {
      // 100% chance of Death,
      console.log("Your " + notagotchiName + " has passed from old age.");
      this.die()
    }
  }
  //  Death stops the time
  die(){
    clearInterval(intervalId);
    $("#petImage").empty().append('<img src="images/Dead.jpg" />');
    $(".needButton").remove()
  }
}

//  This asks and defines Notagotchi name
let notagotchiName = prompt("Please enter a name for your Notagotchi");
if (notagotchiName === "") {
  console.log("No name? We can just call them 'Notagotchi!'");
  notagotchiName = "Notagotchi";
}

//  This utilizes the established name
const notagotchiOnScreen = new Notagotchi(notagotchiName);
console.log(notagotchiOnScreen);

//  Random Function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


//  setInterval returns an intervalId which we will use to stop timer when its time
//  ageLogic is defined outside of function to have global scope
let ageLogic = 0
let intervalId;
const startTimer = () => {
  intervalId = setInterval(function() {

    //  Slowly ages the notagotchi
    ageLogic++;
    if (ageLogic % 7 === 0) {
      notagotchiOnScreen.getOlder();
    }
    //  Slowly reduces food supply, possibly to death
    notagotchiOnScreen.food = notagotchiOnScreen.food - 1;
    console.log(notagotchiOnScreen.food);
    if (notagotchiOnScreen.food <= 0) {
      console.log(notagotchiOnScreen.name + " has passed from hunger...");
      $("#petImage").empty().append('<img src="images/Dead.jpg" />');
      notagotchiOnScreen.die()
    }

    //  Slowly reduces fun supply, possibly to death
    notagotchiOnScreen.fun = notagotchiOnScreen.fun - 1;
    console.log(notagotchiOnScreen.fun);
    if (notagotchiOnScreen.fun <= 0) {
      console.log(notagotchiOnScreen.name + " has died of boredom...");
      $("#petImage").empty().append('<img src="images/Dead.jpg" />');
      notagotchiOnScreen.die()
    }

    //  Slowly reduces rest supply, possibly to death
    notagotchiOnScreen.sleep = notagotchiOnScreen.sleep - 1;
    console.log(notagotchiOnScreen.sleep);
    if (notagotchiOnScreen.sleep <= 0) {
      console.log(notagotchiOnScreen.name + " has passed from unrest...");
      $("#petImage").empty().append('<img src="images/Dead.jpg" />');
      notagotchiOnScreen.die()
    }

  }, 1000);
}



//  This is the base/starting image
$("#petImage").append('<img src="images/NewZaggle.jpg" />');


//  This button feeds the Notagotchi
$("#feedButton").on("click",() => {
  notagotchiOnScreen.getFed()
});
//  This button puts the Notagotchi to sleep
$("#sleepButton").on("click",() => {
  notagotchiOnScreen.getRest()
});
//  This button plays with the Notagotchi
$("#funButton").on("click",() => {
  notagotchiOnScreen.getFun()
});

// Code by David Kolia
