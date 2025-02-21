let products = document.querySelector('.products');
let allProducts = document.getElementById('all');
let electronics = document.getElementById('electronic');
let jewelery = document.getElementById('jewelery');
let menClothes = document.getElementById('men');
let womenClothes = document.getElementById('women');



async function getProducts(product) {
    let response = await fetch(`https://fakestoreapi.com/products/${product}`);
    let data = await response.json();

    products.innerHTML='';

    data.forEach(prod=> {
        products.innerHTML+=
        `<div class="product-card">
                  <img class="product-img" src="${prod.image}" alt="${prod.title}">
                  <p>${prod.title}</p>
                  <p>$${prod.price}</p>
        </div>`
});
};
getProducts();

allProducts.addEventListener('click', ()=>getProducts(''));
electronics.addEventListener('click', ()=>getProducts('category/electronics'));
jewelery.addEventListener('click', ()=>getProducts('category/jewelery'));
menClothes.addEventListener('click', ()=>getProducts("category/men's clothing"));
womenClothes.addEventListener('click', ()=>getProducts("category/women's clothing"));


let searchInput = document.querySelector('.search-input');

async function searchProducts() {
    let response = await fetch('https://fakestoreapi.com/products');
    let data = await response.json();
    let searchItem = searchInput.value.toLowerCase();
    let filteredProducts = data.filter(prod=>prod.title.toLowerCase().includes(searchItem));
    products.innerHTML=filteredProducts.map(prod=>
        `<div class="product-card">
                  <img class="product-img" src="${prod.image}" alt="${prod.title}">
                  <p>${prod.title}</p>
                  <p>$${prod.price}</p>
        </div>`
    ).join('');
}

searchInput.addEventListener('input', searchProducts);