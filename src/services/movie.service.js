const API_KEY = '704977b76bf3e86c5e278f62d890daa7'
const BASE_API_URL = 'https://api.themoviedb.org/3'

export const getMovies = async (genre_id, page) => {
    const PAGE = page || 1
    const URL = `${BASE_API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${PAGE}&with_genres=${genre_id}`

    try {
        const response = await fetch(URL)
        return await response.json()
    } catch (error) {
        throw error
    }
}

export const getMovie = async (id) => {
    const URL = `${BASE_API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`

    try {
        const response = await fetch(URL)
        return await response.json()
    } catch (error) {
        throw error
    }
}