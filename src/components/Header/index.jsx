import * as React from 'react'
import './index.scss'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className={'container'}>
                <Link to={'/'}>Home</Link>
            </div>
        </header>
    )
}

export default Header