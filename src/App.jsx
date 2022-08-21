import * as React from 'react'
import {Routes, Route} from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Movie = React.lazy(() => import("./pages/Movie"));
const Wishlist = React.lazy(() => import("./pages/Wishlist"));

const App = () => {
    return (
        <React.Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="movie/:id" element={<Movie/>}/>
                <Route path="wishlist" element={<Wishlist/>}/>
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
        </React.Suspense>
    )
}

export default App