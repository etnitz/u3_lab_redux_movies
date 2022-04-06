import Client from './'

export const GetMovies = async () => {
    try {
        const res = await Client.get(`${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`)
        return res.data.results
    } catch (error) {
        throw error
    }
}