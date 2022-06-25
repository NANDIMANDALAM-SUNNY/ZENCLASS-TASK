// GUVI: Zen Class — Part 2 : Find the culprits and nail them — debugging javascript loops

// // Write a code to print the numbers in the array
var numsArr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string1 = "";
for (let i = 0; i < numsArr1.length; i++) {
 new_string1 += numsArr1[i] 
}
console.log(new_string1);


// Write a code to print the numbers in the array
var numsArr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string2 = "";
for (var i = 0; i < numsArr2.length; i++) {
 new_string2 += numsArr2[i] + ",";
}
console.log(new_string2.slice(0, -1));


// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
var numsArr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string3 = ""; 
for (var i = numsArr3.length-1; i >=0; i-- ) {
 new_string3 += numsArr3[i] + " ";
}
console.log(new_string3);


// Write a code to replace the array value — If the number is even, replace it with ‘even’.
var numsArr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr4[i] %2 == 0 )
 {
 numsArr4[i] = "even";
 }
}
console.log(numsArr4);


// Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
    if(i %2 == 0 )
    {
    numsArr5[i] = "even";
    }
    }
    console.log(numsArr5);


// Write a code to add all the numbers in the array
var numsArr6 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum6=0;
for (var i = 0; i <numsArr6.length; i++) {
    sum6 = sum6 + +numsArr6[i];
}
console.log(sum6);


// Write a code to add the even numbers only
var numsArr7 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum7=0;
for (var i = 0; i <10; i++) {
 if(numsArr7[i]%2==0){
 sum7 += numsArr7[i]}
}
console.log(sum7);


// Write a code to add the even numbers and subract the odd numbers
var numsArr8 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum8=100;
for (var i = 0; i <10; i++) {
    if(numsArr8[i]%2==0){
    sum8 += numsArr8[i]}
    else{
    sum8 -= numsArr8[i]}
    }
    console.log(sum8);


// Write a code to print inner arrays
var numsArr9 =[[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for(let i=0;i<numsArr9.length;i++){
    console.log(numsArr9[i]);
}


// Write a code to print elements in the inner arrays
// output: 1234567891011
var numsArr10 =[[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var new_string10 = "";
for(let i=0;i<numsArr10.length;i++){
    for(let j=0;j<numsArr10[i].length;j++){
        new_string10 += numsArr10[i][j];
    }
}
console.log(new_string10);


// Write a code to print elements in the inner arrays in reverse
// output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr11 =[[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var new_string11 = "";
for(let i=0;i<numsArr11.length;i++){
    for(let j=0;j<numsArr11[i].length;j++){
        new_string11 += numsArr11[i][j] + " ";
    }
}
let res11 = new_string11.split(" ").reverse().join(" ");
console.log(res11);


// Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30
var numsArr12 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum12_odd=0;
var sum12_even=0;
for(let i=0;i<numsArr12.length;i++){
    for(let j=0;j<numsArr12[i].length;j++){
        if(numsArr12[i][j]%2==0){
            sum12_even += numsArr12[i][j];
        }
        else{
            sum12_odd += numsArr12[i][j];
        }
    }
}
console.log(sum12_odd);
console.log(sum12_even);

