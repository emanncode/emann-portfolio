"use client";

import { useEffect, useState } from "react";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import NavbarProgress from "./NavbarProgress";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <>
      {/* SCROLL PROGRESS */}
      <NavbarProgress />

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-bg/80 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-5 md:px-10 xl:px-14">
          {/* LOGO */}
          <NavLogo />

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* DESKTOP */}
            <NavLinks />

            {/* RESUME */}
            <ResumeButton />

            {/* MOBILE BUTTON */}
            <MobileMenuButton
              open={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            />
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
