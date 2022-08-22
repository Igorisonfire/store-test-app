import * as React from 'react'
import './index.scss'
import {useEffect, useState} from "react";
import {getMovies} from "../../services/movie.service";
import MovieCarousel from "../MovieCarousel";

const CategoryRow = (props) => {
    const {title, genreId} = props
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true)
                const response = await getMovies(genreId)
                setData(response)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [])

    if (loading) return (<div>Loading...</div>)

    if (!loading && !data) return null

    return (
        <div className={'category-row'}>
            <h2>{title}</h2>
            <MovieCarousel movies={data.results}/>
        </div>
    )
}

export default CategoryRow