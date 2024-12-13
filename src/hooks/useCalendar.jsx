import { useState } from "react";
import { addMonths, subMonths } from "date-fns";

export const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const goToNextMonth = () => setCurrentMonth((prev) => addMonths(prev, 1));
  const goToPrevMonth = () => setCurrentMonth((prev) => subMonths(prev, 1));

  return {
    currentMonth,
    goToNextMonth,
    goToPrevMonth,
  };
};
