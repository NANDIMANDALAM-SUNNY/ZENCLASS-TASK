fetch('https://restcountries.com/v2/all?fields=name,capital,currencies,region,subregion,population,flag').then((data)=>{
    return data.json();
}).then((datacoming)=>{
    let data = ""
    datacoming.map((item)=>{
        console.log(item.flag);
        data += `<div class="container">
        <div class="row">
        <div class="col-md-6  column">
        <div class="card">
            <img src="${item.flag}" width="500"  class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
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