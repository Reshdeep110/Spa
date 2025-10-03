import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Beauty & Wellness Spa</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
