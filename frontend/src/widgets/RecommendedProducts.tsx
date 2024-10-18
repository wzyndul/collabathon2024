import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface RecommendedProductsProps {
    products: Product[];
}

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({ products }) => {
    return (
        <div className="recommended-products">
            <h2>Recommended Products</h2>
            <div className="products-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedProducts;