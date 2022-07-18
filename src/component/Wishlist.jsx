import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';


function Wishlist() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let Mounted_val = true;

    useEffect(() => {
        const getItems = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (Mounted_val) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                Mounted_val = false;
            }
        }
        getItems();
    },
        []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-2">
                    <Skeleton height={200} />
                </div>
                <div className="col-md-2">
                    <Skeleton height={200} />
                </div>
                <div className="col-md-2">
                    <Skeleton height={200} />
                </div>
                <div className="col-md-2">
                    <Skeleton height={200} />
                </div>
                <div className="col-md-2">
                    <Skeleton height={200} />
                </div>
            </ >
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }
    const ShowItems = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-3"
                        onClick={() =>
                            setFilter(data)
                        }>
                        All</button>
                    <button className="btn btn-outline-dark me-3"
                        onClick={() =>
                            filterProduct("Households")
                        }>
                        Households</button>
                    <button className="btn btn-outline-dark me-3"
                        onClick={() =>
                            filterProduct("Sport")
                        }>
                        Sports</button>
                    <button className="btn btn-outline-dark me-3"
                        onClick={() =>
                            filterProduct("gadgets")
                        }>
                        Gadgets</button>
                    <button className="btn btn-outline-dark me-3"
                        onClick={() =>
                            filterProduct("Acessories")
                        }>
                        Acessories</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-70 text-center p-3" key={product.id}>
                                    <img class="card-img-top" src={product.image} alt={product.title} height="200px"></img>
                                    <div class="card-body">
                                        <h4 class="card-title mb-0"> {product.title.substring(0, 20)}...</h4>
                                        <p class="card-text lead fw-bold">
                                            &#x20B9; {product.price}
                                        </p>
                                        <NavLink to={'/wishlist/${commodity.id}'} class="btn btn-outline-dark">
                                            View Item
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                )}
            </>
        );

    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h3 className="display-6 fw-bolder text-center">New Arrivals</h3>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowItems />}
                </div>
            </div>
        </div>
    );
}

export default Wishlist;