import { useState, useId } from 'react'

import { Grid } from '@mui/material';
import { MovieCard } from '../components/MovieCard';
import { getMovies } from '../services/moviesService';
import { MovieInterface, Result } from '../services/types/moviesTypes';
import Layout from '../components/Layout';
import Search from '../components/Search';
import { useDispatch } from 'react-redux';
import { setMovieSelected } from '../store/slices/movieInfoSlice';
import { MovieModal } from '../components/MovieModal';

const Movies = (): JSX.Element => {
  const id = useId();
  const dispatch = useDispatch();

  const [movieObject, setMovieObject] = useState<MovieInterface>();

  const searchMovies = async (search: string): Promise<void> => {
    const response = await getMovies(search);
    setMovieObject(response);
  }

  const dispatchMovie = (movie: Result | null, openModal: boolean): void => {
    dispatch(setMovieSelected({ openModal, movieData: movie }))
  }

  return (
    <Layout>
      <Search onSubmit={searchMovies} />
      <Grid container spacing={4}>
        {
          movieObject?.results.map((movie: Result, idx) => (
            <Grid item key={`${idx}-${id}`} xs={12} sm={6} md={4} lg={3} zIndex={movieObject?.results.length - idx}>
              <MovieCard title={movie.title} overview={movie.overview} imageURL={movie.poster_path} onClick={() => dispatchMovie(movie, true)} />
            </Grid>
          ))
        }
      </Grid>
      <MovieModal onClose={() => dispatchMovie(null, false)} />
    </Layout>
  )
}

export default Movies;