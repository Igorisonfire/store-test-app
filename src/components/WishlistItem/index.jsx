import * as React from 'react'
import './index.scss'
import {useEffect, useState} from "react";
import {getMovie} from "../../services/movie.service";
import {MoviePreviewItem} from "../MoviePreviewItem";


const WishlistItem = (props) => {
    const {movieId} = props
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true)
                const response = await getMovie(movieId)
                setData(response)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [movieId])

    if (loading) return (<div>Loading...</div>)

    if (!loading && !data) return null

    return (
       <div className={'wishlist-item'}>
           <MoviePreviewItem movie={data}/>
       </div>
    )
}

export default WishlistItem