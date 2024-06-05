// FORLOOPS + WHILELOOPS

// Task #1: Print the first 10 square numbers (1*1 = 1, 2*2 = 4, etc.).
console.log("Task #1");
for (let i = 0; i <= 10; i++) {
    console.log(i*i);
}

// Task #2: Count down from 5 to 1 then say "Blastoff!"
console.log("Task #2");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Blast off!");

// Task #3: Print the even numbers from 1 to 50 (including 50).
console.log("Task #3");
for (let i = 0; i <= 50; i += 2) {
    console.log(i);
}

// Task #4: Print the sum of 1 through 100.
console.log("Task #4");
let sumNumbers = 0;
for (let i = 1; i <= 100; i++) {
    sumNumbers = sumNumbers + i; 
}
console.log(sumNumbers);

// Task #5: Print the first 10 factorials. The factorial of a number n is n multiplied by each integer less than it, down to 1, written as n!
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// etc.
console.log("Task #5");
let numbersFactorial = 1;
for (let i = 1; i <= 10; i++) {
    numbersFactorial= numbersFactorial * i
    console.log(numbersFactorial);
}

// ARRAYS

// Task #6: Add the array arr with the same values as above, and write a loop to log each element to the console.
console.log("Task #6");
let loop = [3, 1, 4, 1, 5];
for (let i = 0; i < loop.length; i++) {
    console.log(loop[i]);
}

// Task #7: Using a normal forward for-loop (for (let i = 0; i < arr.length; i++)), use .at() to log each element of arr in reverse order (i.e. 5, 1, 4, 1, 3).
console.log("Task #7");
for (let i = 0; i < loop.length; i++) {
    console.log(loop.at(-1*i-1));
}

// Task #8: Starting with an empty array in a new variable, create a loop that adds the first 10 cube numbers (e.g. 1*1*1==1**3=1, 2*2*2==2**3==8, etc.) to the array, then log the array itself.
console.log("Task #8");
let cubes = [];
for (let i = 0; i < 10; i++) {
    cubes.push(i*i*i);
}
console.log(cubes);

// Task #9: Starting with an empty array in a new variable, add the first 10 fibonacci numbers to the array, then log the array itself.
console.log("Task #9");
let nacci = [0, 1];
for (let i = 0; i < 10; i++) {
    nacci.push(nacci.at(-1) + nacci.at(-2));
}
console.log(nacci);

// Task #10: Starting with an empty array in a new variable, add the elements of arr to it in reverse order.
console.log("Task #10");
let newarr = [];
while (loop.length > 0) {
    newarr.push(loop.pop())
}
console.log(newarr);
