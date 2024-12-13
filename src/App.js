import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CalendarGrid from "./components/CalendarGrid";
import EventModal from "./components/EventModal";
import EventList from "./components/EventList";
import { useCalendar } from "./hooks/useCalendar";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Footer from "./components/Footer";

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

  // Drag-and-drop functionality
  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return; // Dropped outside the list

    const sourceDayKey = source.droppableId;
    const destDayKey = destination.droppableId;

    // If dropped in the same list
    if (sourceDayKey === destDayKey) {
      const updatedEvents = [...events[sourceDayKey]];
      const [movedEvent] = updatedEvents.splice(source.index, 1);
      updatedEvents.splice(destination.index, 0, movedEvent);
      setEvents({ ...events, [sourceDayKey]: updatedEvents });
    } else {
      const sourceEvents = [...events[sourceDayKey]];
      const [movedEvent] = sourceEvents.splice(source.index, 1);

      const destEvents = [...events[destDayKey]];
      destEvents.splice(destination.index, 0, movedEvent);

      setEvents({
        ...events,
        [sourceDayKey]: sourceEvents,
        [destDayKey]: destEvents,
      });
    }
  };

  // Export events to JSON
  const exportToJSON = () => {
    const data = events[selectedDate.toDateString()] || [];
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `events-${selectedDate.toDateString()}.json`;
    link.click();
  };

  // Export events to CSV
  const exportToCSV = () => {
    const data = events[selectedDate.toDateString()] || [];
    const csv = [
      ["Event Name", "Start Time", "End Time", "Description", "Category"],
      ...data.map(event => [
        event.name,
        event.startTime,
        event.endTime,
        event.description,
        event.category
      ])
    ]
      .map(row => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `events-${selectedDate.toDateString()}.csv`;
    link.click();
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

      {/* Export Buttons */}
      <div className="mt-4">
        <button onClick={exportToJSON} className="px-4 py-2 bg-blue-500 text-white rounded mr-4">
          Export to JSON
        </button>
        <button onClick={exportToCSV} className="px-4 py-2 bg-blue-500 text-white rounded">
          Export to CSV
        </button>
      </div>

      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddEvent}
        initialEvent={currentEvent}
      />
      

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={selectedDate.toDateString()}>
          {(provided) => (
            <div
              className="mt-6"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {events[selectedDate.toDateString()]?.map((event, index) => (
                <Draggable key={event.name} draggableId={event.name} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`p-2 mb-2 rounded-md ${event.category === "Work" ? "bg-blue-200" : event.category === "Personal" ? "bg-green-200" : "bg-gray-200"}`}
                    >
                      <h4>{event.name}</h4>
                      <p>{event.startTime} - {event.endTime}</p>
                      <p>{event.description}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
    
  );
};

export default App;
