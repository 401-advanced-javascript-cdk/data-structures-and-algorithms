# Singly Linked List
Creating a linked list data structure in JavaScript.

## Challenge
Create a linked list constructor with nodes that contain data and a pointer to the next node in the list.

## Approach & Efficiency
This list is a Javascript object with a reference to a node object in the head.  Node object's hold data and a reference to the next node in the node's `next`.

## API
* `.insert(data)` -- Create a new node with data and attach to the front of the list.  
* `.append(data)` -- Create a new node with data and attach to the end of the list.
* `.includes(value) -- Traverses the list, checking the value against that nodes data.  Return `true` if found, return `false` if not.
* `print()` -- Traverses the list and appends the data of each node to a results string.  Return the string.

##=============================================

# Linked List Insertions
These methods insert new node into the array, either before or after a target node.

## Approach & Efficiency
These use while loops to traverse the list.  The worst case would be to traverse the whole length of the array, so the time would be O(n).

## Solution