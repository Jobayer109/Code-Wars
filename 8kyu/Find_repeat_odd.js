/*
    Find repeated odd number from an array.
*/
//-------------------------------------------------------------->>

// Solution: 1 _________________________________
function findOdd(arr, target) {
  let count = 0;
  for (let v of arr) {
    if (v === target && target % 2 !== 0) {
      count++;
    }
  }
  return count;
}

const array = [20, 1, 2, 3, 3, 5, 5, 1, 2, 4, 20, 4, 2, 5];
findOdd(array, 1);
