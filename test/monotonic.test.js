const { expect } = require("expect");
const isMonotonic = require("../src/monotonic");

test("Returns true for []", ()=>{
  expect(isMonotonic([])).toStrictEqual(true);
})

test("Returns true for [1]", ()=>{
  expect(isMonotonic([1])).toStrictEqual(true);
})

test("Returns true for [1, 2]", ()=>{
  expect(isMonotonic([1, 2])).toStrictEqual(true);
})

test("Returns true for [-1, -5, -10, -1100, -1100, -1101, -2000]", ()=>{
  expect(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -2000])).toStrictEqual(true);
})

test("Returns true for 1, 5, 10, 1100, 1101, 1102, 2000]", ()=>{
  expect(isMonotonic([1, 5, 10, 1100, 1101, 1102, 2000])).toStrictEqual(true);
})

test("Returns true for [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]", ()=>{
  expect(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11])).toStrictEqual(true);
})

test("Returns true for [5, 4, 4, 3, 2, 2, 1, 0, 0, -1]", ()=>{
  expect(isMonotonic([5, 4, 4, 3, 2, 2, 1, 0, 0, -1])).toStrictEqual(true);
})

test("Returns false for [-1, -5, -10, -1100, -900, -1101, -1102, -2000]", ()=>{
  expect(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -2000])).toStrictEqual(false);
})

test("Returns false for [1, 2, 0]", ()=>{
  expect(isMonotonic([1, 2, 0])).toStrictEqual(false);
})

test("Returns false for [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11]", ()=>{
  expect(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11])).toStrictEqual(false);
})

test("Returns false for [1, 1, 1, 2, 3, 4, 1]", ()=>{
  expect(isMonotonic([1, 1, 1, 2, 3, 4, 1])).toStrictEqual(false);
})

test("Returns false for [1, 2, 3, 3, 2, 1]", ()=>{
  expect(isMonotonic([1, 2, 3, 3, 2, 1])).toStrictEqual(false);
})

