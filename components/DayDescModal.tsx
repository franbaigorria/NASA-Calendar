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

export const DayDescModal = () => {

  interface RootState {
    movieInfoSlice: ModalInfoState
  }


  const { openModal, movieData } = useSelector((state: RootState) => state.movieInfoSlice)

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
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
