/*
    Convert number to reversed array of digits.

    Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

    Example(Input => Output):
        35231 => [1,3,2,5,3]
        0 => [0]
*/

// Solution: 1 __________________(My solution)
function digitize(n) {
  const strArr = n.toString().split("").reverse();
  const intArr = strArr.map((num) => Number(num));

  return intArr;
}
// digitize(123);

// -----------------------------------------------------------

// Solution: 2 __________________
function digitize(n) {
  return String(n)
    .split("")
    .reverse()
    .map((str) => Number(str));
}
// digitize(123);

// -----------------------------------------------------------

// Solution: 3 __________________
function digitize(n) {
  return (n + "")
    .split("")
    .map((str) => parseInt(str))
    .reverse();
}
console.log(digitize(123));
