const getIntersection = (firstArray, secondArray) => {
   const result = [];
   for(let i = 0; i < firstArray.length; i++){
      if(!secondArray.includes(firstArray[i])){
         continue;
      };
      result.push(firstArray[i]);
   };
   return result;
};

function intersect(listOfArrays){
  let res = listOfArrays[listOfArrays.length - 1].slice();
  for(let i = listOfArrays.length - 2; i >= 0; i--){
    res = getIntersection(res, listOfArrays[i]);
  };
  return res;
};

module.exports = intersect;