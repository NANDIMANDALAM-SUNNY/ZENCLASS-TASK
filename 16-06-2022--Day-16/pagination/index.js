
const itemsPerPage = 15; // Number of items to display per page
let currentPage = 1; // Current page number
let data = []; // Array to hold fetched data

// Fetch data from the API
fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then(response => response.json())
  .then(json => {
    data = json;
    displayData();
    setupPagination();
  })
  .catch(error => console.error(error));

// Display the data for the current page
function displayData() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = data.slice(start, end);
  paginatedItems.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Setup the pagination
function setupPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  const totalPages = Math.ceil(data.length / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("div");
    pageItem.classList.add("page-item");
    if (i === currentPage) {
      pageItem.classList.add("active");
    }
    pageItem.textContent = i;
    pageItem.addEventListener("click", () => {
      currentPage = i;
      displayData();
      const currentActive = document.querySelector(".page-item.active");
      currentActive.classList.remove("active");
      pageItem.classList.add("active");
    });
    pagination.appendChild(pageItem);
  }
  
  pagination.style.display = "grid";
  pagination.style.gridTemplateColumns = `repeat(${totalPages}, auto)`;
  pagination.style.placeItems = "center";
}
