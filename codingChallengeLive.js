'use strict';
// grabbing elements from DOM
const textArea = document.querySelector('textArea');
const convertButton = document.querySelector('button');

// making sure they are selected
console.log(textArea);
console.log(convertButton);

// create new array for camel variables
let camelVars = [];

// adding event listeners to elements
// need event listener for textarea? unsure
convertButton.addEventListener('click', function () {
  console.log('button works'); // testing that button works

  console.log(textArea.value); // testing that textarea input works

  // create new array containing underscore case variables
  let underscoreVars = textArea.value.split('\n');

  console.log(underscoreVars); // checks for input

  for (let i = 0; i < underscoreVars.length; i++) {
    // convert all strings to lowercase first
    // trim strings, get rid of erroneous spaces
    camelVars[i] = underscoreVars[i].toLowerCase().trim();

    // split input variable into two halves
    let [firstHalf, secondHalf] = camelVars[i].split('_');
    console.log(firstHalf, secondHalf);

    // set first letter of second half of variable to its
    // own variable
    let secondHalfFirstLetter = secondHalf[0].toUpperCase();

    // join together first half, second half first letter, and
    // second half of variable beginning at position 1, excluding
    // the first letter
    camelVars[i] = [
      `${firstHalf}${secondHalfFirstLetter}${secondHalf.slice(1)}`,
    ].join();

    // let underscoreIndex = camelVars[i].indexOf('_');
    // camelVars[i] = camelVars[i][underscoreIndex + 1].toUpperCase();
    console.log(camelVars); // check new array
  }
});

// (C) Joe Watkins 2021
