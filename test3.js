/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return true if you're better, else false!
Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
*/

let test = [60, 70, 50];
let myScore = 65;
let sum = 0;

for (let i = 0; i < test.length; i++) {
  sum += test[i];
}
let average = sum / test.length;
if (myScore > average) {
  console.log(true);
} else {
  console.log(false);
}
