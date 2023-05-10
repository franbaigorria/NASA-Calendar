import { apodInstance } from "./axiosConfig"
import { ApodResponse } from "./types/apodTypes"

export const getDaysCalendar = async (start_date: string, end_date: string): Promise<ApodResponse[]> => {
  const { data } = await apodInstance.get(`/`, { params: { start_date, end_date } });
  return data;
}