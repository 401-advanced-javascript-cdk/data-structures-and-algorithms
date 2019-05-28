# Array Binary Search

## Challenge
Write a function that takes in an array and value, and returns the index of the location of that value in the array.  The array should be sorted from low values to high values.  The value should be a value to search for in the array. No built in functions should be used.

## Approach & Efficiency
This uses `low`, `middle`, and `high` variables to track the position in the array.

While Loop:
1.  If `low` is greater than `high`, the search value is not in the array.  Return -1.
2.  `middle` is set to the sum of `high` and `low` divided by two.  
3.  The value at `array[middle]` is evaluated.

    a. If `array[middle]` is lower than the search value, `low` is set to `middle` plus one.
    
    b. Else If `array[middle]` is higher than the search value, `high` is set to `middle` minus one.

    c. Else If `array[middle]` is equal to the search value, the loop is broken and `middle` is returned.

The longest it would take to traverse would be the length of the array.  The time complexity is O(log n)

## Solution
![array binary search]()