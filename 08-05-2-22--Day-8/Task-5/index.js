const main=document.createElement('div');
main.classList.add('main');
main.id="main";
document.body.appendChild(main);

fetch('https://restcountries.com/v3.1/all')
.then((data)=>{
    return data.json()
})
.then((data)=>{
    console.log(data)
    console.log(data.map((item)=>{
        if(item.currencies=="USD"){
            return item
        }
    }
    )
        )
    // let html=""
    // data.filter((item)=>{
    //     if(item.currencies==="USD"){
    //         html += `
    //     <div class="item">
    //         <img src="${item.flag}" width="350" height="300px" class="card-img-top" alt="...">
    //         <p>Name : ${item.name}</p>
    //         <p>Capital : ${item.capital}</p>
    //         <p>Population : ${item.population}</p>
    //     </div>
    //         `
    //     document.getElementById('main').innerHTML=html
    //     }
    // }
    // )

})
 