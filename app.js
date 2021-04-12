'use strict';

function sum(a, b) {
let z = a + b 
return [ z ,'The sum of ' + a + ' and ' +b + ' is ' + z +'.']
}

testSum(4, 7);


function multiply(a, b) {
let z = a * b 
return [z , 'The product of '+ a + ' and '+b + ' is ' + z + '.']
}

 testMultiply(5,9);


function sumAndMultiply(a, b, c) {
  //eslint-disable-line
  let x=sum(sum(a,b)[0],c)[0];
  let y=multiply(multiply(a,b)[0],c)[0];
  return[x,y,`${a} and ${b} and ${c} sum to ${x}.`,`The product of ${a} and ${b} and ${c} is ${y}.`]

}

 testSumAndMultiply(4,7,5);



let testArray = [2, 3, 4]; 

function sumArray(sumArr) {
  
 sumArr = testArray
let z = sumArr[0]+sumArr[1]+sumArr[2]
return [z,sumArr[0]+','+ sumArr[1] +','+ sumArr[2] +' was passed in as an array of numbers, and '+z+' is their sum.']
}


 testSumArray(testArray);

function multiplyArray(multArr) {
multArr = testArray
let z = multArr[0]*multArr[1]*multArr[2]
return [z,'The numbers '+multArr[0]+','+ multArr[1] +','+ multArr[2] +' have a product of '+z+'.']
}


 testMultiplyArray(testArray);


let testDynamicArray = [1, 2, 3, 4, 5]; 

function multiplyAnyArray(dynamicArray) {
  dynamicArray = testDynamicArray
  let z = dynamicArray[0]*dynamicArray[1]*dynamicArray[2]*dynamicArray[3]*dynamicArray[4]
  return [z,'The numbers '+dynamicArray[0]+','+ dynamicArray[1] +','+ dynamicArray[2] +','+ dynamicArray[3] +','+ dynamicArray[4]+' have a product of '+z+'.']
}

testMultiplyAnyArray(testDynamicArray);

