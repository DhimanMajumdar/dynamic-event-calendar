import React from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameDay } from "date-fns";

const CalendarGrid = ({ currentMonth, selectedDate, onDateClick, events }) => {
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="p-4 bg rounded-lg">
      <div className="grid grid-cols-7 text-center font-bold">
        {weekDays.map((day, index) => (
          <div key={index} className="p-2">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mt-2">
        {daysInMonth.map((day) => {
          const isCurrent = isToday(day);
          const isSelected = isSameDay(day, selectedDate);


          return (
            <div
              key={day}
              className={`p-4 text-center rounded-lg 
                ${isCurrent ? "bg-blue-100 text-blue-700" : ""}
                ${isSelected ? "border-2 border-blue-600" : ""}
                cursor-pointer`}
              onClick={() => onDateClick(day)}
            >
              <div>{format(day, "d")}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
