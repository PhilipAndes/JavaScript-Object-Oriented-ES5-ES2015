// It's basically just key - value pairs, it can be different types like numbers, strings, dates etc:

// const philip = {
//     name: 'Philip',
//     age: 30
// }

// console.log(philip);

// console.log(philip.age);

// So this is an object literal above and it's fine for a lot of cases to do it like this if you are just dealing with one object or one instance, but if you want to create multiple instances of some kind of object you want to create a constructor. (also if you want to go into prototypes and inherit you need to know about constructors)

////////////////////////////////////////////////////////////////////////

// Person constructor

// So let's define an function called Person, constructors should start with an capital:

// function Person() {
//     // So this is an constructor which has one property called name:
//     this.name = 'Philip';
//     // Just by writing it like this, we can instantiate an person object from this, see rule 28
// }

// To instantiate an object we use the 'new' keyword:

// const philip = new Person();

// console.log(philip)

// // We can create as many people as we want now:

// const john = new Person();

// console.log(john);

// As you can see john will also have the name Philip, because we hard coded it above, so what we can do, see below

////////////////////////////////////////////////////////////////////////

// We should take in a argument like:
// function Person(name) {
//     this.name = name;
// }

// const philip = new Person('Philip');

// console.log(philip);

// const john = new Person('John');

// console.log(john);

///////////////////////////////////////////////////////////////////////

// The this keyword if very important, what this does is it refers to the current instance of the object, so in this case it points to the person, and this function scope.

// function Person(name) {
//     this.name = name;
//     // use this inside the function will give the names philip and john defined below:
//     console.log(this);
// }

// const philip = new Person('Philip');

// const john = new Person('John');

// // We can also use it outside the function scope in the global scope:

// console.log(this);

// // We get the window object, and now we could do something like:

// this.alert(1);

// As alert() is also part of the window object

////////////////////////////////////////////////////////////////////////

// We can add other properties as wel: 
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const philip = new Person('Philip', 30);
// const john = new Person('John', 40);

// console.log(philip.age);

/////////////////////////////////////////////////////////////////////////

// Lets add the birthday, we want it to be a date so we are going to say this.birthday = new Date(dob):

// function Person(name, dob) {
//     this.name = name;
//     this.birthday = new Date(dob);
//     // notice we use the new Date because this is an core constructor
// }

// const philip = new Person('Philip', '11-28-1988');
// // here we can use different kinds of dates, like slash or november 28 and the date will understand it
// console.log(philip);

/////////////////////////////////////////////////////////////////////////


function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    // Now let's create a method on this constructor new Date:
    this.calculateAge = function() {
        // Lets calculate the age from the birthday
        // There is many ways to do this, we are going to do it like this, we are going to substract the get time method of the birthday from today's date:
        const diff = Date.now() - this.birthday.getTime();
        // Then we create another variable for the value we get from the diff variable
        const ageDate = new Date(diff);
        // Then we want to return the agedate and call a method called getUTCFullYear(), which gives us the year and specified date according to the universal time, and from there we just want to substract 1970. (this is a lot used formulae to calculate a age from a birthday), we also want to wrap it in Math.abs (absolute) to make sure it is an absolute number (Also notice that Math is one of the keywords you dont have to use 'new' for)
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const philip = new Person('Philip', '11-28-1988');
// here we can use different kinds of dates, like slash or november 28 and the date will understand it
console.log(philip.calculateAge());


