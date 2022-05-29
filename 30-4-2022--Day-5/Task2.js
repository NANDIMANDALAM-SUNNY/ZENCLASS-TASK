// 2.1-->Write a function called “addFive”.Given a number, “addFive” returns 5 added to that number.
    // Input:
    // addFive(5);
    // addFive(0);
    // addFive(-5);
var num = 10;
function addFive(num) {
return num + 5;
}
console.log(addFive(5));
console.log(addFive(0));
console.log(addFive(-5));

// 2.2-->Write a function called “getOpposite”.Given a number, return its opposite
    // Input:
    // getOpposite(5);
    // getOpposite(0);
    // getOpposite(-5);
    // getOpposite("5a");
    // getOpposite(5.5);
var num = 5;
function getOpposite(num) {
return -num;
}
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));

// 2.3-->Fill in your code that takes an number minutes and converts it to seconds.
    // Examples
    // toSeconds(5) ➞ 300
    // toSeconds(3) ➞ 180
    // toSeconds(2) ➞ 120
var min = 5;
function toSeconds(min) {
return min * 60;
}
console.log(toSeconds(5));
console.log(toSeconds(3));
console.log(toSeconds(2));

// 2.4-->Create a function that takes a string and returns it as an integer.
    // Examples
    // toInteger(“6”) ➞ 6
    // toInteger(“1000”) ➞ 1000
    // toInteger(“12”) ➞ 12
var str = "6";
function toInteger(str) {
return parseInt(str);
}
console.log(toInteger(str));
console.log(toInteger("1000"));
console.log(toInteger("12"));

// 2.5-->Create a function that takes a number as an argument, increments the number by +1 and returns the
// result.
    // Examples
    // nextNumber(0) ➞ 1
    // nextNumber(9) ➞ 10
    // nextNumber(-3) ➞ -2
var myint = 0;
function nextNumber(myint) {
return myint + 1;
}
console.log(nextNumber(0));
console.log(nextNumber(9));
console.log(nextNumber(-3));

// 2.6-->Create a function that takes an array and returns the first element.
    // Examples
    // getFirstElement([1, 2, 3]) ➞ 1
    // getFirstElement([80, 5, 100]) ➞ 80
    // getFirstElement([-500, 0, 50]) ➞ -500
var arr = [1, 2, 3];
function getFirstElement(arr) {
return arr[0];
}
console.log(getFirstElement(arr));
console.log(getFirstElement([80, 5, 100]));
console.log(getFirstElement([-500, 0, 50]));

// 2.7-->Convert Hours into Seconds
// Write a function that converts hours into seconds.
    // Examples
    // hourToSeconds(2) ➞ 7200
    // hourToSeconds(10) ➞ 36000
    // hourToSeconds(24) ➞ 86400
var arr = [1, 2, 3];
function hourToSeconds(arr) {
return arr * 3600;
}
console.log(hourToSeconds(arr[1]));
console.log(hourToSeconds(10));
console.log(hourToSeconds(24));

// 2.8-->Find the Perimeter of a Rectangle Create a function that takes height and width and finds the perimeter of a rectangle.
    // Examples
    // findPerimeter(6, 7) ➞ 26
    // findPerimeter(20, 10) ➞ 60
    // findPerimeter(2, 9) ➞ 22
function findPerimeter(num1,num2) {
return 2 * (num1 + num2);
}
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));

// 2.9-->Less Than 100?Given two numbers, return true if the sum of both numbers is less than 100. Otherwise
// return false.
    // Examples
    // lessThan100(22, 15) ➞ true
    // 22 + 15 = 37
    // lessThan100(83, 34) ➞ false
    // 83 + 34 = 117
function lessThan100(num1,num2) {
return (num1 + num2) < 100;
}
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));

// 2.10-->There is a single operator in JavaScript, capable of providing the remainder of a division operation.
// Two numbers are passed as parameters. The first parameter divided by the second parameter will have a
// remainder, possibly zero. Return that value.
    // Examples
    // remainder(1, 3) ➞ 1
    // remainder(3, 4) ➞ 3
    // remainder(-9, 45) ➞ -9
    // remainder(5, 5) ➞ 0
function remainder(num1,num2) {
return num1 % num2;
}
console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));

// 2.11-->Old macdonald had a farm: MacDonald is asking you to tell him how many legs can be counted among all
// his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a
// function that returns the total number of legs of all the animals.
    // Examples
    // CountAnimals(2, 3, 5) ➞ 36
    // CountAnimals(1, 2, 3) ➞ 22
    // CountAnimals(5, 2, 8) ➞ 50
