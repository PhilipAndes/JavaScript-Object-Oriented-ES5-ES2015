// String

// const name1 = 'Philip';
// const name2 = new String('Philip');

// console.log(name1);

// console.log(name2);
// As you can see we get name2 as an object

// So one thing we can do as we do it like this, we can add properties to it like:

// name2.lastname = 'Andes';

// There is not many reasons you want to do it like this, but just notice you can.. 

//////////////////////////////////////////////////////////////////////////

// So where you can run in trouble with this, is when you are matching types.. 

const name1 = 'Philip';
const name2 = new String('Philip');

// name 1 will give an string:
console.log(typeof name1);

// name 2 will give an object:
console.log(typeof name2);

// So for example when you also check for the same type:

if (name1 === 'Philip') {
    console.log(`${name1} in name1 is the same type`)
} else {
    console.log(`${name1} in name1 is not the same type`)
}
// this will give a string

if (name2 === 'Philip') {
    console.log(`${name2} in name2 is the same type`)
} else {
    console.log(`${name2} in name2 is not the same type`)
}
// this will give a object

// But if you just look for the same value it will show, just not when you also check for the type.

//////////////////////////////////////////////////////////////////////////

// Same for numbers:
const num1 = 5;
const num2 = new Number(5);

// Same for Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Functions 
const getSum1 = function(x, y) {
    return x + y;
}

console.log(getSum1(1,1));

// The last set will be the body
const getSum2 = new Function('x', 'y', 'return 1 + 1');

console.log(getSum2(1,1));

// You can also do this with objects:
const philip1 = {name: 'Philip'};
console.log(philip1);

const philip2 = new Object({name: 'Philip'});
console.log(philip2);

// Arrays
const arr1 = [1, 2, 3];
console.log(arr1);

const arr2 = new Array(1,2,3);
console.log(arr2);

// Regular expressions:
const re1 = /\w+/;
console.log(re1);

const re2 = new RegExp('\\w+');
console.log(re2);