"use client";

import { useState, useEffect } from "react";
import { Menu, X, Star } from "lucide-react";

const navLinks = [
  { label: "主页", href: "#home" },
  { label: "专精", href: "#expertise" },
  { label: "项目", href: "#projects" },
  { label: "生活", href: "#life" },
  { label: "作品集", href: "#portfolio" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b-4 border-black transition-all duration-200 ${
          scrolled ? "bg-[#FFFDF5]" : "bg-[#FFFDF5]"
        }`}
        style={{ boxShadow: scrolled ? "0 4px 0px 0px #000" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
              className="flex items-center gap-2 group"
            >
              <div
                className="border-4 border-black bg-[#FF6B6B] px-3 py-1 font-black text-sm uppercase tracking-widest transition-all duration-100 group-hover:bg-[#FFD93D]"
                style={{ boxShadow: "4px 4px 0px 0px #000" }}
              >
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-black stroke-none" />
                  ME
                </span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="px-3 py-2 font-black text-sm uppercase tracking-widest border-4 border-transparent hover:border-black hover:bg-[#FFD93D] transition-all duration-100"
                  style={{ cursor: "pointer" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
                className="ml-2 px-4 py-2 font-black text-sm uppercase tracking-widest border-4 border-black bg-black text-white transition-all duration-100 hover:bg-[#FF6B6B] hover:text-black active:translate-x-[2px] active:translate-y-[2px]"
                style={{ boxShadow: "4px 4px 0px 0px #FF6B6B" }}
              >
                联系我
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden border-4 border-black p-2 bg-[#FFFDF5] transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px]"
              style={{ boxShadow: "4px 4px 0px 0px #000" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="菜单"
            >
              {menuOpen ? <X className="w-6 h-6 stroke-[3px]" /> : <Menu className="w-6 h-6 stroke-[3px]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FFFDF5] pt-16 border-b-4 border-black md:hidden">
          <div className="flex flex-col p-6 gap-3">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="block px-6 py-4 font-black text-xl uppercase tracking-widest border-4 border-black transition-all duration-100 hover:bg-[#FFD93D]"
                style={{
                  boxShadow: "6px 6px 0px 0px #000",
                  transform: i % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav("#contact"); setMenuOpen(false); }}
              className="mt-4 px-6 py-4 font-black text-xl uppercase tracking-widest border-4 border-black bg-[#FF6B6B] text-center transition-all duration-100"
              style={{ boxShadow: "6px 6px 0px 0px #000" }}
            >
              联系我
            </a>
          </div>
        </div>
      )}
    </>
  );
}