function CountAnimals(tur,horse,pigs) {
return tur * 2 + horse * 4 + pigs * 4;
}
console.log(CountAnimals(2, 3, 5));
console.log(CountAnimals(1, 2, 3));
console.log(CountAnimals(5, 2, 8));

// 2.12-->Frames Per Second Create a function that returns the number of frames shown in a given number of
// minutes for a certain FPS.
    // Examples
    // frames(1, 1) ➞ 60
    // frames(10, 1) ➞ 600
    // frames(10, 25) ➞ 15000
function frames(num1,num2) {
return num1 * num2;
}
console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));

// 2.13-->Check if an Integer is Divisible By Five Create a function that returns true if an integer is evenly
// divisible by 5, and false otherwise.
    // Examples
    // divisibleByFive(5) ➞ true
    // divisibleByFive(-55) ➞ true
    // divisibleByFive(37) ➞ false
function divisibleByFive(num1) {
return num1 % 5 === 0;
}
console.log(divisibleByFive(5));
console.log(divisibleByFive(-55));
console.log(divisibleByFive(37));

// 2.14-->Write a function called “isEven”. Given a number, “isEven” returns whether it is even.
    // Input:
    // isEven(12);
    // isEven(0);
    // isEven(11);
    // isEven(“11h”);
function isEven(num){
return num % 2 === 0;
}
console.log(isEven(12));
console.log(isEven(0));
console.log(isEven("11h"));

// 2.15-->Write a function called “areBothOdd”. Given 2 numbers, “areBothOdd” returns whether or not both of
// the given numbers are odd.
    // Input:
    // areBothOdd(1, 3);
    // areBothOdd(1, 4);
    // areBothOdd(2, 3);
    // areBothOdd(0, 0);
function areBothOdd(num1, num2){
return (num1 % 2 !== 0 && num2 % 2 !== 0);
}
console.log(areBothOdd(1, 3));
console.log(areBothOdd(1, 4));
console.log(areBothOdd(2, 3));
console.log(areBothOdd(0, 0));

// 2.16-->Write a function called “getFullName”. Given a first and a last name, “getFullName” returns a single
// string with the given first and last names separated by a single space.
    // Input
    // getFullName(“GUVI”, “GEEK”);
    // getFullName(“GUVI”, );
    // getFullName(, “GEEK”);
    // getFullName(“”, “”);
function getFullName(firstName, lastName){
return firstName + " " + lastName;
}
console.log(getFullName("GUVI", "GEEK"));
console.log(getFullName("GUVI", ""));
console.log(getFullName("", "GEEK"));
console.log(getFullName("", ""));

// 2.17-->Write a function called “getLengthOfWord”.Given a word, “getLengthOfWord” returns the length of the
// given word.
    // Input:
    // getLengthOfWord(“GUVI”);
    // getLengthOfWord(“”);
    // getLengthOfWord();
    // getLengthOfWord(9);
function getLengthOfWord(word){
return word.length;
}
console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord(9));

// 2.18-->Write a function called “isSameLength”. Given two words, “isSameLength” returns whether the given
// words have the same length.
    // Input:
    // isSameLength(“GUVI”, “GEEK”);
    // Output:
    // true
function isSameLength(word1, word2){
return word1.length === word2.length;
}
console.log(isSameLength("GUVI", "GEEK"));

