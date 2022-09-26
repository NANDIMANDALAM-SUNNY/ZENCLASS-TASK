const fs = require('fs');
const express = require('express')
const path = require('path');
const http = require('http')


const app = express()

app.use(express())


app.get("/",(req,res)=>{
   
    const currentdate = JSON.stringify(new Date()); 
  const name = JSON.parse(currentdate).concat((".txt"))
  newStr = name.split(''); // or newStr = [...str];
  newStr.splice(10,14);
  newStr = newStr.join('');
  console.log(newStr)
  fs.writeFileSync(path.join(__dirname,"sampleFolder",newStr), currentdate,"UTF8")
  fs.readFile(`./sampleFolder/${newStr}`,'UTF-8',(err,data)=>{
      res.send(data)
      res.end()
  })
})


const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})

