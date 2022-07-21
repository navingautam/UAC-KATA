# UAC Kata

A simple javascript code to solve programming task by UAC

## The Task

The task is to implement follwing functions:

#### A function to return all the indices of occurence of a specified value in a string without using the built-in indexOf function or similar

```javascript
function findAllIndices(stringToCheck, specifiedValue) {
  //
}
```

**_Example outputs_**

findAllIndices('the fox jumps over the dog', 'the')
// expecting [0, 19]

findAllIndices('the fox jumps over the dog', 'brown')
// expecting []

findAllIndices('the fox jumps over the dog', 'o')
// expecting [5, 14, 24]

findAllIndices('the fox jumps over the dog', ' ');
// expecting [3, 7, 13, 18, 22]

#### A function to get the intersection of a list of arrays

```javascript
function intersect(listOfArrays) {
  //
}
```

**_Example outputs_**

intersect([[7, 3, 6, 10], [9, 10, 3]])
// return [10, 3]

intersect([[9, 10, 3], [7, 3, 6, 10], [3, 7]])
// return [3]

intersect([[2, 3], [4, 5]])
// return []

intersect([[2, 3, 5]])
// return [2, 3, 5]

#### A function that checks if an array of integers is monotonic

A monotonic array has its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

```javascript
const isMonotonic = (array) => {
  //
};
```

**_Example outputs_** \***\*monotonic\*\***
[]
[1]
[1, 2]
[1, 1, 1, 1, 1, 1]
[1, 1, 2, 2, 3, 4, 4, 5]
[5, 4, 4, 3, 2, 2, 1, 0, 0, -1]
[-1, -5, -10, -1100, -1100, -1101, -2000]
[1, 5, 10, 1100, 1101, 1102, 2000]

\***\*NOT monotonic\*\***
[1, 2, 4, 3]
[5, 5, 4, 3, 3, 1, 2, 0]
[-1, -5, -10, -1100, -900, -1101, -1102, -2000]
[1, 2, 0]
[1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11]

## Solution

Javascript is chosen for this solution. I have tried to keep this solution as simple as possible.

If this solution is to be extended, the functions can serve as service layer and API or other interactive apps can be created on top of it to allow users to input data/parameters and get the result back.

#### Project Structure

- src: This folder has 3 different files for implementing code for each of the challenges
  - indices.js: This file has implementation for findAllIndices function that returns all the indices of occurence of a specified value in a string
  - intersect.js: This file has implementation for intersect function that get the intersection of a list of array
  - monotonic.js: This file has implementation for checking if an array of integers is monotonic
- index.js: This has sample input and call to the above three functions. This file will be executed when `npm start` is run on the folder.
- test: This folder has 3 test files for each function. Each test files has test cases for their respective functions.

## Instructions

### Running Locally

- You need to install latest nodejs to run this project
- Clone or download the repo
- Open the terminal
- CD to the folder
- Do `npm install`
- Run `npm start`. This will run index.js with predefined sample arguments passed into the functions and generate results as expected in the challenge

### Running test

Jest is used for unit testing.

- You need to install latest nodejs to run this project
- Clone or download the repo
- Open the terminal
- CD to the folder
- Do `npm install`
- Run `jest`. This will run all 3 test files and 20 test cases.
