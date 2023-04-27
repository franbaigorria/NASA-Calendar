import React from 'react'
import Layout from '../components/layout';
import { MovieCard } from '../components/MovieCard';

const Movies = () => {
  return (
    <Layout home={false}>
      <MovieCard />

    </Layout>
  )
}

export default Movies;