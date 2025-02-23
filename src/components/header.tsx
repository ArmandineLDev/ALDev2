"use client";

import React, { useState } from "react";
import Image from "next/image";
import { navItems } from "@/datas/navitems"; // Ajustez l'import si besoin
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme-toggle"; // <-- Import de notre bouton

interface NavItem {
    title: string;
    link: string;
    children?: { title: string; link: string }[];
}

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // Ouverture/Fermeture du menu en version mobile
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
                    <span className="text-xl font-bold text-light hover:underline transition">
            ArmandineLDev
          </span>
                </Link>

                {/* Bouton Burger (Mobile) */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    <svg
                        className="w-6 h-6 text-white transition-transform duration-300 hover:scale-110"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Menu + Dark Mode Toggle sur grand écran */}
                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } md:flex md:items-center bg-primary/80 transition-all duration-300`}
                >
                   {/* <NavigationMenu className="md:mr-4">
                        <NavigationMenuList className="md:flex md:space-x-6 md:items-center">
                            {navItems.map((item: NavItem) => (
                                <NavigationMenuItem className="relative group">
                                    {item.children ? (
                                        <>
                                            <NavigationMenuTrigger className="flex items-center px-4 py-2 transition">
                                                <Link href={item.link} className="md:text-light md:text-xl flex-grow hover:text-accent hover:underline">
                                                    {item.title}
                                                </Link>
                                            </NavigationMenuTrigger>

                                            <NavigationMenuContent
                                                className="absolute top-full left-0 mt-2 w-56 bg-light/90
                           backdrop-blur-md border border-gray-300 rounded-lg
                           shadow-lg transition-opacity duration-300 z-50"
                                            >
                                                <ul>
                                                    {item.children.map((child) => (
                                                        <li key={child.title} ">
                                                            <NavigationMenuLink asChild>
                                                                <Link href={child.link} className="block text-text text-primary">
                                                                    {child.title}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink asChild>
                                            <Link href={item.link} className="md:text-light md:text-xl block px-4 py-2 hover:text-secondary hover:underline transition">
                                                {item.title}
                                            </Link>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>

                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>*/}
                    <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/">
                        Accueil
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                        Mes offres
                        </NavigationMenuTrigger>
                        <NavigationMenuContent >
                        <ul>
                            <li>
                            <NavigationMenuLink href="/sites-vitrines">
                                Sites vitrines
                            </NavigationMenuLink>
                            </li>
                            <li>
                            <NavigationMenuLink href="/applications-web">
                                Applications web
                            </NavigationMenuLink>
                            </li>
                            <li>
                            <NavigationMenuLink href="/sites-e-commerce">
                                Sites e-commerce
                            </NavigationMenuLink>
                            </li>
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        A propos
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        Contact
                    </NavigationMenuItem>
                </NavigationMenuList>
                    </NavigationMenu>
                    {/* Bouton de bascule du thème (uniquement visible en md+) */}
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
