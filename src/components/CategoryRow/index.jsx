import * as React from 'react'
import './index.scss'
import {useEffect, useRef, useState} from "react";
import {getMovies} from "../../services/movie.service";
import {MoviePreviewItem} from "../MoviePreviewItem";

const CategoryRow = (props) => {
    const {title, category} = props
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const rowRef = useRef()
    const [carouselSizes, setCarouselSizes] = useState({
        rowWidth: 0,
        rowChildrenSumWidth: 0
    })
    const [page, setPage] = useState(0)

    useEffect(() => {
        if (rowRef && rowRef.current) {
            const childrenLength = rowRef.current.children.length
            const childrenWidth = rowRef.current.children[0].offsetWidth

            setCarouselSizes({
                rowWidth: rowRef.current.offsetWidth,
                rowChildrenSumWidth: childrenLength * childrenWidth
            })
        }
    }, [data])

    useEffect(() => {
        async function getPopular() {
            try {
                setLoading(true)
                const response = await getMovies(category)
                setData(response)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }

        getPopular()
    }, [])

    if (loading) return (<div>Loading...</div>)

    if (!loading && !data) return null

    return (
        <div className={'category-row'}>
            <h2>{title}</h2>
            <div className={'arrows-wrapper'}>
                <button
                    disabled={page <= 0}
                    onClick={() => setPage(page - 1)}
                    className={'prev'}
                >
                    Prev
                </button>

                <div className={'row-wrapper'}>
                    <ul className={'row'} ref={rowRef}
                         style={{transform: `translateX(-${carouselSizes.rowWidth * page}px)`}}>
                        {data.results.map((movie) => (
                            <MoviePreviewItem movie={movie} key={movie.id}/>
                        ))}
                    </ul>
                </div>

                <button
                    disabled={carouselSizes.rowWidth * (page + 1) >= carouselSizes.rowChildrenSumWidth}
                    onClick={() => setPage(page + 1)}
                    className={'next'}
                >
                    Next
                </button>
            </div>


        </div>
    )
}

export default CategoryRow