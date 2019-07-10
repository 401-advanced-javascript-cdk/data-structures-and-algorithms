'use strict';

const areThereIslands = graph => {
  let nonIslands = {};
  for(let key in graph.adjacencyList) {
    let current = graph.adjacencyList[key].head;
    while (current) {
      if(!nonIslands[current.value]) {
        nonIslands[current.value] = true;
      }
      current = current.next;
    }
  }
  for(let key in graph.adjacencyList) {
    if(!nonIslands[key] && graph.adjacencyList[key].head === null) {
      return true;
    }
  }
  return false;
}

module.exports = areThereIslands;