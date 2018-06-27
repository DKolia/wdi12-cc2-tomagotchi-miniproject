console.log("Hello there!");

// To Do List //////////////////////////////////////////////////////////////////
// 1. Add special effect images
// 2. Animate your pet across the screen
// 3. Build a scorecard for needs
// 4. Build a scorecard for age
////////////////////////////////////////////////////////////////////////////////


// Establishes starting class/name/stats/methods of a Notagotchi
class Notagotchi {
  constructor(notaName){
    this.name = notaName;
    this.food = 300;
    this.fun = 500;
    this.sleep = 300;
    this.age = 0;
  }

  //  Refills Food
  getFed(){
    this.food = 10;
    //  Clicking "feed" button displays food image for 2 seconds
    console.log("Your Notagotchi is fed.");
    console.log(this.food);
  }

  //  Refills Sleep
  getRest(){
    this.sleep = 10;
    //  Clicking "rest" button displays sleep image for 2 seconds
    console.log("Your Notagotchi is asleep...");
    console.log(this.sleep);
  }

  //  Refills Fun
  getFun(){
    this.fun = 10;
    //  Clicking "play" button displays play image for 2 seconds
    console.log("You play with your Notagotchi!");
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
      this.die()
      console.log("Your " + notagotchiName + " has passed from old age.");
      this.die()
      }
    }
    if (notagotchiOnScreen.age === 6) {
      // 30% chance of Death,
      if (getRandomInt(0,100) <= 31 ){
      this.die()
      console.log("Your " + notagotchiName + " has passed from old age.");
      this.die()
      }
    }
    if (notagotchiOnScreen.age === 7) {
      // 50% chance of Death,
      if (getRandomInt(0,100) <= 51 ){
      this.die()
      console.log("Your " + notagotchiName + " has passed from old age.");
      this.die()
      }
    }
    if (notagotchiOnScreen.age === 8) {
      // 70% chance of Death,
      if (getRandomInt(0,100) <= 71 ){
      this.die()
      console.log("Your " + notagotchiName + " has passed from old age.");
      this.die()
      }
    }
    if (notagotchiOnScreen.age === 9) {
      // 90% chance of Death,
      if (getRandomInt(0,100) <= 91 ){
      this.die()
      console.log("Your " + notagotchiName + " has passed from old age.");
      this.die()
      }
    }
    if (notagotchiOnScreen.age === 10) {
      // 100% chance of Death,
      console.log("Your " + notagotchiName + " has passed from old age.");
      this.die()
    }
  }

  //  This death method stops the time
  die(){
    clearInterval(intervalId);
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


// Set Interval Function
//  Food, Boredom, Sleepiness level counts one-by-one down to zero every five minutes
    //this.food, this.fun, this.sleep: -1 per 5 minutes
    //if lifeStatus=dead true do not run.
    //if lifeStatus=egg true do not run.


//  setInterval returns an intervalId which we will use to stop timer when its time
//  ageLogic is defined outside of function to have global scope
let ageLogic = 0
const intervalId = setInterval(function() {

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
    notagotchiOnScreen.die()
  }

  //  Slowly reduces fun supply, possibly to death
  notagotchiOnScreen.fun = notagotchiOnScreen.fun - 1;
  console.log(notagotchiOnScreen.fun);
  if (notagotchiOnScreen.fun <= 0) {
    console.log(notagotchiOnScreen.name + " has died of boredom...");
    notagotchiOnScreen.die()
  }

  //  Slowly reduces rest supply, possibly to death
  notagotchiOnScreen.sleep = notagotchiOnScreen.sleep - 1;
  console.log(notagotchiOnScreen.sleep);
  if (notagotchiOnScreen.sleep <= 0) {
    console.log(notagotchiOnScreen.name + " has passed from unrest...");
    notagotchiOnScreen.die()
    }

  }, 10);

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

////////////////////////////////////////////////////////////////////////////////
//  Images
// Lets load images somehow...
    //
    //  imagesLibrary = {
    //   asleep:       "Asleep.jpg",
    //   dead:         "Dead.jpg",
    //   food:         "Food.jpg",
    //   fun:          "Fun.jpg",
    //   egg:          "NewZaggle.jpg",
    //   form1:        "Zaggle1.jpg",
    //   form1Needy:   "Zaggle1Needy.jpg",
    //   form2:        "Zaggle2.jpg",
    //   form2Needy:   "Zaggle2Needy.jpg",
    //   form3:        "Zaggle3.jpg",
    //   form3Needy:   "Zaggle3Needy.jpg",
    //   form4:        "Zaggle4.jpg",
    //   form4Needy:   "Zaggle4Needy.jpg",
    //   form5:        "Zaggle5.jpg",
    //   form5Needy:   "Zaggle5Needy.jpg"
    // }

// // using our imageUrl to add image to the page
// const $imageElement = $("<img>"); //Creates image element
// $imageElement.attr("src",)  // Set Src for the img element
// $("body").append($imageElement)
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
//  Egg Logic:
//  Notagotchi starts in egg form
//    Egg form displays egg image
//    Egg form cannot age
//    Egg form cannot go hungry, sleepy, or grow bored

//  Notagotchi stays in egg form forever unless "hatched"
//  Notagotchi "hatches" to first form when any Need button is clicked
//  Notagotchi egg is brought back 5 seconds after Notagotchi death
//  Cycle repeats

// class notagotchiEgg {
//   constructor() {
//     this.food = 99999;
//     this.fun = 99999;
//     this.sleep = 99999;
//     this.age = -99999;
//   }
//   hatch();
// }
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
//  lifeCycle
//    eggStage
//    aliveStage
//    deathStage
//    When notagotchi dies, display RIP image for 5 seconds
//    Return to egg cycle

//  Death Logic:
//  Display Death Image
//  Display and run Egg function

//  Life Logic:
//  Perhaps use lifeStatus, egg, alive, dead
//  Notagotchi begins in egg
//  Notagotchi "age" one "level" every 7 minutes
//  Each "age" has a new image to update
//  Will eventually die of old age

////////////////////////////////////////////////////////////////////////////////
