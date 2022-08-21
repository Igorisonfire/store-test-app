import * as React from 'react'
import './index.scss'
import {Link} from "react-router-dom";

export const MoviePreviewItem = (props) => {
    const {movie} = props

    return(
        <li className={'movie-preview-item'}>
            <Link to={`movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt={movie.title}/>
                <p>{movie.title}</p>
            </Link>
        </li>

    )
}