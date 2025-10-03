import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import BookingsList from "./components/BookingList";
import BookingModal from "./components/BookingModal";
import Footer from "./components/Footer";

function App() {
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const saved = localStorage.getItem("spa_bookings");
    if (saved) setBookings(JSON.parse(saved));
  }, []);


  useEffect(() => {
    localStorage.setItem("spa_bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (booking) => {
    const newBooking = {
      id: Date.now(),
      ...booking,
    };
    setBookings((prev) => [newBooking, ...prev]);
    setIsModalOpen(false);

    alert(
      `✅ Appointment booked!\n\nName: ${newBooking.name}\nService: ${newBooking.service}\nDate: ${newBooking.date}\nTime: ${newBooking.time}\nEmail: ${newBooking.email}`
    );
  };

  return (
    <div>
      <Navbar />
      <Hero onOpenBooking={() => setIsModalOpen(true)} />
      <main>
        <Services />
        <ContactForm onAddBooking={addBooking} />
        <section className="bookings-section">
          <h2 style={{textAlign: "center", marginTop: "40px"}}>Your Appointments</h2>
          <BookingsList bookings={bookings} />
        </section>
      </main>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBooking={addBooking}
      />

      <Footer />
    </div>
  );
}

export default App;
