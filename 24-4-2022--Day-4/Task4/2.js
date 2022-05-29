// Task 2: Simple Programs todo for Operators

// 2.1-->Square of a number
let num = 5;
console.log(num*num);
console.log(Math.pow(num,2));

// 2.2-->swapping two numbers using third variable
let a = 10;
let b = 20;
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

// 2.3-->Addition of three numbers
let d = 10,e = 20,f = 30;
console.log(d+e+f);

// 2.4--> celcius to fahrenheit
let celcius = 25;
let fahrenheit = (celcius * 9/5) + 32;
console.log(fahrenheit);

// 2.5-->meter to miles
let meter = 1000;
let miles = meter * 0.000621371;
console.log(miles);

// 2.6-->pounds to kgs
let pounds = 200;
let kgs = pounds * 0.453592;
console.log(kgs);

// 2.7-->calculate batting average
let runs = 100;
let matches = 50;
let battingAverage = runs/matches;
console.log(battingAverage);

// 2.8-->Calculate five test scores and print their average
let test1 = 50;
let test2 = 60;
let test3 = 70;
let test4 = 80;
let test5 = 90;
let average = (test1+test2+test3+test4+test5)/5;
console.log(average);

// 2.9-->Power of any number x ^ y.
let num1 = 2;
let num2 = 3;
let res = Math.pow(num1,num2);
console.log(res);

// 2.10-->Calculate Simple Interest
let principle = 1000;
let rate = 10;
let time = 2;
let simpleInterest = (principle*rate*time)/100;
console.log(simpleInterest);

// 2.11-->Calculate area of an equilateral triangle
let side = 5;
let areaOfEquilateral = (side*side*Math.sqrt(3))/4;
console.log(areaOfEquilateral);

// 2.12-->Area Of Isosceles Triangle
let baseOfIsosceles = 5;
let heightOfIsosceles = 6;
let areaOfIsosceles = (baseOfIsosceles*heightOfIsosceles)/2;
console.log(areaOfIsosceles);

// 2.13-->volume of sphere
let radiusSphere= 5;
let volumeSphere = (4/3)*Math.PI*Math.pow(radiusSphere,3);
console.log(volumeSphere);

// 2.14-->Volume Of Prism
let basePrism = 5;
let heightPrism = 6;
let volumePrism = (basePrism*heightPrism)/2;
console.log(volumePrism);

// 2.15-->Find area of a triangle.
let baseTriangle = 5;
let heightTriangle = 6;
let areaTriangle = (baseTriangle*heightTriangle)/2;
console.log(areaTriangle);

// 2.16-->Give the Actual cost and Sold cost, Calculate Discount Of Product
let actualCost = 1000;
let soldCost = 900;
let discount = (actualCost-soldCost)/actualCost*100;
console.log(discount+"%");

// 2.17-->Given their radius of a circle and find its diameter, circumference and area.
let radius = 5;
let diameter = radius*2;
let circumference = 2*Math.PI*radius;
let area = Math.PI*Math.pow(radius,2);
console.log(diameter);
console.log(circumference);
console.log(area);
// 2.18-->Given two numbers and perform all arithmetic operations.
let g = 10;
let h = 20;
let i = a+b;
let j = a-b;
let k = a*b;
let l = a/b;
console.log(i);
console.log(j);
console.log(k);
console.log(l);

// 2.19-->Display the asterisk pattern as shown below(No loop needed):
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

// 2.20-->Calculate electricity bill?
let energy = 100;
let perUnitRate = 10;
let energyBill = energy*perUnitRate;
console.log(energyBill);

// 2.21-->Program To Calculate CGPA
let marks1 = 80;
let marks2 = 90;
let marks3 = 70;
let marks4 = 85;
let marks5 = 95;
let totalMarks = 500;
let cgpa = (marks1+marks2+marks3+marks4+marks5)/totalMarks*10;
console.log(cgpa);
