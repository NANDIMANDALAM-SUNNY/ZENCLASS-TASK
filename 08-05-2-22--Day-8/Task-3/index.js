const heading = document.createElement('h1');
heading.classList.add('heading');
heading.textContent = 'Using Filter Funtion';
document.body.appendChild(heading);

const main = document.createElement('div')
main.id="main"
main.className="mainclass"
document.body.appendChild(main)

fetch('https://restcountries.com/v3.1/all')
.then((data)=>{
    return data.json()
})
// using forEach
.then((data)=>{
    data.forEach((item)=>{
        console.log(item)
           let html = `
        <div class="item">
        <img src="${item.flags.png}" width="350" height="300px" class="card-img-top" alt="...">
            <p>Name : ${item.altSpellings[0]}</p>
            <p>Capital : ${item.capital}</p>
            <p>Population : ${item.population}</p>
        </div>
            `
        document.getElementById('main').innerHTML+=html
        
    })
}
)

 