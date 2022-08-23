import * as React from 'react'
import './index.scss'
import {Link} from "react-router-dom";
import {generateImgUrl} from "../../helpers/generateImgUrl";

export const MoviePreviewItem = (props) => {
    const {movie} = props

    return(
        <li className={'movie-preview-item'}>
            <Link to={`/movie/${movie.id}`}>
                <img loading={'lazy'} src={generateImgUrl(movie.poster_path, 300)} alt={movie.title}/>
                <p>{movie.title}</p>
            </Link>
        </li>

    )
}