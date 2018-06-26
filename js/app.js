console.log("Hello there!");

//  Life Logic:
//  Notagotchi begins in egg
//  Notagotchi "age" one "level" every 7 minutes
//  Each "age" has a new image to update
//  Will eventually die of old age
//  When notagotchi dies, display RIP image for 5 seconds


//  Death Logic:
//  Notagotchi dies when any Need falls to zero
//  Notagotchi dies when maximumLifeSpan is met- no matter what
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
//  Aging (10% chance @ age 5, 30% change @ age 6, 50% chance at age 7, 70% chance at age 8, 90% chance at age 9, 100% chance dead by age 10  // Function to Class
//  gameClock (real life full seconds)   // Set Interval Function

// Starting stats of a Notagotchi
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
    console.log("Your Notagotchi celebrates a birthday!");
    console.log("Your Notagotchi is " + this.age + " years old!");
  }

}
// // using our imageUrl to add image to the page
// const $imageElement = $("<img>"); //Creates image element
// $imageElement.attr("src=/images/NewZaggle.jpg")  // Set Src for the img element
// $("body").append($imageElement)


const harry = new Notagotchi();


//  Hunger Function:
//  Food level counts one-by-one down to zero every five minutes


//  Boredom Function:
//  Fun level counts one-by-one down to zero every five minutes


//  Sleepiness Function:
//  Sleep level counts one-by-one down to zero every five minutes


// // using our imageUrl to add image to the page
// const $imageElement = $("<img>"); //Creates image element
// $imageElement.attr("src",)  // Set Src for the img element
// $("body").append($imageElement)
