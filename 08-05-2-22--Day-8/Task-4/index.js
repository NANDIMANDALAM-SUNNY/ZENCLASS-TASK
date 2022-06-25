const Total=document.createElement('h1');
Total.classList.add('heading');
Total.id="total";
document.body.appendChild(Total);

fetch('https://restcountries.com/v3.1/all')
.then((data)=>{
    return data.json()
})
// using reduce function calculate total population and render
.then((data)=>{
    let total=data.reduce((acc,item)=>{
        return acc+item.population
    },0)
    document.getElementById('total').innerHTML=`Total Population : ${total}`
    console.log(total)
}
)
 