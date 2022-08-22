import * as React from 'react'
import './index.scss'
import {Link} from "react-router-dom";
import WishlistLink from "../WishlistLink";

const Header = () => {
    return (
        <header>
            <div className={'container header-container'}>
                <Link to={'/'}>Home</Link>
                <WishlistLink/>
            </div>
        </header>
    )
}

export default Header