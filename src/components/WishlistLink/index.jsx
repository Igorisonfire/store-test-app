import * as React from 'react'
import './index.scss'
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UiContext} from "../../conext/ui-context";

const WishlistLink = () => {
    const {wishlistIsEmpty, setWishlistIsEmpty} = useContext(UiContext);
    const wishlistStr = localStorage.getItem('wishlist')

    useEffect(() => {
        setWishlistIsEmpty(!wishlistStr)
    }, [wishlistStr])

    return (
        <Link to={'/wishlist'}>
            Wishlist &nbsp;
            {wishlistIsEmpty ? <span>&#9734;</span> : <span>&#9733;</span>}
        </Link>
    )
}

export default WishlistLink