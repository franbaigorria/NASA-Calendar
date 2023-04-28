import { tmdbInstance } from "./axiosConfig"
import { MovieInterface } from "./types/moviesTypes"

export const getMovies = async (search: string, page: number = 1): Promise<MovieInterface> => {
  const { data } = await tmdbInstance.get(`/search/movie`, { params: { query: search, page } });
  return data;
}