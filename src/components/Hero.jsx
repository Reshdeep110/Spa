import React from "react";

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Relax, Refresh, Rejuvenate</h1>
        <p>Your journey to wellness starts here</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <button onClick={onOpenBooking} className="cta-btn">
            Book Appointment
          </button>
          <a href="#services" className="cta-secondary">View Services</a>
        </div>
      </div>
    </section>
  );
}
