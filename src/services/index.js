import axios from 'axios'
import { BASE_URL } from '../globals'

const Client = axios.create(`${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`)

export default Client
