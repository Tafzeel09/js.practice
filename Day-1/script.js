console.log("Hello, Javascript!"); 
let name ="Taiba";
const age = 20;
var city = "Mansehra";
console.log(name);
console.log(age);
console.log(city);
let isStudent = true;
let marks = 95;
let country = "Pakistan";
let emptyValue = null;
let futureValue;
console.log(typeof isStudent);
console.log(typeof marks);
console.log(typeof country);
console.log(typeof emptyValue);
console.log(typeof futureValue);
let num1 = 20;
let num2 = 5;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Remainder:", num1 % num2);
let a = 50;
let b = 15;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
let academy = "Assaadah";
let students = 100;
let isMuslim = true;
let ageofstudent = 23;
console.log(academy);
console.log("Number of Students:", students);
console.log(typeof academy);
console.log(typeof students);
console.log("Culture:", isMuslim);
console.log(typeof isMuslim);
console.log("Age of Student:", ageofstudent);
let studentinfo = 
{name: "taiba shabbir", 
    age: 23,
city: "baffa"};
console.log(studentinfo);
let fruits =["Apple","Banana","mango"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);console.log(fruits.length);
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
numbers.push(60);
console.log(numbers);
numbers.pop();
console.log(numbers);
console.log(numbers.length);
let smarks = 80;
smarks += 10;
console.log(smarks);
smarks -= 20;
console.log(smarks);
let num = 5;
num *= 2;
console.log(num);
let nums = 20;
nums /= 4;
console.log(nums);
let x = 5;
let y = "10";
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
console.log(x > 3);
console.log(x < y);
console.log(x <= y);
console.log(x >= y);
let age1 = 25;
let hascard = false;
console.log(age1 > 18 && hascard);
console.log(age1 > 30 && hascard);
console.log(age1 >18 || hascard);
console.log(age1 < 18 || hascard);
console.log(!hascard);
let year = 20;
if (year <= 19) {
    console.log("You are eligible to vote.");
} 
else{
    console.log("You are not eligible to vote.");
}
let sdmarks = 70;
if (sdmarks >= 90){
    console.log("grade A");
}
else if (sdmarks >= 80){
    console.log("grade B");
}
else {
    console.log("grade C");
}
let day = 3;
switch (day) {
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    default:
        console.log("Invalid day");
    
}