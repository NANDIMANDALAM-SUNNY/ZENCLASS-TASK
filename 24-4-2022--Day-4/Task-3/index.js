fetch('https://restcountries.com/v2/all?fields=name,capital,currencies,region,subregion,population,flag').then((data)=>{
    return data.json();
}).then((datacoming)=>{
    let data = "";

    datacoming.map((item)=>{
        console.log(item.name);
        console.log(item.capital);
        console.log(item.currencies);
        console.log(item.region);
        console.log(item.subregion);
        console.log(item.population);
        console.log(item.flag);
        data += `<div class="container">
        <div class="row">
        <div class="col-md-6  column">
        <div class="card">
            <img src="${item.flag}" width="500"  class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Title : ${item.name}</h5>
                <p class="card-text">Capital : ${item.capital}</p>
                <p class="card-text">Currency : ${item.currencies}</p>
                <p class="card-text">Region : ${item.region}</p>
                <p class="card-text">Subregion : ${item.subregion}</p>
                <p class="card-text">Population : ${item.population}</p>

            </div>
        </div>
        </div>
        </div>
    </div>`
    })
document.getElementById('data').innerHTML = data;
}).catch((error)=>{
    console.log(error);

});