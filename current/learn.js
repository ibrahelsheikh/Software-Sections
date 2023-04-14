// variable
let x = 2;

const y = 5;

const z = null;

console.log(typeof (x))
console.log(typeof (y))
console.log(typeof (z))

// note
console.log('2' + '2' - '2')

// object
let person = {
    firstName: 'ibrahim',
    secendName: 'elsheikh'
};

console.log(person);

let {firstName: string, secendName: srting} = person;
console.log(person.firstName);
// array
const numbers = new Array(1, 2, 3);

const number = [1, 2, 3];

console.log(number);

// high-order Array mathods
let results = numbers.map(x => x * 2)  // maping
console.log(results)

// if
let num = 2;
if (num % 2 == 1) {
    console.log("number is odd")
} else if (num % 2 == 0) {
    console.log("number is even")
} else {
    console.log("not odd or even")
}

// all same in c++
function print_name(name) {
    console.log("hello", name);
};

print_name("ibrahim")

function print_lastname(last_name) {
    return "hello " + last_name
}

console.log(print_lastname("Elsheikh"))

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person('John', 'Doe');
console.log(person1.getFullName()); // Output: John Doe

// DOM
let elementById = document.getElementById("my-div");
let elementsByTagName = document.getElementsByTagName("h");
let myClassElement = document.getElementsByClassName("my-span");
let myQuerySelector =document.querySelector("h1");

console.log(elementById);
console.log(elementsByTagName);
console.log(myClassElement);
console.log(myQuerySelector);




