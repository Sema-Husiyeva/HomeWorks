let products = document.querySelector('.products');
let allProducts = document.getElementById('all');
let electronics = document.getElementById('electronic');
let jewelery = document.getElementById('jewelery');
let menClothes = document.getElementById('men');
let womenClothes = document.getElementById('women');
let searchInput = document.getElementById('search-input');
let sortedProducts = document.getElementById('sorted-products');


let currentData = [];


async function getProducts(product = '') {
    let url = "https://fakestoreapi.com/products";
    if (product) {
        url += `/category/${product}`;
    }

    let response = await fetch(url);
    currentData = await response.json(); 

    sortProducts(); 
}

allProducts.addEventListener('click', () => getProducts(''));
electronics.addEventListener('click', () => getProducts('electronics'));
jewelery.addEventListener('click', () => getProducts('jewelery'));
menClothes.addEventListener('click', () => getProducts("men's clothing"));
womenClothes.addEventListener('click', () => getProducts("women's clothing"));

function showProducts(data) {
    products.innerHTML = data.map(prod => 
        `<div class="product-card">
            <img class="product-img" src="${prod.image}" alt="${prod.title}">
            <p class="product-title">${prod.title}</p>
            <p class="product-price">$${prod.price}</p>
        </div>`
    ).join('');
}

getProducts();

function sortProducts() {
    let sortedData = currentData; 
    let sortValue = sortedProducts.value; 

    if (sortValue === 'low-to-high') {
        sortedData.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'high-to-low') {
        sortedData.sort((a, b) => b.price - a.price);
    }

    showProducts(sortedData);
}

async function searchProducts() {
    let searchItem = searchInput.value.toLowerCase();

    let filteredProducts = currentData.filter(prod =>
        prod.title.toLowerCase().startsWith(searchItem) ||
        prod.title.toLowerCase().includes(searchItem)
    );

    showProducts(filteredProducts);
}


searchInput.addEventListener('input', searchProducts);
sortedProducts.addEventListener('change', sortProducts);

