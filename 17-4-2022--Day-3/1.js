
var json = [{
    "id" : "Sunny", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach),I am a web developer",
    "task" : "zen portal task",
    "mail": "r170911@rguktrkv.ac.in"
},
{
    "id" : "nandimandalam", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach),I am a web developer",
    "task" : "zen portal task",
    "mail": "r170911@rguktrkv.ac.in"
}];

//for loop
for(let i = 0; i < json.length; i++) {
    let obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}

json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);
