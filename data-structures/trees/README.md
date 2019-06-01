# Trees
Javascript implementations of binary tree and binary search tree data structures

## Challenge
Using node objects, create tree class objects that have the functionality sort the containing values, add values, and search for a given value.

## Approach & Efficiency
Both `tree.js` and `binary-search-tree.js` make use of Node class objects that have variables to reference a value, a left node, and a right node.  The Tree class objects have a constructor that build a tree with a root node of a given value.

Depth-first traversals are performed recursivly and make use of an array to hold the values.  For the binary search tree, integer values are added recursivly as well, with lower values going to the left and higher values going to the right.  After each check the recursion will move the current node to the respective lower node.  The `contains(value)` function will perform a traversal and check weach node's value, and if found will return a boolean true, otherwise a boolean false is returned.