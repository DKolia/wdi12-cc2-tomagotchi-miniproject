console.log("Hello there!");

//  Life Logic:
//  Perhaps use lifeStatus, egg, alive, dead
//  Notagotchi begins in egg
//  Notagotchi "age" one "level" every 7 minutes
//  Each "age" has a new image to update
//  Will eventually die of old age
//  When notagotchi dies, display RIP image for 5 seconds


//  Death Logic:
//  Notagotchi dies when any Need falls to zero
//  Display Death Image
//  console.log("Your Notagotchi has perished, but it wanted to say goodbye with a gift...");
//  Display and run Egg function

//  Egg Logic:
//  Notagotchi starts in egg form
//  Notagotchi stays in egg form forever until...
//  Notagotchi "hatches" to first form when any Need button is clicked
//  Notagotchi egg is brought back 5 seconds after Notagotchi death
//  Cycle repeats


//  Variables to name:
//  gameClock (real life full seconds)   // Set Interval Function

// Starting class/stats of a Notagotchi
class Notagotchi {
  constructor(){
    this.food = 3;
    this.fun = 5;
    this.sleep = 3;
    this.age = 0;
  }
  getFed(){
    this.food = 10;
    //  Clicking "feed" button displays food image for 3 seconds
    console.log("Your Notagotchi is fed.");
    console.log(this.food);
  }
  getRest(){
    this.sleep = 10;
    //  Clicking "rest" button displays sleep image for 3 seconds
    console.log("Your Notagotchi is asleep.");
    console.log(this.sleep);
  }
  getFun(){
    this.fun = 10;
        //  Clicking "play" button displays play image for 3 seconds
    console.log("You play with your Notagotchi");
    console.log(this.fun);
  }
  getOlder(){
    this.age  = this.age + 1;
    //  Happens every 7 min if lifeStatus=Alive
    console.log("Your Notagotchi celebrates a birthday!");
    console.log("Your Notagotchi is " + this.age + " years old!");
    //  if age === 5, 10% chance of Death, Run Death Logic
    //  if age === 6, 30% chance of Death, Run Death Logic
    //  if age === 7, 50% chance of Death, Run Death Logic
    //  if age === 8, 70% chance of Death, Run Death Logic
    //  if age === 9, 90% chance of Death, Run Death Logic
    //  if age === 10, 100% chance of Death, Run Death Logic
  }
}

const harry = new Notagotchi();


//  Hunger Function:
//  Food level counts one-by-one down to zero every five minutes
    //this.food -1 per 5 minutes
    //if lifeStatus=dead do not run.
    //if lifeStatus=egg do not run.

//  Boredom Function:
//  Fun level counts one-by-one down to zero every five minutes
    //this.fun -1 per 5 minutes
    //if lifeStatus=dead do not run.
    //if lifeStatus=egg do not run.

//  Sleepiness Function:
//  Sleep level counts one-by-one down to zero every five minutes
    //this.sleep -1 per 5 minutes
    //if lifeStatus=dead do not run.
    //if lifeStatus=egg do not run.





    let imagesLibrary = {
      asleep:       "Asleep.jpg",
      dead:         "Dead.jpg",
      food:         "Food.jpg",
      fun:          "Fun.jpg",
      egg:          "NewZaggle.jpg",
      form1:        "Zaggle1.jpg",
      form1Needy:   "Zaggle1Needy.jpg",
      form2:        "Zaggle2.jpg",
      form2Needy:   "Zaggle2Needy.jpg",
      form3:        "Zaggle3.jpg",
      form3Needy:   "Zaggle3Needy.jpg",
      form4:        "Zaggle4.jpg",
      form4Needy:   "Zaggle4Needy.jpg",
      form5:        "Zaggle5.jpg",
      form5Needy:   "Zaggle5Needy.jpg"
    }

// // using our imageUrl to add image to the page
// const $imageElement = $("<img>"); //Creates image element
// $imageElement.attr("src",)  // Set Src for the img element
// $("body").append($imageElement)
