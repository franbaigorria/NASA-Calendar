import { configureStore } from '@reduxjs/toolkit'

//reducers
import movieInfoSlice from './slices/movieInfoSlice';

export default configureStore({
  reducer: {
    movieInfoSlice,
  },
})
