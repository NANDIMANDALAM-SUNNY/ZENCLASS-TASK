// Task 3: Simple Programs todo for Condition , Looping and Arrays
// 3.1-->Write a loop that makes seven calls to console.log to output the following triangle:
let rows = 7;
let str = "";
for(let i=0;i<rows;i++){
for(let j=0;j<=i;j++){
str += "*";
}
str += "\n";
}
console.log(str);

// 3.2-->Iterate through the string array and print it contents
var strArray= ["jazz","Blues","New Age","Classical","Opera"];
for(let i=0;i<strArray.length;i++){
console.log(strArray[i]);
}

// Arrays:
// problem:1-->write a code to count the elements in the array . Don’t use length property
var myarrayarray1=[11,22,33,44,55];
var count=0;
for(let i=0;i<myarrayarray1.length;i++){
count++;
}
console.log(count);
// problem:2-->Declare an empty array;
var myarrayarrayp2=[];
console.log(myarrayarrayp2);
// problem:3-->Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods = ["Biryani","Elephant Foot","Apple Juice","Fish","cake","pizza","Sambar"," Puliyodarai.","Paruppu Payasam","Pollachi NanduFry.","Biryani","Elephant Foot","Apple Juice","Fish","cake","pizza","Sambar"," Puliyodarai.","Paruppu Payasam","Pollachi Nandu Fry."];
// How can you find your fifth favorite food?
console.log(foods[4]);
// Find the length of your foods array
console.log(foods.length);

// problem:4-->Starting from the existing friends variable below, change the element that is currently "Mari" to "Munnabai".
let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAKchandran"];
friends.splice(0,1,"Munnabai");
console.log(friends);

// problem:5-->
let friendsArr = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling5(input){
for (var i = 0; i < input.length; i++) {
if(input[i]==="Mari"){
    input[i]="Munnabai";
}
}
}
dataHandling5(friendsArr);
console.log("prbl5")
console.log(friendsArr)

// problem:6-->Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
let friendsArr3 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling6(input){
for(let i=0;i<input.length;i++){
if(friendsArr3[i]==="CaptianAmerica"){
break;
}
console.log(friendsArr3[i]);
}
}
dataHandling6(friendsArr3);

// problem:7-->Find the person is ur friend or not.
let friendsArr4 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling7(input,name){
let find = false;
for(let i=0;i<input.length;i++){
if(input[i]===name) find = true;
else find = true;
}
if(find){
console.log(`${name} is ur friend`);
}
else{
console.log(`${name} is not ur friend`);
}
}
dataHandling7(friendsArr4,"jeff");

// problem-8:-->We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
let friendsArr5= ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
let friendsArr6 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
function dataHandling8(input81,input82){
let newArray8 = input81.concat(input82);
newArray8.sort();
console.log(newArray8);
}
dataHandling8(friendsArr5,friendsArr6);


// Extra problems:

// Exgtra problem:1-->Get the first item, the middle item and the last item of the array
let friendsArr7 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandlingextra1(input){
console.log(input[0]);
console.log(input[Math.floor(input.length/2)]);
console.log(input[input.length-1]);
}
dataHandlingextra1(friendsArr7);

// Extra problem:2-->Add your name to the end of the friends array, and add another name to beginning.
let friendsArr8 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandlingextraprblm2(input,name,ectraName){
input.push(name);
input.unshift(ectraName);
console.log(input);
}
dataHandlingextraprblm2(friendsArr8,"john","extra");

// Extra problem:3-->Add Mr or Ms to the names in the friends array.
let friendsArr9 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandlingextraprblm3(input){
for(let i=0;i<input.length;i++){
if(input[i][0]==="M"||input[i][0]==="m"){
input[i] = "Mr."+input[i];
}
else{
input[i] = "Ms."+input[i];
}
}
console.log(input);
}
dataHandlingextraprblm3(friendsArr9);

// Extra problem:4-->Concat all the names the friends array and return as comma "," seperated string.
let friendsArr10 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandlingextraprblm4(input){
let newArray = input.join(",");
console.log(newArray);
}
dataHandlingextraprblm4(friendsArr10);

// Extra problem:5-->Find the friends names who has letter ‘a’ and return the list
let friendsArr11 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandlingextraprblm5(input){
let newArray = [];
for(let i=0;i<input.length;i++){
if(input[i].includes("a")){
newArray.push(input[i]);
}
}
console.log(newArray);
}
dataHandlingextraprblm5(friendsArr11);

