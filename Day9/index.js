/*
let allProducts = [];
let currentPage = 1;
const itemsPerPage = 6;

const fetchProducts = () => {
  fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
      allProducts = data.products;
      renderProducts();
    })
    .catch(err => console.log(err));
};

const renderProducts = () => {
  const container = document.getElementById("list");
  container.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = filtered.slice(start, end);

  paginatedItems.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.title}</h3>
      <img src="${product.thumbnail}">
      <p>₹${product.price}</p>
    `;

    container.appendChild(card);
  });

  renderPagination(filtered.length);
};

const renderPagination = (totalItems) => {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;

    if (i === currentPage) btn.disabled = true;

    btn.addEventListener("click", () => {
      currentPage = i;
      renderProducts();
    });

    pagination.appendChild(btn);
  }
};

document.getElementById("searchBtn").addEventListener("click", () => {
  currentPage = 1;
  
  renderProducts();
});
document.getElementById("searchInput").addEventListener("input", () => {
  currentPage = 1;
  renderProducts();
});

fetchProducts();
*/

const { jsx } = require("react/jsx-runtime");

/*
let allProducts = [];
let currentPage = 1;
const itemsPerPage = 6;

const fetchProducts = () => {
  fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
      allProducts = data.products;
      renderProducts();
    })
    .catch(err => console.log(err));
};

const renderProducts = () => {
  const container = document.getElementById("list");
  container.innerHTML = "";

  document.getElementById("page").innerText = `Page ${currentPage}`;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const paginatedItems = allProducts.slice(start, end);

  paginatedItems.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    // console.log(product);
    

    card.innerHTML = `
      <h3>${product.title}</h3>
      <img src="${product.thumbnail}">
      <p>₹${product.price}</p>
    `;

    container.appendChild(card);
  });
};

// Buttons
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () => {
  const totalPage = Math.ceil(allProducts.length / itemsPerPage);
  if (currentPage < totalPage) {
    currentPage++;
    renderProducts();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderProducts();
  }
});

// Call API on load
fetchProducts();
*/
// Local Storage
/*
localStorage.setItem("username" ,"Raj")
localStorage.setItem("city" ,"Punjab")
localStorage.setItem("profile" ,"Developer")

localStorage.removeItem("city")
localStorage.clear()
*/
let input = document.getElementById("input")
let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    let query = input.value.trim();
    if(query == "") return
    let history = JSON.parse(localStorage.getItem("searchHistory")) || []
    history.push(query)
    localStorage.setItem("searchHistory", JSON.stringify(history))
    console.log("SaveHistory", history);
    showHistory()
    input.value = ""
    

})

 const showHistory= ()=>{
    let history = JSON.parse(localStorage.getItem("searchHistory"))
    let list = document.getElementById("historyList")
    list.innerHTML = ""
    history.forEach(item => {
        let li = document.createElement("li")
        li.textContent = item
        list.appendChild(li)
    });

}
