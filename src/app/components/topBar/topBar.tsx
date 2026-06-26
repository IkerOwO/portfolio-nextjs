'use client'

import Link from "next/link";
import { useState } from "react";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold tracking-tight text-cyan-300 sm:text-xl">
            Iker | App & Backend
          </span>
        </div>

        <nav className="flex items-center">
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link className="nav-link" href="/">
                Sobre mí
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/pages/stackTecnologico">
                Stack Tecnológico
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/pages/contacto">
                Contacto
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/85 text-slate-200 transition hover:bg-slate-800"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {open && (
        <div className="mobile-menu md:hidden px-4 py-4">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                onClick={() => setOpen(false)}
                className="mobile-link"
                href="/"
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className="mobile-link"
                href="/pages/stackTecnologico"
              >
                Stack Tecnológico
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className="mobile-link"
                href="/pages/contacto"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
