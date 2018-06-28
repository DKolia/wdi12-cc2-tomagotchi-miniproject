// Code by David Kolia



// Establishes a new Notagotchi and abilities
class Notagotchi {
  constructor(notaName){
    this.name = notaName;
    this.food = 5;
    this.fun = 7;
    this.sleep = 5;
    this.age = 0;
  }

  //  These fully refill a need
  getFed(){
    this.food = 10;
    $('#infoBar').empty().append('You feed your Notagotchi.');
    $('#currentHunger').text(this.food);
  }
  getRest(){
    this.sleep = 10;
    $('#infoBar').text('You put your Notagotchi to sleep...');
    $('#currentSleepiness').text(this.sleep);
  }
  getFun(){
    this.fun = 10;
    $('#infoBar').text('You play with your Notagotchi!');
    $('#currentBoredom').text(this.fun);
  }

  //  This advances the age and later causes it to die of old age... eventually
  getOlder(){
    this.age  = this.age + 1;
      $('#infoBar').text('Your Notagotchi celebrates a birthday! ' + this.age + " years old!");
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
      if (getRandomInt(0,100) <= 11 ){
        $('#infoBar').text("Your " + notagotchiName + " has passed from old age at " + this.age + " years of age.");
        this.die()
      }
    }
    if (notagotchiOnScreen.age === 6) {
      if (getRandomInt(0,100) <= 31 ){
        $('#infoBar').text("Your " + notagotchiName + " has passed from old age at " + this.age + " years of age.");
        this.die()
      }
    }
    if (notagotchiOnScreen.age === 7) {
      if (getRandomInt(0,100) <= 51 ){
        $('#infoBar').text("Your " + notagotchiName + " has passed from old age at " + this.age + " years of age.");
        this.die()
      }
    }
    if (notagotchiOnScreen.age === 8) {
      if (getRandomInt(0,100) <= 71 ){
        $('#infoBar').text("Your " + notagotchiName + " has passed from old age at " + this.age + " years of age.");
      this.die()
      }
    }
    if (notagotchiOnScreen.age === 9) {
      if (getRandomInt(0,100) <= 91 ){
        $('#infoBar').text("Your " + notagotchiName + " has passed from old age at " + this.age + " years of age.");
      this.die()
      }
    }
    if (notagotchiOnScreen.age >= 10) {
        $('#infoBar').text("Your " + notagotchiName + " has passed from old age at " + this.age + " years of age.");
      this.die()
    }
  }

  //  Death stops time and removes buttons
  die(){
    clearInterval(intervalId);
    $("#petImage").empty().append('<img src="images/Dead.jpg" />');
    $(".needButton").remove()
  }
}

const nameFunction = () => {

}
//  Start button logic
let notagotchiName;
let notagotchiOnScreen;
$('#start-btn').on('click', (e) => {
  $("#start-btn").remove()
  $(".hidden2").removeClass("hidden2")
  notagotchiName = prompt("Please enter a name for your Notagotchi");
  notagotchiOnScreen = new Notagotchi(notagotchiName);
  console.log(notagotchiOnScreen);
  console.log(notagotchiName, " this is notagotchiName in start button listener");
  if (notagotchiName === "") {
    notagotchiName = "Notagotchi";
  }
  startTimer()
});

//  Random Function for age
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
    $('#currentHunger').text(notagotchiOnScreen.food);
    if (notagotchiOnScreen.food <= 0) {
      $('#infoBar').text(notagotchiOnScreen.name + " has passed from hunger...");
      $("#petImage").empty().append('<img src="images/Dead.jpg" />');
      notagotchiOnScreen.die()
    }

    //  Slowly reduces fun supply, possibly to death
    notagotchiOnScreen.fun = notagotchiOnScreen.fun - 1;
    $('#currentBoredom').text(notagotchiOnScreen.fun);
    if (notagotchiOnScreen.fun <= 0) {
      $('#infoBar').text(notagotchiOnScreen.name + " has died of boredom...");
      $("#petImage").empty().append('<img src="images/Dead.jpg" />');
      notagotchiOnScreen.die()
    }

    //  Slowly reduces rest supply, possibly to death
    notagotchiOnScreen.sleep = notagotchiOnScreen.sleep - 1;
    $('#currentSleepiness').text(notagotchiOnScreen.sleep);
    if (notagotchiOnScreen.sleep <= 0) {
      $('#infoBar').text(notagotchiOnScreen.name + " has passed from unrest...");
      $("#petImage").empty().append('<img src="images/Dead.jpg" />');
      notagotchiOnScreen.die()
    }

  }, 1000);
}



//  This is the base/starting image and buttons that fufill needs
$("#petImage").append('<img src="images/NewZaggle.jpg" />');
$("#feedButton").on("click",() => {
  notagotchiOnScreen.getFed()
});
$("#sleepButton").on("click",() => {
  notagotchiOnScreen.getRest()
});
$("#funButton").on("click",() => {
  notagotchiOnScreen.getFun()
});
