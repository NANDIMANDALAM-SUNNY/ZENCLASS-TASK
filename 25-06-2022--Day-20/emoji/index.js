let data = []; 
const searchbar = document.getElementById('searchemoji');
searchbar.addEventListener('keyup', (e) => {
    search_term = e.target.value;
    console.log(search_term)
    const searchFilter = data.filter((curItem) => curItem.name.toLowerCase().includes(search_term.toLowerCase()));
    displayData(searchFilter);
})

const FetchData = async () => {
    try {
        const response = await fetch(`https://emojihub.herokuapp.com/api/all`);
        data = await response.json(); 
        displayData(data);
    } catch (error) {
        console.error(error);
    }
};

const displayData = (response) => {
    let html = '';
    response.map((values,index) => {
        html += `
        <tr>
               <th scope="row">${index+1}</th>
               <td>${values.name}</td>
               <td>${values.htmlCode[0]}</td>
               <td>${values.unicode[0]}</td>
           </tr>     
        `;
    }
    );
    document.getElementById('emojiSection').innerHTML = html;
}
FetchData();
 