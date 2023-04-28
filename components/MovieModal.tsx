import { Box, Button, Modal, Typography } from "@mui/material";
import { useSelector } from 'react-redux';
import { ModalInfoState } from "../store/slices/movieInfoSlice";
import { useEffect } from "react";
import Image from "next/image";

type Props = {
  onClose: () => void;
}

const myLoader = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}?w=${width}&q=${quality || 75}`
}

export const MovieModal = ({ onClose }: Props) => {

  interface RootState {
    movieInfoSlice: ModalInfoState
  }


  const { openModal, movieData } = useSelector((state: RootState) => state.movieInfoSlice)

  return (
    <Modal
      open={openModal}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {movieData?.title}
        </Typography>
        <Image loader={myLoader} alt={movieData?.title} src={movieData?.poster_path} width={500} height={500} />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {movieData?.overview}
        </Typography>
      </Box>
    </Modal>
  )
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
