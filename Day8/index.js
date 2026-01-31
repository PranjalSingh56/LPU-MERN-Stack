/*
function getUsers(callback) {
    setTimeout(() => {
        console.log("USer Fetched");
        callback()
        
    }, 2000);

}

function getPosts(callback) {
    setTimeout(() => {
        console.log("comment Fetched");
        callback()
        
    }, 3000);

}
function getComments(callback) {
    setTimeout(() => {
        console.log("comment Fetched");
        callback()
        
    }, 1000);

}

getUsers(()=>{
    getPosts(()=>{
        getComments(()=>{
            console.log("All Data Fetched");
            
        })
    })
})
*/

/*
// callback- code readable, code maintainance, hard error handling, messy code
// promises -  chainable, light code, use .catch, easily code maintainence
const promisesOne =  new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promises1called");
        resolve()
        
    }, 2000);
})
promisesOne.then(()=>{
    console.log("promises Consumed");
    

})

new Promise((resolve, reject) => {
    console.log("Promise two called");
    resolve()
}).then(()=>{
    console.log("task 2 completed");
    
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("task three");
        resolve({name:"Raj", city:"Punjab"})
    },2000)
    
})
promiseThree.then((user)=>{
    console.log(user);
    
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("task four");
        let error = false
    if(!error){
        resolve({name:"Raj", city:"Punjab"})
    }else{
        reject("Something Went wrong")
    }
       
    },2000)
    
})
promiseFour.then((user)=>{
    console.log(user.name);
    console.log(user.city);
}).catch((err)=>{
    console.log(err);
    
}) 

*/
//fetch is a function which return promises

// function fetch(url) {
//     return new Promise((resolve, reject) => {
//         resolve(responseObject)

//         reject(err)
//     })
// }



// function fetchData (){
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res=>{
//     return res.json()
// }).then(data=>{
//     displayData(data.title ) 
    
// }).catch(err=>{
//     console.log(err);
    
// })

// }
/*
const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res => res.json())
    .then(data => displayData(data))
    .catch(err => console.log(err));
};

const displayData = (data) => {
  let text = document.getElementById("data");
  text.innerHTML = "";

  data.forEach(element => {
    let p = document.createElement("p");
    p.innerText = element.title;
    text.appendChild(p);
  });
};

let button = document.getElementById("btn");
button.addEventListener("click", fetchData);

*/

const fetchProduct = () => {
    const query = document.getElementById("searchInput").value.trim();
  fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        const filteredProducts = data.products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );

      showData(filteredProducts)
    })
    .catch(err => console.log(err));
};

const showData = (products) => {
  let container = document.getElementById("product-container");
  container.innerHTML = "";

  products.forEach(product => {
    let div = document.createElement("div");
    if (products.length === 0) {
    container.innerHTML = "<p>No products found</p>";
    return;
  }

    div.innerHTML = `
      <h3>${product.title}</h3>
      <img src="${product.thumbnail}" width="150"/>
      <p>Price: ₹${product.price}</p>
      <hr>
    `;

    container.appendChild(div);
  });
};


let buttons = document.getElementById("searchBtn");
buttons.addEventListener("click", fetchProduct);

buttons.addEventListener("click", ()=>{
    let query = document.getElementById("searchInput").value
    console.log(query);
    if (!query) {
    alert("Please enter a search term");
    return;
  }
    window.location.href = `search.html?q=${encodeURIComponent(query)}`
})








