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

/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);



