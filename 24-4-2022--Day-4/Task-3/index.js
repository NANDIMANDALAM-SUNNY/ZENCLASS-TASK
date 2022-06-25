fetch('https://restcountries.com/v2/all?fields=name,capital,currencies,region,subregion,population,flag').then((data)=>{
    return data.json();
}).then((datacoming)=>{
    let data = "";

    datacoming.map((item)=>{
        console.log(item.name);
        console.log(item.capital);
        console.log(item.region);
        console.log(item.subregion);
        console.log(item.population);
        console.log(item.flag);
        console.log(item)
        data += `<div class="container">
        <div class="item">
            <img src="${item.flag}" wwidth="480" height="300px" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Country Name : ${item.name}</h5>
                <p class="card-text">Capital : ${item.capital}</p>
                <p class="card-text">Region : ${item.region}</p>
                <p class="card-text">Subregion : ${item.subregion}</p>
                <p class="card-text">Population : ${item.population}</p>
            </div>
        </div>
    </div>`
    })
document.getElementById('data').innerHTML = data;
}).catch((error)=>{
    console.log(error);

});