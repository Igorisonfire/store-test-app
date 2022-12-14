import * as React from 'react'
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import './App.scss'
import {UiContextProvider} from "./conext/ui-context";

const Home = React.lazy(() => import("./pages/Home"));
const Movie = React.lazy(() => import("./pages/Movie"));
const Wishlist = React.lazy(() => import("./pages/Wishlist"));

const App = () => {
    return (
        <UiContextProvider>
            <Header/>
            <React.Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="movie/:id" element={<Movie/>}/>
                    <Route path="wishlist" element={<Wishlist/>}/>
                    <Route path="*" element={<h1>404</h1>}/>
                </Routes>
            </React.Suspense>
        </UiContextProvider>
    )
}

export default App