import React from "react";

const Product = React.memo(({ product, onAddToCart }) => {
    console.log(`Rendering Product: ${product.name}`);
    
    return (
    <div className="product">
    <h3>{product.name}</h3>
    <p>Qiymət: ${product.price}</p>
    <p>Kateqoriya: {product.category}</p>
    <button onClick={() => onAddToCart(product.id)}>Səbətə əlavə et</button>
    </div>
    );
});

export default Product