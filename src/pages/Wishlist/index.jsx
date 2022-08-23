import * as React from 'react'
import './index.scss'
import WishlistItem from "../../components/WishlistItem";

const Wishlist = () => {
    const wishlistStr = localStorage.getItem('wishlist')
    const wishlistArr = wishlistStr ? wishlistStr.split(',') : []

    return (
        <div className={'page container wishlist-page'}>
            <h1>Wishlist</h1>
            <div className={'wishlist-grid-layout'}>
                {wishlistArr.map((id) => (
                    <WishlistItem key={id} movieId={id}/>
                ))}
                {!wishlistArr.length && <p>Wishlist is empty...</p>}
            </div>
        </div>
    )
}

export default Wishlist