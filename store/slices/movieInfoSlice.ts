import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Result } from '../../services/types/moviesTypes';

export interface ModalInfoState {
  openModal: boolean,
  movieData: Result | null,
}

export const movieInfoSlice = createSlice({
  name: 'movieInfo',
  initialState: {
    openModal: false,
    movieData: null,
  },
  reducers: {
    setMovieSelected: (state, action: PayloadAction<ModalInfoState>) => {
      state.openModal = action.payload.openModal;
      state.movieData = action.payload.movieData;
    },
  },
});

export const { setMovieSelected } = movieInfoSlice.actions;
export default movieInfoSlice.reducer;