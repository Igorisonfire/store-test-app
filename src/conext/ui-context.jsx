import {createContext, useState} from 'react'
import * as React from 'react'

export const UiContext = createContext(null)

export function UiContextProvider(props) {
    const [wishlistIsEmpty, setWishlistIsEmpty] = useState(true)

    const state = {
        wishlistIsEmpty,
        setWishlistIsEmpty
    }

    return (
        <UiContext.Provider value={state}>
            {props.children}
        </UiContext.Provider>
    )
}
