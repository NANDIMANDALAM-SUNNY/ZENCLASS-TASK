fetch('https://restcountries.com/v2/all?fields=name,capital,currencies,region,subregion,population,flag').then((data)=>{
    return data.json();
}).then((datacoming)=>{
    let data = ""
    datacoming.map((item)=>{
        console.log(item.flags);

        data += `<div class="container">
        <div class="card">
            <img src="${item.flag}" width="480" height="300px"  class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
            </div>
        </div>
    </div>`
    })
document.getElementById('data').innerHTML = data;
}).catch((error)=>{
    console.log(error);

});