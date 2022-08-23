import * as React from 'react'
import './index.scss'
import {useContext, useEffect, useState} from "react";
import {removeIdFromLocalStorageWishlist, setIdToLocalStorageWishlist} from "../../services/localstorage.service";
import {UiContext} from "../../conext/ui-context";

const WishlistButton = (props) => {
    const {movieId} = props
    const [active, setActive] = useState(false)
    const {setWishlistIsEmpty} = useContext(UiContext);
    const wishlistStr = localStorage.getItem('wishlist')



    useEffect(() => {
        if(wishlistStr && wishlistStr.search(movieId) !== -1) {
            setActive(true)
        }

        //update state for star in header
        setWishlistIsEmpty(!wishlistStr)
    }, [movieId, wishlistStr])

    const handleClick = () => {
        setActive(!active)

        if (!active) {
            setIdToLocalStorageWishlist(movieId)
        } else {
            removeIdFromLocalStorageWishlist(movieId)
        }
    }

    return (
        <button className={'wishlist-button'} onClick={handleClick}>
            {!active ? <span>Add to Wishlist &nbsp;</span> : <span>Remove from Wishlist &nbsp;</span>}
            {!active ? <span>&#9734;</span> : <span>&#9733;</span>}
        </button>
    )
}

export default WishlistButton