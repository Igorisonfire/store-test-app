import * as React from 'react'
import './index.scss'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const WishlistLink = () => {
    const [isEmpty, setIsEmpty] = useState(true)
    const wishlistStr = localStorage.getItem('wishlist')

    useEffect(() => {
        setIsEmpty(!wishlistStr)
    }, [wishlistStr])

    return (
        <Link to={'/wishlist'}>
            Wishlist &nbsp;
            {isEmpty ? <span>&#9734;</span> : <span>&#9733;</span>}
        </Link>
    )
}

export default WishlistLink