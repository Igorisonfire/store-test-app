
//category = popular | top_rated | upcoming
export const getMovies = async (category, page) => {
    const API_KEY = '704977b76bf3e86c5e278f62d890daa7'
    const BASE_API_URL = 'https://api.themoviedb.org/3'
    const CATEGORY = category || 'popular'
    const PAGE = page || 1
    const URL = `${BASE_API_URL}/movie/${CATEGORY}?api_key=${API_KEY}&language=en-US&page=${PAGE}`

    try {
        const response = await fetch(URL)
        return await response.json()
    } catch (error) {
        throw error
    }
}