let x = 2;

const y = 3;

/* global z */
var z = 2;

/* getting type of variable */
typeof (x)

/* '2' +'2' - '2' */
x = '2' + '2' - '2';
console.log(x);


/* equality */

const person = {
    firstName: "Ibrahim",
    lastName: "Elsheikh",
    age: 23
}
console.log(person.firstName);

/* destructuring */

let {firstName, lastName, age} = person;
console.log(firstName);


if (typeof firstName !== 'undefined') {
    console.log(firstName);
}

/* arrays */
const numbers = [1, 2, 3, 4, 5];

/* for loop */
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/* while loop */
while (numbers.length > 0) {
    console.log(numbers.pop());
}


/* functions */
let f = function (a, b) {
    return a + b;
}

console.log(f(2, 3));

/*  arrow functions */
const g = (a, b) => a + b;
console.log(g(2, 3));

/* high order Array functions */
let arr = [1, 2, 3, 4, 5];
arr.map((x) => x * 2);
console.log(arr);

/* constructor functions */
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

user1 = new Person("Ibrahim", "Elsheikh", 23);
user2 = new Person("Ahmed", "Elsheikh", 23);





