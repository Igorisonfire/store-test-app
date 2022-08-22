import * as React from 'react'
import './index.scss'
import {useCallback, useEffect, useRef, useState} from "react";
import ArrowButton from "../ArrowButton";
import {MoviePreviewItem} from "../MoviePreviewItem";

const MovieCarousel = (props) => {
    const {movies} = props
    const rowRef = useRef()
    const [carouselSizes, setCarouselSizes] = useState({
        rowWidth: 0,
        rowChildrenSumWidth: 0
    })
    const [page, setPage] = useState(0)

    const updateCarouselSizes = useCallback(() => {
        if (rowRef && rowRef.current) {
            const childrenLength = rowRef.current.children.length
            const childWidth = rowRef.current.children[0].getBoundingClientRect().width

            setCarouselSizes({
                rowWidth: rowRef.current.getBoundingClientRect().width,
                rowChildrenSumWidth: childrenLength * childWidth
            })
        }
    }, [rowRef])

    useEffect(() => {
        updateCarouselSizes()
    }, [movies])

    //can be upgraded with debounce for better performance
    useEffect(() => {
        window.addEventListener('resize', updateCarouselSizes);

        return () => {
            window.removeEventListener('resize', updateCarouselSizes);
        }
    })

    if (!movies.length) return null

    return (
        <div className={'carousel'}>
            <ArrowButton
                direction={'back'}
                disabled={page <= 0}
                onClick={() => setPage(page - 1)}
            />

            <div className={'row-wrapper'}>
                <ul className={'row'} ref={rowRef}
                    style={{transform: `translateX(-${carouselSizes.rowWidth * page}px)`}}
                >
                    {movies.map((movie) => (
                        <MoviePreviewItem movie={movie} key={movie.id}/>
                    ))}
                </ul>
            </div>

            <ArrowButton
                direction={'next'}
                disabled={carouselSizes.rowWidth * (page + 1) >= carouselSizes.rowChildrenSumWidth}
                onClick={() => setPage(page + 1)}
            />
        </div>
    )
}

export default MovieCarousel