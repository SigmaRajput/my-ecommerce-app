import React from 'react';
import Wishlist from './Wishlist';

function Item(props) {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="###" height="600px"></img>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">RECENT PRODUCTS</h5>
                        <p className="card-text lead fs-2">
                            LIST ALL PRODUCTS
                        </p>
                    </div>

                </div>
            </div>
            <Wishlist/>
        </div>
    );
}

export default Item;