// Do the below programs in arrow functions

// 1.a-->Print odd numbers in an array using arrow function
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res1 = arr1.filter(function(num){
return num % 2 !== 0;
});
console.log(res1);

// 1.b-->Convert all the strings to title caps in a string array
let arr2 = ['hello', 'my', 'name', 'is', 'john'];
let res2 = arr2.map(function(str){
return str.toUpperCase();
});
console.log(res2);

// 1.c-->Sum of all numbers in an array
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res3 = arr3.reduce(function(accumulator, currentValue){
return accumulator + currentValue;
}
);
console.log(res3);

// 1.d-->Return all the prime numbers in an array
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res4 = arr4.filter(function(num){
for(let i = 2; i < num; i++){
if(num % i === 0){
return false;
}
}
return true;
});
console.log(res4);

// 1.e-->Return all the palindrome numbers in an array
let arr5 = [11, 121, 222, 233];
let res5 = arr5.filter(function(num){
let str = num.toString();
let revStr = str.split('').reverse().join('');
return str === revStr;
});
console.log(res5);