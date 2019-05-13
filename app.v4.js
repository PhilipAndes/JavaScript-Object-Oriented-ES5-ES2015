// Now we want to create a person object again, and have a customer object that inherit it's prototype

// Person Constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Philip', 'Andes');

console.log(person1.greeting());

// So lets create the Customer constructor now, it will also take in a phone number and membership like standard or simple etc
function Customer(firstName, lastName, phone, membership){
    // So what we want to do here is, call person:
    Person.call(this, firstName, lastName);
    // So call is a function that allows us to call another function from somewhere else in the parent context, the first parameter is going to be this and after that we want whatever properties are in the constructor we are inheriting, so in this case, firstName and lastName
    //And then after that whatever extra properties we have for customer, so in this case phone and membership, we just need to asign as we would do normaly:
    this.phone = phone;
    this.membership = membership;
}

// So lets create a customer now:
// const customer1 = new Customer('Tom', 'Smith', '06 123 456 78', 'Standard');

// console.log(customer1);

// // Lets see what happends if we do:
// console.log(customer1.greeting());
// we get an error, so it is not yet inheriting the prototype

//////////////////////////////////////////////////////////////////////////

// So lets add another couple lines of code for that to happen:

// // Inherit the Person prototype methods:

// Customer.prototype = Object.create(Person.prototype);

// // So when you run it, you get Hello Tom Smith

// const customer1 = new Customer('Tom', 'Smith', '06 123 456 78', 'Standard');

// console.log(customer1);

// console.log(customer1.greeting());

//////////////////////////////////////////////////////////////////////////

// When you click on prototype you can see we have 'Person', we actualy want this to return a customer, so we have to write another line:

Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 'Smith', '06 123 456 78', 'Standard');

console.log(customer1);

// console.log(customer1.greeting());

// This will still do the same thing, but when you click on it, you can see we are using the Customer constructor

//////////////////////////////////////////////////////////////////////////

// We should be able to overwrite Person prototype with new prototypes, so for example if we want to create a seperate greeting for customers:

// Custom greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company!`;
}

console.log(customer1.greeting());