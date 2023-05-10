import { FC, useId, useState } from 'react';
import style from './calendar.module.css'
import { useDaysMonth } from '../hooks/useDaysMonth';
import Image from 'next/image';
import { ApodResponse } from '../services/types/apodTypes';
import { setApodSelected } from '../store/slices/apodSlice';
import { useDispatch } from 'react-redux';

type Props = {
  apodData: ApodResponse[];
  isLoading: boolean;
}

const myLoader = ({ src, width, quality }) => {
  const r = `${src}?w=${width}&q=${quality || 75}`
  return r;
}

export const Calendar: FC<Props> = ({ apodData, isLoading }) => {
  const id = useId()
  const dispatch = useDispatch();

  const dispatchMovie = (daySelected: ApodResponse | null, openModal: boolean): void => {
    dispatch(setApodSelected({ openModal, photoData: daySelected }))
  }

  return (
    <div className={style.calendar}>
      {
        isLoading ?
          [...Array(20)].map((x, idx) =>
            <div key={`${idx}-${id}`} className={style.loadingImg}>
            </div>
          )
          :
          apodData.map((day, idx) =>
            <div key={`${idx}-${id}`} className={style.day} onClick={() => dispatchMovie(day, true)} >
              <Image
                style={{ height: '50%' }} loader={myLoader} alt={day.title} src={day.url} width={150} height={200} />
              <p>{day.date}</p>
            </div>
          )
      }
    </div>
  )
}
