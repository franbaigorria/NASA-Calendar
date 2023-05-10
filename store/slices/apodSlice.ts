import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApodResponse } from '../../services/types/apodTypes';

export interface ModalInfoState {
  openModal: boolean,
  photoData: ApodResponse | null,
}

export const apodSlice = createSlice({
  name: 'movieInfo',
  initialState: {
    openModal: false,
    photoData: null,
  },
  reducers: {
    setApodSelected: (state, action: PayloadAction<ModalInfoState>) => {
      state.openModal = action.payload.openModal;
      state.photoData = action.payload.photoData;
    },
  },
});

export const { setApodSelected } = apodSlice.actions;
export default apodSlice.reducer;