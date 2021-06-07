import React from 'react'
import SingleProduct from "../SingleProduct/SingleProduct";
import {Grid, Typography, Paper} from "@material-ui/core";


const Cart = ({cart, removingFromCart, totalPrice}) => {

    // Getting cart as a props and looping over it to post every product

    let fullCart = cart.map((product, index) =>
            <Grid item key={index}>
                        <SingleProduct
                            removingFromCart={removingFromCart}
                            id={product.id}
                            index={index}
                            name={product.title.substring(0,25)}
                            desc={product.description.substring(0,150)}
                            image={product.image}
                            price={product.price}
                            cart={true}
                        />
            </Grid>
        );

        return (
            <Grid container>
                <Grid container justify='center'>
                    <Grid container justify="center" spacing={6}>
                        {fullCart}
                    </Grid>
                    <Grid container justify='center' style={{marginTop: '30px'}}>
                        <Paper elevation={4}>
                            <Typography style={{padding: 8}} variant='h5'>
                                Total Price: {totalPrice}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        )
    };

export default Cart