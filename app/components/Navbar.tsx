"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <nav className="w-full border-b border-soft bg-cream sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-3xl">🐄</span>

          <div>
            <h1 className="font-bold text-xl text-forest">
              CowsHappy
            </h1>

            <p className="text-xs text-sage">
              Healthy cows. Healthy food.
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium text-forest">
          <a href="#home">Home</a>

          <a href="#journey">Journey</a>

          <a href="#knowledge-hub">Knowledge Hub</a>

          <a href="#impact">Impact</a>

          <button className="btn-primary px-4 py-2">
            Join
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-forest"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-soft bg-cream px-6 py-4 flex flex-col gap-4 font-medium text-forest">
          <a href="#home" onClick={closeMenu}>
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
            className="btn-primary py-2"
            onClick={closeMenu}
          >
            Join
          </button>
        </div>
      )}
    </nav>
  );
}