// GUVI: Zen Class — Part 1: Find the culprits and nail them — debugging javascript

// Find the culprit
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
// Whats the error in this ?
// </body>
//  <script>
//  alert( "I’m JavaScript!");
//  </script>
//  Whats the error in this ?
// </html>
// By putting double quotes, we are invoking the alert function.





// Find the culprit and invoke the alert
alert("I'm invoked!");
// By putting double quotes, we are invoking the alert function.


// Explain the below how it works
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`World`)
alert(3 +
1
+ 2); // this is multiple line code and its working
// Explanation : Semicolons are optional in JavaScript.Javascript support multiple line codes




// Fix the below to alert Guvi geek
let admin1=9, fname1=10.5; 
fname1 = "Guvi";
let lname1 = "geek"
admin1 = fname1 +" "+lname1;
alert( admin1 ); // "Guvi geek"




// Fix the below to alert hello Guvi geek
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
a1ert( `hello ${name}` );



// Fix the below to alert sum of two numbers
let a3 = prompt("First number?");
let b3 = prompt("Second number?");
let c = parseInt(a3) + parseInt(b3);
alert(c);




// If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var a2 = "2" > "12";
//Don't touch below this
if (a2) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}
// Here javascript compares first character of both strings, if first character of first string is greater than first character of second string then it returns true else it returns false.





// How to get the success in console.
let a1 = false;
//Don't modify any code below this
if (a1) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}



// How to get the correct score in console.
let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}



// Fix the code to welcome the Employee
let login3 = 'Employee';
let message3 = (login3 == 'Employee') ?(login3 == 'Director') ? 'Greetings' :(login3 == '') ? 'No login' :'welcome' :'No login';
console.log(message3);



// Fix the code to welcome the boss
// You cant change the value of the msg
let message2;
if (null || 2 || undefined )
{
 message2 = "welcome boss";
}
else
{
  message2 = "Go away";
}
  console.log(message2);



// Fix the code to welcome the boss
let message1;
let lock1 = false;
//Dont change any code below this 
if (null || lock1 || undefined )
{
  message1 = "Go away";
}
else
{
 message1 = "welcome";
}
  console.log(message1);




// Fix the code to welcome the boss
let message;
let lock = false;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);



// Change the code to print 3 2 1
let i = 3;
while (i) {
  console.log( i-- );
}




// Change the code to print 1 to 10 in 4 lines
let num = 1
for(i=1;i<10;i++){
    console.log(num );
    num+=1
}


// print even numbers
for (let num1 = 2; num1 <= 20; num1 += 1) {
    if(num1 % 2 == 0) {
        console.log(num1);
    }
}



let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}



let countdown = 100;
while (countdown < 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}
console.log("bomb defused");



var lemein2 = "0";
var lemeout2 = 0;
var msg2 = "";
if (lemein2) {
 msg2 += "hi";
 }
if (lemeout2) {
 msg2 += "Hello";
}
console.log(msg2);
// o/p is hi, beacause the lemein1 is true and lemeout1 is false.


var lemein1 = "0";
var lemeout1 = 0;
var msg1 = "";
if (lemein1) {
 msg1 += "hi";
 }
if (lemeout1) {
 msg1 += "Hello";
}
console.log(msg1);
// o/p is hi, beacause the lemein1 is true and lemeout1 is false.






