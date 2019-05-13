// Lets look at inheritance in ES6 classes, and it is actualy better known as sub classes.

// We can create an Person class and then create a sub class called customer, and then extend the person class

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

// Now lets extends this person class with a customer class..

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        // So when we instantiate a customer, since it is extending a person we wanna call the person constructor and we do this with the function super(), this will call the parents class constructor which will take in the two parameters from the person class: 
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    // We can also create customer specific methods as wel:
    static getMemberShipCost() {
        return 500;
    }
}

const philip = new Customer('Philip', 'Andes', '06 123 456 78', 'Standard');

console.log(philip);

// Because we extended the person class, even if greeting is a person method we can still access them:
console.log(philip.greeting());

// Access the customer specific method, as we created a static method it actually uses the class name so:
console.log(Customer.getMemberShipCost());

// So we can use person methods because we extended person, but not the other way around!