import React, { useState } from "react";

const EventModal = ({ isOpen, onClose, onSave, initialEvent }) => {
  const [event, setEvent] = useState(initialEvent || { name: "", startTime: "", endTime: "", description: "", category: "Work" });

  const handleSave = () => {
    if (new Date(event.startTime) >= new Date(event.endTime)) {
      alert("Start time must be before end time!");
      return;
    }
    onSave(event);
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-lg font-bold">{initialEvent ? "Edit Event" : "Add Event"}</h2>
          <input
            type="text"
            placeholder="Event Name"
            value={event.name}
            onChange={(e) => setEvent({ ...event, name: e.target.value })}
            className="block w-full p-2 border mb-2"
          />
          <input
            type="datetime-local"
            value={event.startTime}
            onChange={(e) => setEvent({ ...event, startTime: e.target.value })}
            className="block w-full p-2 border mb-2"
          />
          <input
            type="datetime-local"
            value={event.endTime}
            onChange={(e) => setEvent({ ...event, endTime: e.target.value })}
            className="block w-full p-2 border mb-2"
          />
          <textarea
            placeholder="Description"
            value={event.description}
            onChange={(e) => setEvent({ ...event, description: e.target.value })}
            className="block w-full p-2 border mb-2"
          />
          <select
            value={event.category}
            onChange={(e) => setEvent({ ...event, category: e.target.value })}
            className="block w-full p-2 border mb-2"
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded ml-2">Cancel</button>
        </div>
      </div>
    )
  );
};

export default EventModal;
