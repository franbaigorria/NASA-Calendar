import { useEffect, useState } from 'react';
import moment from 'moment';
import { getDaysCalendar } from '../services/daysCalendar';
import { ApodResponse } from '../services/types/apodTypes';

export const useDaysMonth = (date: string, initialMonth: string): { isLoading: boolean, daysArr: ApodResponse[] } => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [daysArr, setDaysArr] = useState([])

  useEffect(() => {
    let ignore = false; //para evitar renders innecesarios
    const numberOfDays = moment(date, 'YYYY-MM').daysInMonth();

    const dateStart = `${date}-01`
    const dateEnd = `${date}-${numberOfDays}`

    async function getDays() {
      if (date !== initialMonth) { //validación para no hacer get que se hizo en el build
        setIsLoading(true);
        const response = await getDaysCalendar(dateStart, dateEnd)
        if (!ignore) {
          setDaysArr(response);
          setIsLoading(false);
        }
      }
    }
    getDays();

    return function () {
      ignore = true;
    }

  }, [date, initialMonth])


  return {
    isLoading,
    daysArr,
  };
}