# Find Intersecting values in two trees

## Challenge

Given two trees, find and return all values that are in both trees

## Approach & Efficiency

Two recursive helper methods are used.  One traverses the tree, creating an object with the tree's node values as the keys.  The other checks if the value is in the object, and adds it to an array if it is.  After both methods complete, the array is returned if it has a length greater than zero, otherwise null is returned, signifying that there are no intersecting values.

Time complexity is O(n2) = O(n) as it needs to iterate over both trees.  The first adds the values of one tree to an object, the other needs to check all values of the other tree against that object.  Space is also O(2n) = O(n) because an object and an array are created, both dependant on the number of nodes in the tree used to create either.