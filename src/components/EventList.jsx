const EventList = ({ events, onEdit, onDelete }) => {
    return (
      <div>
        <h3 className="text-lg font-bold mb-2">Events</h3>
        {events.length === 0 ? (
          <p>No events for this day.</p>
        ) : (
          events.map((event, index) => (
            <div key={index} className="border p-2 rounded mb-2">
              <h4 className="font-bold">{event.name}</h4>
              <p>{event.startTime} - {event.endTime}</p>
              <p>{event.description}</p>
              <button onClick={() => onEdit(index)} className="text-blue-500">Edit</button>
              <button onClick={() => onDelete(index)} className="text-red-500 ml-2">Delete</button>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default EventList;
  