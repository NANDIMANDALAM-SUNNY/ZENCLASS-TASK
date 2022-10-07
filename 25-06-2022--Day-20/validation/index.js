//mobile input
const getMobileData = (form)=> {
    const number = document.forms[0].number.value;    
     const url = `https://phonevalidation.abstractapi.com/v1/?api_key=260417e303494887a27de503bfbdab0d&phone=${number}`
    const getapi=async(url)=>{    
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        document.getElementById("details").innerHTML = `
        <p class="m-1">Mobile Number is  ${data.valid==true ?"Valid":"Invalid" } </p>
             ${data.valid==true ?`
             <p class="m-1">InterNational number : ${data.format.international} </p>
             <p class="m-1">Local number : ${data.format.local} </p>
             <p class="m-1">Country :  ${data.country.name} </p>
             <p class="m-1">Prefix :  ${data.country.prefix} </p>
             <p class="m-1">Location :  ${data.location} </p>
             <p class="m-1">Mobile Number type :  ${data.type} </p>
             <p class="m-1"> Mobile Carrier :  ${data.carrier} </p>
             `:"" }
        `;
    }
    getapi(url);
}

//Gmail details

const getEmailData = (form)=> {
    const email = document.forms[1].email.value
    const url = `https://emailvalidation.abstractapi.com/v1/?api_key=937f870b041b470ea2e5d95e7e531059&email=${email}`
    const getapi=async(url)=>{    
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        document.getElementById("email").innerHTML = `
        <p class="m-1">Quality score is  ${data.quality_score} </p>
             ${data.valid==true ?`
             `:"" }
        `;
    }
    getapi(url);

    // document.getElementById("email").innerHTML = data;
}

const getLocation = ()=>{
    const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=cb9569679bd5473cad06ceacc145a78d`
    const getapi=async(url)=>{    
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        document.getElementById("location").innerHTML =`
        <p>Ip Address : ${data.ip_address}</p>
        <p>Country : ${data.country}</p>
        <p>Region : ${data.region}</p>
        <p>ISO Code :${data.region_iso_code}</p>
        <p>City : ${data.city}</p>
        <p>Longitude : ${data.longitude}</p>
        <p>Latitude : ${data.latitude}</p>
        <p>Latitude : ${data.latitude}</p>
        <p>Vpn :  ${data.security.is_vpn}
        <p>Service Provider :  ${data.connection.autonomous_system_organization}
        <p>Connection Type:  ${data.connection.connection_type}
        
        `
    }
    getapi(url);

    // document.getElementById("email").innerHTML = data;
}




const screenShot = (form)=>{
    const screenShot = document.forms[2].screenshot.value
    const url = `https://screenshot.abstractapi.com/v1/?api_key=5d8a6d5f7995453fb3a10f84efd958ee&url=${screenShot}`
    const getapi=async(url)=>{    
        const response = await fetch(url);
        document.getElementById("screenshot").innerHTML =`
        <img src="${response.url}"  width="300px" height="500px"/>
       <a href="${response.url}" download><button class="btn btn-secondary">click here</button> </a>
        `
    }
    getapi(url);

    // document.getElementById("email").innerHTML = data;
}


