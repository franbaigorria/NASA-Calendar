import React, { useEffect, useState, useId } from 'react'
import { Grid } from '@mui/material';
import { MovieCard } from '../components/MovieCard';
import { getMovies } from '../services/moviesService';
import { MovieInterface } from '../services/types/moviesTypes';
import Layout from '../components/Layout';

const Movies = (): JSX.Element => {
  const id = useId()

  const [movieObject, setMovieObject] = useState<MovieInterface>()

  useEffect(() => {
    searchMovies('super')
  }, [])

  useEffect(() => {
    console.log(movieObject)
  }, [movieObject])

  const searchMovies = async (search: string): Promise<void> => {
    const response = await getMovies(search);
    setMovieObject(response);
  }

  return (
    <Layout home={false}>
      <Grid container spacing={4} overflow={'revert'}>
        {
          movieObject?.results.map((movie, idx) => (
            <Grid item key={`${idx}-${id}`} xs={12} sm={6} md={4} lg={3} zIndex={movieObject?.results.length - idx}>
              <MovieCard title={movie.title} overview={movie.overview} imageURL={movie.poster_path} />
            </Grid>
          ))
        }
      </Grid>
    </Layout>
  )
}

export default Movies;