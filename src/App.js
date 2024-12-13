import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CalendarGrid from "./components/CalendarGrid";
import EventModal from "./components/EventModal";
import EventList from "./components/EventList";
import { useCalendar } from "./hooks/useCalendar";

const App = () => {
  const { currentMonth, goToNextMonth, goToPrevMonth } = useCalendar();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem("events")) || {});
  const [modalOpen, setModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleAddEvent = (event) => {
    const dayKey = selectedDate.toDateString();
    const dayEvents = events[dayKey] || [];
    setEvents({
      ...events,
      [dayKey]: [...dayEvents, event],
    });
  };

  const handleDeleteEvent = (index) => {
    const dayKey = selectedDate.toDateString();
    const updatedEvents = [...events[dayKey]];
    updatedEvents.splice(index, 1);
    setEvents({
      ...events,
      [dayKey]: updatedEvents,
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Header currentMonth={currentMonth} onPrevMonth={goToPrevMonth} onNextMonth={goToNextMonth} />
      <CalendarGrid
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={setSelectedDate}
        events={events}
      />
      <EventList
        events={events[selectedDate.toDateString()] || []}
        onEdit={() => setModalOpen(true)}
        onDelete={handleDeleteEvent}
      />
      <button
        onClick={() => {
          setModalOpen(true);
          setCurrentEvent(null);
        }}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Event
      </button>
      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddEvent}
        initialEvent={currentEvent}
      />
    </div>
  );
};

export default App;
