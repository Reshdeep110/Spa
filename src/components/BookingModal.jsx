import React, { useState, useEffect } from "react";

export default function BookingModal({ isOpen, onClose, onAddBooking }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Massage Therapy",
    date: "",
    time: "",
    notes: ""
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {

      setForm({
        name: "",
        email: "",
        service: "Massage Therapy",
        date: "",
        time: "",
        notes: ""
      });
      setError("");
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!form.name.trim() || !form.email.trim() || !form.date || !form.time) {
      setError("Please provide name, email, date and time.");
      return;
    }
    setError("");
    onAddBooking(form);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3>Book Appointment</h3>
        <form onSubmit={handleSubmit} className="modal-form">
          {error && <p className="error">{error}</p>}
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <select name="service" value={form.service} onChange={handleChange}>
            <option>Massage Therapy</option>
            <option>Facial Treatments</option>
            <option>Yoga & Wellness</option>
            <option>Couple's Package</option>
          </select>
          <div style={{ display: "flex", gap: "10px" }}>
            <input type="date" name="date" value={form.date} onChange={handleChange} />
            <input type="time" name="time" value={form.time} onChange={handleChange} />
          </div>
          <textarea
            name="notes"
            placeholder="Any notes or preferences"
            value={form.notes}
            onChange={handleChange}
          />
          <button type="submit" className="btn-primary">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}
