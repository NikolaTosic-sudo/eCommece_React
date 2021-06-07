import React from 'react'
import Loader from "../../components/Loader/Loader";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import Aux from '../../hoc/Auxiliary'

import Grid from "@material-ui/core/Grid";

const GridOfProducts = ({loading, products, addingToCart}) => {

        // Returning only Loader if there are no products

        if(loading) {
            return <Loader />
        }

        // Mapping through products and returning them

        if(products.length > 0){
                products = products.map(product =>
                    <Grid key={product.id} item>
                        <SingleProduct
                            id={product.id}
                            addingToCart={addingToCart}
                            cart={false}
                            name={product.title.substring(0,25)}
                            desc={product.description.substring(0,150)}
                            image={product.image}
                            price={product.price} />
                    </Grid>);
        }

        return (
            <Aux>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={4}>
                            {products}
                        </Grid>
                    </Grid>
                </Grid>
            </Aux>
        );
};

export default GridOfProducts