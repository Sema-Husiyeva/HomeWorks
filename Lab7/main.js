let products=[
    {
        id:1,
        image: 'images/bluz.webp',
        p_name:'Bluz',
        price:'20 AZN',
        fav_icon:'images/favorite-icon.png'
    },
    {
        id:2,
        image: 'images/pant.webp',
        p_name:'Şalvar',
        price:'50 AZN',
        fav_icon:'images/favorite-icon.png'
    },
    {
        id:3,
        image: 'images/ayaqqabi.jpg',
        p_name:'Ayaqqabı',
        price:'60 AZN',
        fav_icon:'images/favorite-icon.png'
    }
];

let  wishlistBox=[];

let containerProducts= document.querySelector('.products');
let wishlist = document.querySelector('.wishlist');

containerProducts.innerHTML=products.map(product=>
    `<div class="products-item" data-id=${product.id}>
        <img class="products-item-img" src="${product.image}" alt="${product.p_name}">
        <div class="products-item-info">
          <div class="products-item-info-title">
            <h2 class="products-item-name">${product.p_name}</h2>
            <p class="products-item-price">${product.price}</p>
          </div>
          <img class="fav-icon" src="${product.fav_icon}" alt="fav-icon">
        </div>
    </div>`
).join('');

let productsItem = document.querySelectorAll('.products-item');

productsItem.forEach(product=>
    product.addEventListener('click',()=>{
        let productId=Number(product.getAttribute('data-id'));
        let favProduct=products.find(prod=>prod.id===productId);
        let isExist=wishlistBox.some(prod=>prod.id===productId);
        if(isExist){
            wishlistBox=wishlistBox.filter(prod=>prod.id!==productId);
        }
        else{
            wishlistBox.push(favProduct);
        }
        addWishlist();
    })
);



function addWishlist(){
    wishlist.innerHTML = wishlistBox.map(prod =>
    `<div class="products-item" data-id=${prod.id}>
        <img class="products-item-img" src="${prod.image}" alt="${prod.p_name}">
        <div class="products-item-info">
          <div class="products-item-info-title">
            <h2 class="products-item-name">${prod.p_name}</h2>
            <p class="products-item-price">${prod.price}</p>
          </div>
          <img class="fav-icon" src="${prod.fav_icon}" alt="fav-icon">
        </div>
    </div>`
).join('');
}

