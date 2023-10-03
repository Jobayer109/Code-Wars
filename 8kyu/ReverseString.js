/*
    Reversed strings.
      Complete the solution so that it reverses the string passed into it.
    Examples:
      'world'  =>  'dlrow'
      'word'   =>  'drow' 
*/

// solutions:

function solution(str) {
  return str.split("").reverse().join("");
}
