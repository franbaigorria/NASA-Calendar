import { useState } from 'react';
import { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/Layout';
import { Calendar } from '../components/Calendar'
import styleUtils from '../styles/utils.module.css'
import moment from 'moment';
import { modifyMonth } from '../helpers/momentUtils';
import { getDaysCalendar } from '../services/daysCalendar';
import { ApodResponse } from '../services/types/apodTypes';
import { useDaysMonth } from '../hooks/useDaysMonth';
import { ApodInfoModal } from '../components/ApodInfoModal';

type Props = {
  apodData: ApodResponse[]
}

export const initialMonth = '2023-02'

const Home: NextPage<Props> = ({ apodData }) => {
  const [dateYYYMM, setDateYYYMM] = useState<string>(initialMonth)
  const { isLoading, daysArr } = useDaysMonth(dateYYYMM, initialMonth)

  return (
    <>
      <Layout>
        <p className={styleUtils.centerFlexContainer}>Photos of </p>
        <div className={styleUtils.centerFlexContainer} >
          <div style={arrowContainerStyles} onClick={() => { setDateYYYMM(modifyMonth(dateYYYMM, 'sub')) }}>
            <i className={styleUtils.arrowL}></i>
          </div>
          <strong style={{ marginLeft: 10, marginRight: 10 }}>{dateYYYMM}</strong>
          {
            modifyMonth(dateYYYMM, 'add') != moment().format('YYYY-MM') &&
            <div style={arrowContainerStyles} onClick={() => setDateYYYMM(modifyMonth(dateYYYMM, 'add'))}>
              <i className={styleUtils.arrowR}></i>
            </div>
          }
        </div >
        <Calendar apodData={dateYYYMM === initialMonth ? apodData : daysArr} isLoading={isLoading} />
      </Layout >
      <ApodInfoModal />
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const resp = await getDaysCalendar('2023-02-01', '2023-02-28');
  return {
    props: {
      apodData: resp,
    },
  };
}


const arrowContainerStyles = {
  backgroundColor: 'white',
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
}