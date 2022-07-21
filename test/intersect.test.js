const { expect } = require("expect");
const intersect = require("../src/intersect");

test("Returns [10, 3] for [[7, 3, 6, 10], [9, 10, 3]]", ()=>{
  expect(intersect([[7, 3, 6, 10], [9, 10, 3]])).toStrictEqual([10, 3]);
})

test("Returns [3] for ([[9, 10, 3], [7, 3, 6, 10], [3, 7]]", ()=>{
  expect(intersect([[9, 10, 3], [7, 3, 6, 10], [3, 7]])).toStrictEqual([3]);
})

test("Returns [] for [[2, 3], [4, 5]]", ()=>{
  expect(intersect([[2, 3], [4, 5]])).toStrictEqual([]);
})

test("Returns [2, 3, 5] for ([[2, 3, 5]]", ()=>{
  expect(intersect([[2, 3, 5]])).toStrictEqual([2, 3, 5]);
})