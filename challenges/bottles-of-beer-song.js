/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE
var beerSong = function(){
//Iterating through a for loop initialized at 5 counting down to 0
  for (var i = 5; i >= 0; i--) {
    if (i == 0) {
//If statement to set when i == 0 condition
      console.log("No more bottles of beer on the wall...");
      console.log("Time to go buy more beer!")
//If statement to set when i == 1 condition
    } else if (i == 1) {
      console.log(i + " bottle of beer on the wall,");
      console.log(i + " bottle of beer!");
    } else {
      console.log(i + " bottles of beer on the wall,");
      console.log(i + " bottles of beer!");
    }
  }
};
// beerSong();
