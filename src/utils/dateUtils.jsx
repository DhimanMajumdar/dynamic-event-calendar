import { isSameDay, isWithinInterval } from "date-fns";

// Check if two events overlap
export const isOverlapping = (eventA, eventB) => {
  const startA = new Date(eventA.startTime);
  const endA = new Date(eventA.endTime);
  const startB = new Date(eventB.startTime);
  const endB = new Date(eventB.endTime);

  return (
    isWithinInterval(startB, { start: startA, end: endA }) ||
    isWithinInterval(endB, { start: startA, end: endA }) ||
    (startA >= startB && endA <= endB)
  );
};

// Filter events by a given day
export const filterEventsByDay = (events, day) => {
  const dayString = day.toDateString();
  return events[dayString] || [];
};
