import React, { useState } from "react";

export default function ContactForm({ onAddBooking }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Massage Therapy",
    date: "",
    time: "",
    message: ""
  });
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (form.date && form.time) {
      if (!form.name.trim() || !form.email.trim()) {
        setError("Please provide name and email to book.");
        return;
      }
      setError("");
      const booking = {
        name: form.name,
        email: form.email,
        service: form.service,
        date: form.date,
        time: form.time,
        notes: form.message
      };
      onAddBooking(booking);
      setSuccessMsg("Appointment requested — check Appointments below.");
      setForm({ name: "", email: "", service: "Massage Therapy", date: "", time: "", message: "" });
      setTimeout(() => setSuccessMsg(""), 4000);
      return;
    }

 
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in name, email and message.");
      return;
    }
    setError("");
    setSuccessMsg("Message sent! We'll contact you soon.");
    setForm({ name: "", email: "", service: "Massage Therapy", date: "", time: "", message: "" });
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact / Book Now</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        {error && <p className="error">{error}</p>}
        {successMsg && <p className="success">{successMsg}</p>}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
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
          name="message"
          placeholder="Your Message or notes (if booking, notes will be saved)"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit" className="btn-primary">Send / Book</button>
      </form>
    </section>
  );
}
