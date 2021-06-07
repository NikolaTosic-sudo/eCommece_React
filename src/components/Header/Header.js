import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import {Button, Menu, MenuItem, Badge} from "@material-ui/core";
import {Link} from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuBookIcon from '@material-ui/icons/MenuBook';

const Header = ({change, cart, number}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <SearchBox change={change} />
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuBookIcon /> User
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {cart ?
                    <div>
                        <MenuItem onClick={handleClose}>
                            <Link style={{color: 'black'}} to='/'>
                                Keep Shopping
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link style={{color: 'black', textDecoration: 'none'}} to='/checkout'>
                                Checkout
                            </Link>
                        </MenuItem>
                    </div>
                    :
                    <div>
                        <MenuItem onClick={handleClose}>
                            <Link style={{color: 'black'}} to='/cart'>
                                <Badge badgeContent={number} color='primary'>
                                    <ShoppingCartIcon />
                                </Badge>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link style={{color: 'black', textDecoration: 'none'}} to='/sign-up'>
                                Sign Up
                            </Link>
                        </MenuItem>
                    </div>
                }
            </Menu>
        </div>
    )
};

export default Header