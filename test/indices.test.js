const { expect } = require("expect");
const findAllIndices = require("../src/indices");

test("Returns [0, 19] for 'the fox jumps over the dog', 'the'", ()=>{
  expect(findAllIndices('the fox jumps over the dog', 'the')).toStrictEqual([0, 19]);
})

test("Returns [] for 'the fox jumps over the dog', 'brown'", ()=>{
  expect(findAllIndices('the fox jumps over the dog', 'brown')).toStrictEqual([]);
})

test("Returns [5, 14, 24] for 'the fox jumps over the dog', 'o'", ()=>{
  expect(findAllIndices('the fox jumps over the dog', 'o')).toStrictEqual([5, 14, 24]);
})

test("Returns [3, 7, 13, 18, 22] for 'the fox jumps over the dog', ' '", ()=>{
  expect(findAllIndices('the fox jumps over the dog', ' ', 'o')).toStrictEqual([3, 7, 13, 18, 22]);
})