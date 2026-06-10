'use client'

import { useState } from "react";

export default function TopBar(){
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 bg-white/70 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-2xl font-extrabold text-indigo-600">Desarrollador App y Backend</span>
                </div>

                <nav className="flex items-center">
                    <ul className="hidden md:flex items-center gap-6 text-gray-700">
                        <li><a className="hover:text-indigo-600 transition-colors" href="#">Sobre mi</a></li>
                        <li><a className="hover:text-indigo-600 transition-colors" href="#">Stack Tecnológico</a></li>
                        <li><a className="hover:text-indigo-600 transition-colors" href="#">Contacto</a></li>
                    </ul>

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100"
                        aria-label="Abrir menú"
                        aria-expanded={open}
                    >
                        {open ? (
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </nav>
            </div>

            {open && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <ul className="flex flex-col gap-2 p-4 text-gray-700">
                        <li><a className="block px-3 py-2 rounded hover:bg-gray-50" href="#">Sobre mi</a></li>
                        <li><a className="block px-3 py-2 rounded hover:bg-gray-50" href="#">Stack Tecnológico</a></li>
                        <li><a className="block px-3 py-2 rounded hover:bg-gray-50" href="#">Contacto</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
}