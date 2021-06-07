import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Snackbar} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Alert from '@material-ui/lab/Alert';
import Aux from '../../hoc/Auxiliary'
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: 400,
    },

});

const SingleProduct = ({image, name, desc, price, cart, addingToCart, id, removingFromCart, index}) => {
    const classes = useStyles();

    // Classes for 2 Snackbars for adding/removing from the cart

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    // Functions to add and remove item form a cart send ID/index back to parent to find the right product

    const added = () => {
        addingToCart(id);
        setOpen(true);
    };

    const removed = () => {
        removingFromCart(index);
        setOpen2(true)
    };

    return (
        <Aux>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        src={image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h4">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to='/checkout'>
                        <Button size="small" color="primary" onClick={added}>
                            Buy Now
                        </Button>
                    </Link>
                    {
                        cart ?
                            <Button size="small" color="primary" onClick={removed}>
                                <RemoveShoppingCartIcon/>
                            </Button>
                            :
                            <Button size="small" color="primary" onClick={added}>
                                <AddShoppingCartIcon/>
                            </Button>
                    }
                    <div>Price: {price} $</div>
                </CardActions>
            </Card>
            <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity="success">
                    Successfully Added To The Cart
                </Alert>
            </Snackbar>
            <Snackbar open={open2} autoHideDuration={4000} onClose={() => setOpen2(false)}>
                <Alert onClose={() => setOpen2(false)} severity="error">
                    Successfully Removed From The Cart
                </Alert>
            </Snackbar>
        </Aux>
    );
};

export default SingleProduct