"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent page scrolling while mobile menu is open
  useEffect(() => {
  const handleScroll = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className="w-full border-b sticky top-0 z-50"
      style={{
        backgroundColor: "var(--cream)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-3xl">🐄</span>

          <div>
            <h1
              className="font-bold text-xl"
              style={{ color: "#1F3D2B" }}
            >
              CowsHappy
            </h1>

            <p
              className="text-xs"
              style={{ color: "#556B5D" }}
            >
              Healthy cows. Healthy food.
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex items-center gap-8 font-medium"
          style={{ color: "#1F3D2B" }}
          ><a href="#home">Home</a>
          <a href="#journey">Journey</a>
          <a href="#knowledge-hub">Knowledge Hub</a>
          <a href="#impact">Impact</a>
          <button className="bg-[#1F3D2B] hover:bg-[#294F39] text-white px-4 py-2 rounded-lg transition">
            Join
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          style={{ color: "#1F3D2B" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4 font-medium"
          style={{
            backgroundColor: "var(--cream)",
            borderColor: "var(--border)",
            color: "#1F3D2B",
          }}
        >
          <a href="#" onClick={closeMenu}>
            Home
          </a>

          <a href="#journey" onClick={closeMenu}>
            Journey
          </a>

          <a href="#knowledge-hub" onClick={closeMenu}>
            Knowledge Hub
          </a>

          <a href="#impact" onClick={closeMenu}>
            Impact
          </a>

          <button
            className="bg-[#1F3D2B] text-white py-2 rounded-lg"
            onClick={closeMenu}
          >
            Join
          </button>
        </div>
      )}
    </nav>
  );
}