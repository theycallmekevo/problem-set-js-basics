/*
  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.
  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography
*/
// YOUR CODE HERE
//function that returns true if an imput value is prime, false if not
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
// isPrime(5);

// function for generating all prime numbers up to a given value
function primeMax(value) {
    for (var i = 2; i < value; i++) {
        if ( value % i === 0 ) {
            return false;
        }
    }
    return true;
}
function display(n) {
    var arr = [2];
    for (var i = 3; i < n; i+=2) {
        if ( primeMax(i) ) {
            arr.push(i);
        }
    }
    console.log(arr);
}

// display(21);
