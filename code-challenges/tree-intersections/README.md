# Find Intersecting values in two trees
## Authors: Chris

## Challenge
Given two trees, find and return all values that are in both trees

## Approach & Efficiency
two recursive helper methods are used.  One traverses the tree, creating an object with the node values as the keys.  The other checks if the value is in the object, and adds it to an array if it is.  After both methods complete, the array is returned if it has length, otherwise null is returned.

Time complexity is O(n^2) as it needs to add the values of one tree to an object, then it needs to check all values of the other tree against that object.  Space is O(2n) = O(n) because an object and an array is created, both dependant on the number of nodes in the tree.

## Solution
![Find Tree Intersections](../assets/tree-intersections.jpg)