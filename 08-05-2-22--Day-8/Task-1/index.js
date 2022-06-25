const heading = document.createElement('h1');
heading.classList.add('heading');
heading.textContent = 'Asian Countries';
document.body.appendChild(heading);

const main = document.createElement('div')
main.id="main"
main.className="mainclass"
document.body.appendChild(main)

fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,population,flags')
.then((data)=>{
    return data.json()
})

// render only asian countries
.then((data)=>{
    let html=""
    data.filter((item)=>{
        if(item.region==="Asia"){
            console.log(item.flags.png)
           html += `
        <div class="item">
            <img src="${item.flags.png}" width="350" height="300px" class="card-img-top" alt="...">
            <p>Region : ${item.region}</p>
            <p>Capital : ${item.capital}</p>
            <p>Subregion : ${item.subregion}</p>
        </div>
            `
        document.getElementById('main').innerHTML=html
        }
    })
})
let data={
    flags:{
        png:"https://restcountries.com/data/afg.svg",
        svg:"https://restcountries.com/data/ala.svg",
    }
}
console.log(data.flags.png)