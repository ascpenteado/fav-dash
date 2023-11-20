import { format } from 'date-fns';

export const formatDate = (date: number | Date) =>
  format(date, 'yyyy-MM-dd HH:mm:ssXXX');
