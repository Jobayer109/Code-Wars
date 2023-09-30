/*
    Sum of positive number of an array.
*/

// Solution: 1 _________________________________
const array = [1, -4, 7, 12];
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const result = positiveSum(array); // 20

// --------------------------------------------------------------------->>

// Solution: 2 _________________________________
const positiveSum2 = (arr) => {
  return arr.filter((value) => value > 0).reduce((a, b) => a + b, 0);
};

positiveSum2(array);

// --------------------------------------------------------------------->>

// Solution: 3 _________________________________
function positiveSum3(arr) {
  let sum = 0;
  for (let v of arr) {
    sum += v;
  }
  return sum;
}
positiveSum([12, -8, 8, 10]); // 30

// --------------------------------------------------------------------->>

// Solution: 3 _________________________________
