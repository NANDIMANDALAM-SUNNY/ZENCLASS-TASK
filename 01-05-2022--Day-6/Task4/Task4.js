//  Zen Class — Part 3: Find the culprits and nail them — debugging javascript


// Fix the code to get the largest of three.
aa = (f,s,t) => {
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);


// Fix the code to Sum of the digits present in the number
let n = 123;
console.log(add(n));
function add(n){
let n1 = n.toString().split("");
let sum = 0;
for(var i=0;i<n1.length;i++){
    let a =+n1[i];
    sum = sum + a;
 }
 return sum;
}

// Fix the code to Sum of all numbers using IIFE function
const arr3 = [9,8,5,6,4,3,2,1];
(function(arr3){
    let sum = 0;
    for(var i=0;i<arr3.length;i++){
        sum = sum + arr3[i];
    }
    console.log(sum);
})(arr3);


// Fix the code to gen Title caps.
var arr4 = ["guvi","geek","zen","fullstack"];
var ano = function(arr4){
    for(var i=0;i<arr4.length;i++){
        arr4[i] = arr4[i].toUpperCase();
    }
    console.log(arr4);
}
ano(arr4);


// Fix the code to return the Prime numbers
const newArray5=[1,3,2,5,10];
const myPrime5 = newArray5.filter(function(num){
    for(var i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
);
console.log(myPrime5);


// Fix the code to sum the number in that array
const num6 = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a,b)=>{
    return a+b;
}
console.log(num6.reduce(sum));


// Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr7 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k7 =3;
(function(arr7,k){
    for(var i=0;i<k;i++){
        var temp = arr7[0];
        for(var j=0;j<arr7.length-1;j++){
            arr7[j]=arr7[j+1];
        }
        arr7[arr7.length-1]=temp;
    }
    console.log(arr7);
})(arr7,k7);


// Fix the code to gen Title caps.
var arr8 = ["guvi","geek","zen","fullstack"];
(function(arr8){
    for(var i=0;i<arr8.length;i++){
        arr8[i] = arr8[i].toUpperCase();
    }
    console.log(arr8);
})(arr8);


// print all odd numbers in an array using IIFE function
var arr9 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function(arr9){
    for(var i=0;i<arr9.length;i++){
        if(arr9[i]%2!=0){
            console.log(arr9[i]);
        }
    }
}
)(arr9);


// Fix the code to reverse
(function(str10){
    var str11 = str10.split("");
    var str12 = str11.reverse();
    var str13 = str12.join("");
    console.log(str13);
})("abcd");


// Fix the code to remove duplicates.
var res14 = function(arr15){
    var newArray16 = [];
    for(var i=0;i<arr15.length;i++){
        if(newArray16.indexOf(arr15[i])===-1){
            newArray16.push(arr15[i]);
        }
    }
    console.log(newArray16);
}
res14(["guvi","guvi","geek","duplicate","geek"]);


// Fix the code to give the below output:
// Expected Output:
// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]
var array15 = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]],[["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
var final15 = [];
for(var i=0;i<array15.length;i++){
    var obj = {};
    for(var j=0;j<array15[i].length;j++){
        obj[array15[i][j][0]] = array15[i][j][1];
    }
    final15.push(obj);
}
console.log(final15);


// Fix the code to give the below output:
// Sum of odd numbers in an array
var as16=[12,34,5,6,2,56,6,2,1];
var s16 = as16.reduce(function(a,b){
    if(b%2!=0){
        return a+b;
    }
    else{
        return a;
    }
}
);
console.log(s16);


// Fix the code to give the below output:
// Swap the odd and even digits
const arr = [1,2,3,4];
const swapPairs = (arr = []) => {
   const swap = (array, ind1, ind2) => {
      const temp = array[ind1];
      arr[ind1] = arr[ind2];
      arr[ind2] = temp;
   };
   let i = 0;
   for(; i + 3 < arr.length; i += 4){
      swap(arr, i, i + 2);
      swap(arr, i + 1, i + 3);
   };
   if (i + 2 < arr.length){
      swap(arr, i, i + 2);
   };
};
swapPairs(arr);
console.log(arr);
