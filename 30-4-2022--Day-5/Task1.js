// Do the below programs in anonymous function & IIFE

// 1.a--> Print odd numbers in an array using function expression
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res1 = function(){
let result1 = [];
for(let i = 0; i < arr1.length; i++){
if(arr1[i] % 2 !== 0){
result1.push(arr1[i]);
}
}
return result1;
};
console.log(res1());
// using IIFE expression
let arro1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function(){
let resulto1 = [];
for(let i = 0; i < arro1.length; i++){
if(arro1[i] % 2 !== 0){
resulto1.push(arro1[i]);
}
}
console.log(resulto1);
}
)();

// 1.b-->Convert all the strings to title caps in a string array
// using function expression
let arr1b = ['hello', 'my', 'name', 'is', 'john'];
let res1b = function(){
let result1b = [];
for(let i = 0; i < arr1b.length; i++){
result1b.push(arr1b[i].toUpperCase());
}
return result1b;
};
console.log(res1b());
// using IIFE expression
let arre1b = ['hello', 'my', 'name', 'is', 'john'];
(function(){
let resulte1b = [];
for(let i = 0; i < arre1b.length; i++){
resulte1b.push(arre1b[i].toUpperCase());
}
console.log(resulte1b);
}
)();

// 1.c-->Sum of all numbers in an array
// using function expression
let arr1c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res1c = function(){
let result1c = 0;
for(let i = 0; i < arr1c.length; i++){
result1c += arr1c[i];
}
return result1c;
}
console.log(res1c());
// using IIFE expression
let arre1c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function(){
let resulte1c = 0;
for(let i = 0; i < arre1c.length; i++){
resulte1c += arre1c[i];
}
console.log(resulte1c);
}
)();

// 1.d-->Return all the prime numbers in an array
// using function expression
let arr1d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// prime number
function isPrime1d(num){
for(let i = 2; i < num; i++){
if(num % i === 0){
return false;
}
}
return true;
}
let res1d = function(){
let result1d = [];
for(let i = 0; i < arr1d.length; i++){
if(isPrime1d(arr1d[i])){
result1d.push(arr1d[i]);
}
}
return result1d;
};
console.log(res1d());
// using IIFE expression
let arree1d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isPrimee1d(num){
for(let i = 2; i < num; i++){
if(num % i === 0){
return false;
}
}
return true;
}
(function(){
let resulte1d = [];
for(let i = 0; i < arree1d.length; i++){
if(isPrimee1d(arree1d[i])){
resulte1d.push(arree1d[i]);
}
}
console.log(resulte1d);
}
)();

// 1.e-->Return all the palindrome numbers in an array
// using function expression
let arr1e = [11,121,222,233];
function isPalindrome1e(num){
let str1e = num.toString();
let revStr1e = str1e.split('').reverse().join('');
return str1e === revStr1e;
}
let res1e = function(){
let result1e = [];
for(let i = 0; i < arr1e.length; i++){
if(isPalindrome1e(arr1e[i])){
result1e.push(arr1e[i]);
}
}
return result1e;
}
console.log(res1e());
// using IIFE expression
let arre1e = [11,121,222,233];
function isPalindromee1e(num){
let stre1e = num.toString();
let revStre1e = stre1e.split('').reverse().join('');
return stre1e === revStre1e;
}
(function(){
let resulte1e = [];
for(let i = 0; i < arre1e.length; i++){
if(isPalindromee1e(arre1e[i])){
resulte1e.push(arre1e[i]);
}
}
console.log(resulte1e);
}
)();


// 1.f-->Return median of two sorted arrays of the same size using function expression
let arr11f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr21f = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function median(arr11f, arr21f){
let result1f = [];
for(let i = 0; i < arr11f.length; i++){
result1f.push(arr11f[i] + arr21f[i]);
}
result1f.sort(function(a, b){
return a - b;
});
return result1f[Math.floor(result1f.length / 2)];
}
console.log(median(arr11f, arr21f));
// using IIFE expression
let arr1e1f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2e1f = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
(function(){
let resulte1f = [];
for(let i = 0; i < arr1e1f.length; i++){
resulte1f.push(arr1e1f[i] + arr2e1f[i]);
}
resulte1f.sort(function(a, b){
return a - b;
});
console.log(resulte1f[Math.floor(resulte1f.length / 2)]);
}
)();

// 1.g-->Remove duplicates from an array using function expression
let arr1g = [1, 1,2,2,33,312,2,12,12,1];
// using Set
let res1g = function(){
let result1g = [];
let set1g = new Set(arr1g);
for(let i of set1g){
result1g.push(i);
}
return result1g;
};
console.log(res1g());
// using IIFE expression
let arre1g = [1, 1,2,2,33,312,2,12,12,1];
(function(){
let resulte1g = [];
let sete1g = new Set(arre1g);
for(let i of sete1g){
resulte1g.push(i);
}
console.log(resulte1g);
}
)();

// 1.h-->Rotate an array by k times
// using function expression
let arr1h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k1h = 3;
function rotate1h(arr1h, k1h){
let result1h = [];
for(let i = 0; i < arr1h.length; i++){
result1h.push(arr1h[(i + k1h) % arr1h.length]);
}
return result1h;
}
console.log(rotate1h(arr1h, k1h));
// using IIFE expression
let arre1h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ke1h = 3;
(function(){
let resulte1h = [];
for(let i = 0; i < arre1h.length; i++){
resulte1h.push(arre1h[(i + ke1h) % arre1h.length]);
}
console.log(resulte1h);
}
)();