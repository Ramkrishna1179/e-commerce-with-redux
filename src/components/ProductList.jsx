import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../redux/actions/cartActions';

const ProductList = () => {
    const dispatch = useDispatch();

    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error in fetching the products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="products-container">
            <h2 className="heading">Product Listing</h2>

            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="products-column">

                        <div className="card">
                            <img src={product.image} className="card-img" alt={product.title} />
                            <div className="card-body">
                                <h6 className="card-title">{product.title}</h6>
                                <p className="card-text">${product.price}</p>
                                <button className="add-to-cart-btn" onClick={() => dispatch(addToCart(product))}>
                                    Add to Cart
                                </button>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

