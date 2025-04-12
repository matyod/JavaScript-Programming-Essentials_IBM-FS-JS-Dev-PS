// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

// Block scope
{
  var blockVar = "I'm a block-scoped var";
  let blockLet = "I'm a block-scoped let";
  const blockConst = "I'm a block-scoped const";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

console.log(blockVar);
console.log(blockLet); // ReferenceError: blockLet only exists in the block scope
console.log(blockConst); // ReferenceError: blockConst only exists in the block scope

function show(){
  var functionVar = "I'm a block-scoped var in a function";
  let functionLet = "I'm a block-scoped let in a function";
  const functionConst = "I'm a block-scoped const in a function";
}

show();
console.log(functionVar); // ReferenceError: functionVar only exists in the function scope
console.log(functionLet); // ReferenceError: functionLet only exists in the block scope
console.log(functionConst); // ReferenceError: functionConst only exists in the block scope