// 2.19-->Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2)
{
return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log(getDistance(100,100,400,300));

// 2.20-->Write a function called “getNthElement”. Given an array and an integer, “getNthElement” returns the
// element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
    // Input:
    // getNthElement([1, 3, 5], 1);
    // Output:
    // 3
function getNthElement(array,n){
if(array.length === 0){
return undefined;
}
return array[n];
}
console.log(getNthElement([1, 3, 5], 1));

// 2.21-->Write a function called “getLastElement”. Given an array, “getLastElement” returns the last element of
// the given array. If the given array has a length of 0, it should return ‘-1’.
    // Input:
    // getLastElement([1, 2, 3, 4]);
    // Output:
    // 4
function getLastElement(array){
if(array.length === 0){
return -1;
}
return array[array.length - 1];
}
console.log(getLastElement([1, 2, 3, 4]));

// 2.22-->Write a function called “getProperty”. Given an object and a key, “getProperty” returns the value of
// the property at the given key. If there is no property at the given key, it should return undefined.
    // Input:
    // getProperty(obj,’mykey’);
    // getProperty(obj,’dummykey’);
    // Output:
    // value
    // NA
var obj = {
mykey: "value"
};
function getProperty(obj, key) {
return obj[key];
}
console.log(getProperty(obj, "mykey"));
console.log(getProperty(obj, "dummykey"));

// 2.23-->Write a function called “addProperty”. Given an object and a key, “addProperty” adds a new property on
// the given object with a value of true.
    // Input:
    // addProperty(obj, “mykey”);
    // Output:
    // {
    // mykey: true
    // }
var obj = {};
function addProperty(obj, key) {
obj[key] = true;
return obj;
}
console.log(addProperty(obj, "mykey"));

// 2.24-->Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
    // Input:
    // removeProperty(obj, “name”);
    // Output:
    // undefined
var obj = {
name: "George",
};
function removeProperty(obj, key) {
delete obj[key];
return obj;
}
console.log(removeProperty(obj, "name"));

// 2.24-->Return an array, where the first element is the count of positives numbers and the second element is
// sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {
if (arr.length === 0) {
return [];
}
var count = 0;
var sum = 0;
for (var i = 0; i < arr.length; i++) {
if (arr[i] > 0) {
count++;
} else {
sum += arr[i];
}
}
return [count, sum];
}
console.log(countPositivesSumNegatives(arr));

// 2.25-->Create a function that receives an array of numbers and returns an array containing only the positive
// numbers
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositives(ar) {
if (ar.length === 0) {
return [];
}
var newArr = [];
for (var i = 0; i < ar.length; i++) {
if (ar[i] > 0) {
newArr.push(ar[i]);
}
}
return newArr;
}
var ar2 = (getPositives(arr));
console.log(ar2);

// 2.26-->Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an
// exponent).
    // n = 0 -> 2⁰ -> [1]
    // n = 1 -> 2⁰, 2¹ -> [1,2]
    // n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]
    // Input:
    // powersOfTwo(0)
    // powersOfTwo(1)
    // powersOfTwo(2)
    // Output:
    // 1
    // 1,2
    // 1,2,4
function powersOfTwo(n) {
var res = [];
for (var i = 0; i <= n; i++) {
res.push(Math.pow(2, i));
}
return res;
}
console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));

// 2.27-->Find the maximum number in an array of numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function findMax(ar) {
if (ar.length === 0) {
return -1;
}
var max = ar[0];
for (var i = 0; i < ar.length; i++) {
if (ar[i] > max) {
max = ar[i];
}
}
return max;
}
var max = (findMax(ar));
console.log("Max: ", max);

// 2.28-->Print the first 100 prime numbers
function printPrimes(nPrimes)
{
var n = 0;
var i = 2;
while (n < nPrimes)
{
if (isPrime(i))
{
console.log(n, " → ", i);
n++;
}
i++;
}
}
function isPrime(n)
{
if (n == 1)
return false;
if (n == 2)
return true;
if (n % 2 == 0)
return false;
var m = Math.sqrt(n);
for (var i = 3; i <= m; i += 2)
{
if (n % i == 0)
return false;
}
return true;
}
printPrimes(100);

// 2.28-->Create a function that will return in an array the first “nPrimes” prime numbers greater than a
// particular number “startAt”
function getPrimes(startAt, nPrimes)
{
var primes = [];
var i = startAt;
while (primes.length < nPrimes)
{
if (isPrime(i))
primes.push(i);
i++;
}
return primes;
}
function isPrime(n)
{
if (n == 1)
return false;
if (n == 2)
return true;
if (n % 2 == 0)
return false;
var m = Math.sqrt(n);
for (var i = 3; i <= m; i += 2)
{
if (n % i == 0)
return false;
}
return true;
}
console.log(getPrimes(10,100));

// 2.29-->Reverse a string
function reverseString(s) {
var res = "";
for (var i = s.length - 1; i >= 0; i--) {
res += s[i];
}
return res;
}
var s = reverseString("Javascript")
console.log(s);

// 2.30-->Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2){
var result = [];
for(let el of ar1){
result.push(el);
}
for(let el of ar2){
result.push(el);
}
return result;
}

// 2.31-->Calculate the sum of numbers received in a comma delimited string
function sumCSV(s){
var arr = s.split(",");
var sum = 0;
for(let el of arr){
sum += parseInt(el);
}
return sum;
}
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));