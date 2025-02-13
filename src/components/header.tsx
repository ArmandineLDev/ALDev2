"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { navItems } from "@/datas/navitems";
import Link from "next/link";

interface NavItem {
    title: string;
    link: string;
    children?: { title: string; link: string }[];
}

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Gestion du menu mobile
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Gestion des dropdowns
    const toggleDropdown = (title: string) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    // Ferme les menus quand on clique à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(".dropdown-menu") && !target.closest(".dropdown-toggle")) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <header className="bg-primary/80 backdrop-blur-md text-primary-foreground fixed w-full top-0 z-50 shadow-lg transition-all">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="inline-block transition-transform duration-300 hover:rotate-6"
                    />
                    <span className="text-xl font-bold text-light hover:underline transition">ArmandineLDev</span>
                </Link>

                {/* Menu Burger (Mobile) */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    <svg className="w-6 h-6 text-white transition-transform duration-300 hover:scale-110"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Menu Links */}
                <NavigationMenu
                <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-primary/80 md:flex md:space-x-6 md:items-center transition-all duration-300 ${
                    isMenuOpen ? "block" : "hidden"
                } md:block`}>
                    {navItems.map((item: NavItem) => (
                        <li key={item.title} className="relative group">
                            {item.children ? (
                                <div className="flex items-center px-4 py-2 md:py-0  transition">
                                    <Link href={item.link} className="md:text-light md:text-xl flex-grow hover:text-accent hover:underline">
                                        {item.title}
                                    </Link>

                                    <button onClick={() => toggleDropdown(item.title)} className="dropdown-toggle ml-2">
                                        <svg className={`w-4 h-4 transition-transform duration-200 ${
                                            openDropdown === item.title ? "rotate-180" : ""
                                        }`} viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            ) : (
                                <Link href={item.link} className="md:text-light md:text-xl block px-4 py-2 md:py-0 hover:text-secondary hover:underline transition">
                                    {item.title}
                                </Link>
                            )}

                            {item.children && (
                                <ul className={`dropdown-menu absolute left-0 mt-2 w-56 bg-light/90 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg transition-opacity duration-300 ${
                                    openDropdown === item.title ? "block" : "hidden"
                                }`}>
                                    {item.children.map((child) => (
                                        <li key={child.title} className="md:text-base px-4 py-2 hover:bg-gray-100">
                                            <Link href={child.link} className="block text-text">
                                                {child.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
