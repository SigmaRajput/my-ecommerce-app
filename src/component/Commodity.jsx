import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';



function Commodity() {
    const {id} = useParams()
    const [commodity, setCommodity] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const getCommodity = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products/${id}');

            setCommodity(await response.json());
            setLoading(false);
        }
        getCommodity();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-4">
                    <Skeleton height={300}/>
                </div>
                <div className="col-md-4" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={25} width ={150}/>
                    <Skeleton height={50}/>
                    <Skeleton height={150}/>
                    <Skeleton height={50} width= {100}/>
                    <Skeleton height={50} width= {100} style={{marginLeft:6}}/>
                </div>
                
            </>
        );  
    };
    const ShowCommodity = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={commodity.image} alt={commodity.title} height="300px" width="300px" />
                </div>
                <h3 className="text-uppercase text-black-50">
                    {commodity.category};
                </h3>
                <h1 className="display-5">
                    {commodity.title};
                </h1>
                <p className="lead fw-bolder">
                    Product Rating: {commodity.rating && commodity.rating.rate}
                </p>
                <i className="fa-fa-star"></i>
                <h3 className="display-6 fw-bold my-4">
                    &#x20B9; {commodity.price}
                </h3>
                <p className="lead">{commodity.description}</p>
                <button className="btn btn-outline-dark px-4 py-2">
                    Add to Cart
                </button>
                <NavLink className="btn btn-dark ms-2 px-3 py-4">
                    Go to Cart
                </NavLink>
            </>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowCommodity />}
                </div>
            </div>
        </div>
    );
}

export default Commodity;