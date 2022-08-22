import * as React from 'react'
import './index.scss'
import CategoryRow from "../../components/CategoryRow";

const Home = () => {
    const GENRES = [
        {id: 28, name: 'Action'},
        {id: 10402, name: 'Music'},
        {id: 53, name: 'Thriller'},
    ]

    return (
        <div className={'page container home-page'}>
            {GENRES.map((genre) => (
                <CategoryRow
                    key={genre.id}
                    title={genre.name}
                    genreId={genre.id}
                />
            ))}
        </div>
    )
}

export default Home