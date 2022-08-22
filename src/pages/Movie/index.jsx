import * as React from 'react'
import './index.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovie} from "../../services/movie.service";
import WishlistButton from "../../components/WishlistButton";
import {generateImgUrl} from "../../helpers/generateImgUrl";

const Movie = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false)
    const [specialGenre, setSpecialGenre] = useState('')
    const [data, setData] = useState()

    //special styling for genre (example)
    useEffect(() => {
        if(data && data.genres.length) {
            data.genres.filter((genre) => {
                switch (genre.id) {
                    case 28: {
                        setSpecialGenre(' genre-28')
                        break
                    }
                    case 10402: {
                        setSpecialGenre(' genre-10402')
                        break
                    }
                    case 53: {
                        setSpecialGenre(' genre-53')
                        break
                    }
                    default: break
                }
            })
        }
    }, [data])

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true)
                const response = await getMovie(id)
                setData(response)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [id])

    if (loading) return (<div>Loading...</div>)

    if (!loading && !data) return null

    return (
        <div className={'page container movie-page' + specialGenre}>
            <div className={'movie-grid-layout'}>
                <div className={'grid-image'}>
                    {data.backdrop_path &&
                        <img src={generateImgUrl(data.backdrop_path, 1280)} alt={data.title}/>
                    }
                </div>
                <div className={'grid-description'}>
                    <h1>{data.title}</h1>
                    <p>{data.overview}</p>
                    <WishlistButton movieId={data.id}/>
                </div>
                <div className={'grid-additional'}>
                    {data.release_date &&
                        <p>Release date: {new Date(data.release_date).toLocaleDateString()}</p>
                    }
                </div>
            </div>

        </div>
    )
}

export default Movie