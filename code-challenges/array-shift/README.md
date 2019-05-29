# Shift an Array

## Challenge
Write a function that takes in an array and a value. Return an array with the value inserted into the center of the array.  Built in methods may not be used.

## Approach & Efficiency
This solution uses a for loop and an iterating index together to build a new array.  It will first loop for half the length of the array, moving values from the input array to the new array.  Math.floor() is used to retrieve an integer even with odd lengths.  After the halfway point it will exit the loop and add the input value to the new array at the index.  A new loop will start, adding the rest of the values from the input array, but this time into the new array at index + 1.  The new array is then returned.