import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, isToday, isSameDay } from "date-fns";

const CalendarGrid = ({ currentMonth, selectedDate, onDateClick, events }) => {
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  return (
    <div className="grid grid-cols-7 gap-2 p-4 bg-gray-100 rounded-lg">
      {daysInMonth.map((day) => {
        const isCurrent = isToday(day);
        const isSelected = isSameDay(day, selectedDate);
        return (
          <div
            key={day}
            className={`p-2 text-center rounded-lg ${
              isCurrent ? "bg-blue-100 text-blue-700" : ""
            } ${isSelected ? "border-2 border-blue-600" : ""}`}
            onClick={() => onDateClick(day)}
          >
            {format(day, "d")}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;
