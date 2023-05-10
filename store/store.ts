import { configureStore } from '@reduxjs/toolkit'

//reducers
import apodSlice from './slices/apodSlice';

export default configureStore({
  reducer: {
    apodSlice,
  },
})
