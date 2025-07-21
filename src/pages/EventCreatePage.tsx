import { Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EventCreatePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    attendeeEmail: "",
  });

  // Function to handle input changes
  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const eventData = {
      title: formData.title,
      description: formData.description,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      // attendees: [formData.attendeeEmail],
    };

    addEvent(eventData);
    navigate("/");
  }

  return (
    <section>
      <h2>"Based on condition" ? "Edit Event" : "Create New Event"</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Event Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleInputChange}
            value={formData.title}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={handleInputChange}
            value={formData.description}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={handleInputChange}
            value={formData.date}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            id="time"
            onChange={handleInputChange}
            value={formData.time}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleInputChange}
            value={formData.location}
            required
          />
        </div>
        <div>
          <label htmlFor="attendee-email">Attendees</label>
          <input
            type="email"
            name="attendee-email"
            id="attendee-email"
            onChange={handleInputChange}
            value={formData.attendeeEmail}
            required
          />
          <button type="button">
            <Plus />
            Add Attendee
          </button>

          <div>
            <button type="button">Cancel</button>
            <button type="submit">Create Event</button>
          </div>
        </div>
      </form>
    </section>
  );
}
