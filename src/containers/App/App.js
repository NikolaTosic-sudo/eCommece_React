import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import axios from "axios";

import GridOfProducts from "../GridOfProducts/GridOfProducts";
import SignUp from '../SignUp/SignUp'
import Cart from '../../components/Cart/Cart'
import Checkout from "../Checkout/Checkout";
import Header from "../../components/Header/Header";

const App = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [changed] = useState(false);
    const [cart, setCart] = useState([]);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const [search, setSearch] = useState('');

    // Changing search state based on search input of an user to find desirable product

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    };

    // Fetching data from a fake REST API

    const gettingData = () => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products/`)
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
            })
    };

    // Fetching data on re-render, also used `changed` state to tell program whether it is necessary to fetch data again based on whether database/data changed or not. This is the only use of `changed` for now

    useEffect(() => gettingData(), [changed]);

    // Getting id of a product from Child component and adding it to the cart

    const addingToCart = (id) => {
        products.map(product => {
            if(product.id === id){
                setCart([...cart, product]);
                return null
            } else {
                return null
            }
        })
    };

    // Getting index of a product from Child component and removing it from the cart

    const removingFromCart = (productIndex) => {
        setCart(cart.filter((product, index) => index !== productIndex));
    };

    // Calculating total price of the cart whenever cart has been changed

    useEffect(() => {
        let price = 0;
        cart.map(product => price += product.price);
        setCartTotalPrice(price);
    }, [cart]);

    // Filtering all products on home page/in cart, based on user's search

    const allProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));

    const allCart = cart.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));

        return (
                <Router>
                    <Route exact path={'/'}>
                        <Header change={handleOnChange} number={cart.length}/>
                        <GridOfProducts addingToCart={addingToCart} error={error} loading={loading} products={allProducts} />
                    </Route>
                    <Route path={'/sign-up'}>
                        <SignUp />
                    </Route>
                    <Route path={'/cart'}>
                        <Header change={handleOnChange} cart={true}/>

                        { /*Checking is there anything in cart, if not redirect to home page*/ }
                        {cart.length > 0 ? <Cart removingFromCart={removingFromCart} cart={allCart} totalPrice={cartTotalPrice.toFixed(2)} /> : <Redirect to={'/'} />}
                    </Route>
                    <Route path={'/checkout'}>
                        <Checkout total={cartTotalPrice} products={cart} />
                    </Route>
                </Router>
        )
};

export default App;
