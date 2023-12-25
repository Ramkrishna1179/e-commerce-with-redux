import React, { useState } from 'react';
import { removeFromCart } from '../redux/actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const groupedCartItems = cartItems.reduce((acc, currentItem) => {
        const existingItem = acc.find((item) => item.id === currentItem.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            acc.push({ ...currentItem, quantity: 1 });
        }
        return acc;
    }, []);

    const [showModal, setShowModal] = useState(false);

    const handleCheckout = () => {
        setShowModal(true);
    };

    const handleRemove = (productId, quantity) => {
        dispatch(removeFromCart(productId, quantity));
    };

    return (
        <div className="container">
            <h2>Your Cart</h2>
            <div className="row mt-5">
                {groupedCartItems.map((item) => (
                    <div key={item.id} className="col-sm-1 col-lg-3">
                        <div className="card">
                            <img src={item.image} className="card-img" alt={item.title} />
                            <div className="card-body">
                                <h6 className="card-title">{item.title}</h6>
                                <p className="card-text">${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button className="btn btn-danger" onClick={() => handleRemove(item.id, item.quantity)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="cart-footer text-center mb-5">
                    <h3>Total: ${groupedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h3>
                    <button className="btn btn-primary ms-2" onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Checkout</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>checkout functionality </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setShowModal(false)}>
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary" onClick={() => alert('checkout functionality')}>
                                    Confirm Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
