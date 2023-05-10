import moment from "moment";

export const modifyMonth = (date: string, operation: 'add' | 'sub'): string => {
  const currentMonth = moment(date, 'YYYY-MM');
  switch (operation) {
    case 'add': return currentMonth.add(1, 'months').format('YYYY-MM');
    case 'sub': return currentMonth.subtract(1, 'months').format('YYYY-MM');
  }
}