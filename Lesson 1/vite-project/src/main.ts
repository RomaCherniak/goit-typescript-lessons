import './style.css'

// ### Task 2 Object Typisation in TypeScript

// ```
// Create a TypeScript function named displayUserProfile that takes a user profile object as an argument. The user profile object should have the following properties: username (string), age (number), and isActive (boolean). The function should return a string summarizing the user's profile details.

type userProfile = {
    username: string,
    age: number,
    isActive: boolean,
}


let displayUserProfile = (user: userProfile): string => {
    return `Hi, ${user.age} y.o. ${user.username}! Your current isActive status is ${user.isActive}.`;
}

const user1 = {
    username: 'Bob',
    age: 34,
    isActive: false,
};

console.log(displayUserProfile(user1));

// ### Task 3 Array Typisation in TypeScript

// Write a TypeScript function named calculateTotal that takes an array of numbers and returns their sum. This function should strictly accept only an array of numbers.

function calculateTotal(arr: number[]): number {
    return arr.reduce((acc, el) =>
        acc + el,
        0
    );
};

const array1 = [10, 20, 30, 40];
console.log(calculateTotal(array1));

// А якщо передавати об'єкт:

type UserObj = {
    name: string;
    age: number;
};


// ---- 1 ---- - варіант найгіршої типізації масива об'єктів (зазначення тип об'єкт без деталізації його структури)
// function calculateTotal2(arr: Object[]): void {
//     // return something;
// };

// ---- 2 ---- - краще варіант, ніж перший, однак з точки практичності зручніший варіант №3
// function calculateTotal3(arr: UserObj[]): void {
//     // return something;
// };

// ---- 3 ---- - найкращий варіант
// function calculateTotal4(arr: { name: string; age: number; }[]): void {
//     // return something;
// };

// const user2 = {
//     name: "Stefani",
//     age: 38,
// };
// console.log(calculateTotal4(user2));

// console.log(object)


// type Person = {
//     [key: string]: any;
// }

const person = {
    name: 'John',
    age: 30,
    occupation: 'engineer'
}

function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

console.log(getPropertyValue(person, 'age'));
console.log(getPropertyValue(person, 'name'));