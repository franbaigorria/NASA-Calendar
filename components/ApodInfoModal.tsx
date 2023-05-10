import { FC } from 'react'
import { useSelector } from 'react-redux'
import ReactModal from 'react-modal';
import { ModalInfoState, setApodSelected } from '../store/slices/apodSlice'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import styles from './apodInfoModal.module.css'

interface RootState {
  apodSlice: ModalInfoState
}

const myLoader = ({ src, width, quality }) => {
  const r = `${src}?w=${width}&q=${quality || 75}`
  return r;
}

export const ApodInfoModal: FC = () => {
  const dispatch = useDispatch();
  const { openModal, photoData } = useSelector((state: RootState) => state.apodSlice);

  return (
    <ReactModal isOpen={openModal}>
      <button className={styles.buttonClose} onClick={() => dispatch(setApodSelected({ openModal: false, photoData: null }))}>X</button>
      <h1>{photoData?.title}</h1>
      <Image loader={myLoader} alt={photoData?.title} src={photoData?.hdurl} width={1800} height={720} />
      <p><strong>Date:</strong> {photoData?.date}</p>
      <p><strong>Explanation:</strong> {photoData?.explanation}</p>
    </ReactModal>
  )
}