// Extra problem:6--> Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let friendsArr12 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandlingextraprblm6(input){
let newArray = [];
for(let i=0;i<input.length;i++){
newArray.push(input[i].length);
}
console.log(newArray);
let sum = 0;
for(let i=0;i<newArray.length;i++){
sum = sum + newArray[i];
}
console.log(sum/newArray.length);
}
dataHandlingextraprblm6(friendsArr12);

// Extra problem:7-->7. Find the names and return the list starting with letter M
let friendsArr13 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandlingextraprblm7(input){
let newArray = [];
for(let i=0;i<input.length;i++){
if(input[i][0]==="M"||input[i][0]==="m"){
newArray.push(input[i]);
}
}
console.log(newArray);
}
dataHandlingextraprblm7(friendsArr13); 

// Extra problem:8-->Find the name with max characters and return the name.
let friendsArr14 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandlingextraprblm8(input){
let newArray = [];
for(let i=0;i<input.length;i++){
newArray.push(input[i].length);
}
console.log(newArray);
let max = 0;
let index = 0;
for(let i=0;i<newArray.length;i++){
if(newArray[i]>max){
max = newArray[i];
index = i;
}
}
console.log(input[index]);
}
dataHandlingextraprblm8(friendsArr14);

// Extra problem:9-->Find the name with min characters and return the name.
let friendsArr15 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAKchandran"];
function dataHandlingextraprblm9(input){
let newArray = [];
for(let i=0;i<input.length;i++){
newArray.push(input[i].length);
}
console.log(newArray);
let min = newArray[0];
let index = 0;
for(let i=0;i<newArray.length;i++){
if(newArray[i]<min){
min = newArray[i];
index = i;
}
}
console.log(input[index]);
}
dataHandlingextraprblm9(friendsArr15);


// Extra Problems section2 Find the average in the array below. 
// problem-1-->
const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
function dataHandlingsecp1(input){
let newArray = [];
for(let i=0;i<input.length;i++){
if(typeof(input[i])==="number"){
newArray.push(input[i]);
}
}
console.log(newArray);
let sum = 0;
for(let i=0;i<newArray.length;i++){
sum = sum + newArray[i];
}
console.log(sum/newArray.length);
}
dataHandlingsecp1(friendsInfo);

// problem: 2-->Print the contents of the input variable
var inputArr = [["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989","Membaca"],["0002", "Dika Sembiring", "Medan", "10/10/1992", "BermainGitar"],["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],["0004", "BintangSenjaya", "Martapura", "6/4/1970", "Berkebun"]]
function dataHandlingsecp2(input){
for (var i = 0; i < input.length; i++) {
for(var j = 0; j < input[i].length; j++){
console.log(input[i][j]);
}
}
}
dataHandlingsecp2(inputArr);


// Objects:
// problem: 1-->What the output
// let myobject12 = {1:one,"11":1,"name":"arun"}
// console.log(myobject12.11);
// console.log(myobject12.name);
// o/p----ERROR for the given constraints

// problem:2-->Add a new key value pair to myobject
// key : ten
// value : ten
// let myobject2 = {1:one,11:1,name:"arun"}
// myobject.push({ten:ten});
// console.log(myobject2);

// problem:3-->Write out an object literal to represent the data below.
let myobject3 = {
name: "Guvi",
Subname: "Geek",
age: 6,
institute: "IIT-M RP",
city: "Chennai"
}
console.log(myobject3);

// problem:4-->How would you represent the following data using a combination of object literals and arrays? 
let myobject4 = {
name: "Guvi",
Subname: "Geek",
age: 6,
institute: "IIT-M RP",
city: "Chennai"
}
let myobject5 = {
name: "Amazon",
Subname: "Inc",
age: 31,
institute: "SP Infocity",
city: "Chennai"
}
let myobject6 = {
name: "Google",
Subname: "Alphabet",
age: 34,
institute: "Amphitheater Parkway",
city: "MountainView"
}
let myobject7 = {
name: "Tesla",
Subname: "Inc",
age: 32,
institute: "333 Santana Row",
city: "San Jose"
}
let myarraylast = [myobject4,myobject5,myobject6,myobject7];
console.log(myarraylast);