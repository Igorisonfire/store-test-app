import * as React from 'react'
import './index.scss'
import CategoryRow from "../../components/CategoryRow";

const Home = () => {

    return (
        <div className={'page container home-page'}>
            <CategoryRow title={'Popular'} category={'popular'}/>
            <CategoryRow title={'Top Rated'} category={'top_rated'}/>
            <CategoryRow title={'Upcoming'} category={'upcoming'}/>
        </div>
    )
}

export default Home