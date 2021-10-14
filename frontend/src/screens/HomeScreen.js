import React, { useEffect } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <div>
            {/* if it's loading show loadingbox  */}
            {loading ?
                (<LoadingBox></LoadingBox>)
                //If there is an error show messagebox with the error
                : error ?
                    (<MessageBox variant="danger">{error}</MessageBox>)
                    : (
                        <div className="row center">
                            {products.map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}
                        </div>
                    )}
        </div>
    );
}