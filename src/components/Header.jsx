import React from "react";
import { format } from "date-fns";

const Header = ({ currentMonth, onPrevMonth, onNextMonth }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-md">
      <button onClick={onPrevMonth} className="px-4 py-2 bg-blue-500 text-white rounded">
        Previous
      </button>
      <h2 className="text-lg font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
      <button onClick={onNextMonth} className="px-4 py-2 bg-blue-500 text-white rounded">
        Next
      </button>
    </div>
  );
};

export default Header;
