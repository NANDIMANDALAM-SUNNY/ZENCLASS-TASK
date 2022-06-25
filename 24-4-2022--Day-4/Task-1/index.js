var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
let bool = true;
let n = Object.keys(obj1).length;
let m =Object.keys(obj2).length;
if(n == m)
{
    for(i in obj1)
    {
        if(obj1[i] == obj2[i])
        {
            continue;
        }
        else{
            bool = false;
            break;
        }
    }
}
else{
    bool = true;
}
(bool == true) ? console.log("Both Objects equal") : console.log("Both Objects are not equal");