// Algorithm:
// Input list of numbers as a pre HTML element
// Convert those to array using .split(' ') (with space in between)
// Iterate through the array and place every number into list 1 and list 2
// Use sort method on both arrays
// Find method or use for loop to compare values at same index of each array
// Subtract these values and takes abs value
// Push difference to "distance" array

let list1 = [];
let list2 = [];
let distance = 0;

const polishArray = () => {
  const longList = document.querySelector("#list").textContent;
  const longListArray = longList.split("   ");
  const trimmedArray = longListArray
    .map((input) => input.trim()) // Trim each string
    .filter((input) => input !== "");
  for (let i = 0; i < trimmedArray.length; i++) {
    i % 2 === 0 ? list1.push(trimmedArray[i]) : list2.push(trimmedArray[i]);
  }
  list1.sort((a, b) => a - b);
  list2.sort((a, b) => a - b);
};

const firstFunction = () => {
  polishArray();
  for (let i = 0; i < list1.length; i++) {
    distance += Math.abs(Number(list1[i]) - Number(list2[i]));
  }
};
firstFunction();

const secondFunction = () => {
  let similarity = 0;
  list1.forEach((num) => {
    let tally = 0;
    for (let i = 0; i < list1.length; i++) {
      if (Number(list2[i]) === Number(num)) {
        tally += 1;
      }
    }
    similarity += tally * num;
  });
  console.log(similarity);
};
secondFunction();
