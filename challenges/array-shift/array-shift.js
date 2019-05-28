const arrayShift = (arr, val) => {
  let newArr = [];
  let i = 0
  for(i; i < Math.floor(arr.length / 2); i++) {
    newArr[i] = arr[i];
  }
  newArr[i] = val;
  for(i; i < arr.length; i++) {
    newArr[i+1] = arr[i];

  }
  return newArr;
}