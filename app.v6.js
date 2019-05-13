// So we write a class called Person:
// class Person {
//     // Then we just use the constructor word as a function which is gonna take in properties
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     // Lets add a method here
//     greetings() {
//         return `Hello there ${this.firstName} ${this.lastName}`
//     }
// }

// // Just with this we can create an object:

// const philip = new Person('Philip', 'Andes');

// console.log(philip);

//////////////////////////////////////////////////////////////////////////

// Now lets add the calculatebirth method:

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }
//     greetings() {
//         return `Hello there ${this.firstName} ${this.lastName}`
//     }
//     calculateAge() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// const philip = new Person('Philip', 'Andes', '05-12-1995');

// console.log(philip.calculateAge());

//////////////////////////////////////////////////////////////////////////

// Now lets add the getMarried method:

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }
//     greetings() {
//         return `Hello there ${this.firstName} ${this.lastName}`
//     }
//     calculateAge() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
//     getsMarried(newLastName) {
//         this.lastName = newLastName;
//     }
// }

// const philip = new Person('Philip', 'Andes', '05-12-1995');

// philip.getsMarried('Smith');

// console.log(philip);

//////////////////////////////////////////////////////////////////////////

// Now lets add a static method, a static method is one you can use without instantiate an object (when we create an object from the class), so lets say you wanted a method that added 2 numbers together, so thats something you dont need specific person properties for, its just something like a stand alone method, so what we can do is, just add as a static method:

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greetings() {
        return `Hello there ${this.firstName} ${this.lastName}`
    }
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    // We just use the keyword static:
    static addNumbers(x, y) {
        return x + y;
    }
}

const philip = new Person('Philip', 'Andes', '05-12-1995');

philip.getsMarried('Smith');

// This won't work:
// console.log(philip.addNumbers());

// so to use this we use the actual class name
console.log(Person.addNumbers(1, 2));