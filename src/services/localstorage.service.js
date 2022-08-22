
export const setIdToLocalStorageWishlist = (id) => {
    const currentWishlistStr = localStorage.getItem('wishlist')
    const currentWishlistArr = currentWishlistStr ? currentWishlistStr.split(',') : []
    const newWishlistArr = currentWishlistArr.concat(id.toString())

    localStorage.setItem('wishlist', newWishlistArr.join(','))
}

export const removeIdFromLocalStorageWishlist = (id) => {
    const currentWishlistStr = localStorage.getItem('wishlist')
    const currentWishlistArr = currentWishlistStr ? currentWishlistStr.split(',') : []
    const newWishlistArr = currentWishlistArr.filter((item) => item !== id.toString())

    localStorage.setItem('wishlist', newWishlistArr.join(','))
}