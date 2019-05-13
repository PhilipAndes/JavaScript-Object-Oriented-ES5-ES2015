// Each object in javascript has a prototype, and each prototype is a object itself, all objects inherit there properties and methods from there prototype

// So when you are dealing with object literals then you are inheriting from a object called: Object.prototype
// And when you are dealing with objects that were created true an constructor (like for instance the Person constructor we created on the first lesson) it's gonna come from: Person.prototype

// So lets use the person constructor from the first lesson, the only difference here is that we have a first and last name:
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

const philip = new Person('Philip', 'Andes', '11-28-1988');
const john = new Person('John', 'Doe', 'March 20 1978');

// console.log(john);

// as you can see there is also an prototype attached, we can't approach it as we would do normally. When we click on it, we can see it represents the Person.prototype (as mentioned on top), so anything we put in the Person.prototype will show up in here.

// Notice there is another prototype, this represents Object.prototype (as mentioned on top), which is kinda the top of the chain and this has its own properties and methods

// As you can see above in the person constructor everyone is going to have different firstname, lastname and birthday, but the calculateAge function is going to be the same for everyone, so this needs to be put in the prototype and not directly in the object:

// Calculate age:
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

console.log(john);

// As you can see now, the calculateAge function is in the prototype now, we can use this as we did before:

console.log(philip.calculateAge());

// Lets create another prototype method, Get full name:
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

console.log(philip.getFullName());

// If we put it in the prototype like this, we are not floating our constructors with these functions

///////////////////////////////////////////////////////////////////

// So far we are only getting data from the prototypes, we can also manipulate the data. 

// Gets Married, lets say john gets married and changes his last name

Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

console.log(john.getFullName());

john.getsMarried('Smith');

console.log(john.getFullName());

///////////////////////////////////////////////////////////////////

// We also have access to object.prototype, so for example look at hasOwnProperty, this will look to the object and look for what properties it has, in our example on top, it has, firstName, lastName and birthday, so we can simply say:

console.log(john.hasOwnProperty('firstName'));
// this will output true

// So when you look for getFullName:
console.log(john.hasOwnProperty('getFullName'));
//Will output false, even because we can use that it is not a actually property, (it is in the prototype so no part of it's own property)

