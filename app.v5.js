// Another way to create objects, by using object.create

// We are going to be able to create prototypes inside of a parent objects and then have different properties with different prototype methods or different prototypes functions

// So lets create a variable that is an object wih a different prototype method:

// const personPrototypes = {
//     greeting: function() {
//         return `Hello there ${this.firstName} ${this.lastName}`; 
//     }
// }

// // So now we have this object with our person prototypes, and we have one prototype method called greeting

// // So lets create an object, which will take in our prototypes:

// const philip = Object.create(personPrototypes);
// // now we can add properties to this philip object:
// philip.firstName = 'Philip';
// philip.lastName = 'Andes';
// philip.age = 30;

// console.log(philip.greeting());

// This is kinda a easy way to do this, but we are not using constructors, or getting into hard coded inheritance and stuff like that but let's go ahead and put in another prototype:

//////////////////////////////////////////////////////////////////////////

const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`; 
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const philip = Object.create(personPrototypes);
philip.firstName = 'Philip';
philip.lastName = 'Andes';
philip.age = 30;

philip.getsMarried('Thompson');

console.log(philip.greeting());

//////////////////////////////////////////////////////////////////////////

// So thats one way to do this, lets do it with another syntax:

// just like a above it is going to take in personPrototypes and then we can add a second parameter of an object
const anna = Object.create(personPrototypes, {
    // and then each property is going to have to be an object as wel with value as a key and then the actual value as the value
    firstName: {value: 'Anna'},
    lastName: {value: 'Smith'},
    age: {value: 35}
});

console.log(anna);

console.log(anna.greeting());