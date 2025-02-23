'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { navItems } from '@/datas/navitems';
import Link from 'next/link';

interface NavItem {
	title: string;
	link: string;
	children?: { title: string; link: string }[];
}

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	// Gestion du menu mobile avec useCallback pour l'optimisation
	const toggleMenu = useCallback(() => {
		setIsMenuOpen((prev) => !prev);
	}, []);

	// Gestion des dropdowns
	const toggleDropdown = (title: string) => {
		setOpenDropdown(openDropdown === title ? null : title);
	};

	// Fermer le menu mobile quand on clique en dehors
	const handleClickOutside = useCallback((event: MouseEvent) => {
		const target = event.target as HTMLElement;
		if (
			!target.closest('.dropdown-menu') &&
			!target.closest('.dropdown-toggle') &&
			!target.closest('button[aria-label="Toggle menu"]')
		) {
			setOpenDropdown(null);
			setIsMenuOpen(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, [handleClickOutside]);

	return (
		<header className="bg-primary/80 backdrop-blur-md text-primary-foreground fixed w-full top-0 z-50 shadow-lg transition-all">
			<nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
				{/* Logo */}
				<Link
					href="/"
					className="flex items-center space-x-2">
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

				{/* Menu Burger */}
				<button
					onClick={toggleMenu}
					className="md:hidden focus:outline-none"
					aria-label="Toggle menu">
					<svg
						className="w-6 h-6 text-white transition-transform duration-300 hover:scale-110"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>

				{/* Menu principal */}
				<div
					className={`
					absolute right-0 left-0 top-full md:relative md:top-auto
					${isMenuOpen ? 'block' : 'hidden'} md:block
					bg-primary/80 md:bg-transparent
				`}>
					<ul
						className="
						md:flex md:space-x-6 md:items-center 
						p-4 md:p-0
					"
						role="menubar">
						{navItems.map((item: NavItem) => (
							<li
								key={item.title}
								className="relative group"
								role="none">
								{item.children ? (
									<div
										className="flex items-center px-4 py-2 md:py-0 transition"
										role="menuitem">
										<Link
											href={item.link}
											className="md:text-light md:text-xl flex-grow hover:text-accent hover:underline">
											{item.title}
										</Link>

										<button
											onClick={() => toggleDropdown(item.title)}
											className="dropdown-toggle ml-2">
											<svg
												className={`w-4 h-4 transition-transform duration-200 ${
													openDropdown === item.title ? 'rotate-180' : ''
												}`}
												viewBox="0 0 20 20"
												fill="currentColor">
												<path
													fillRule="evenodd"
													d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
													clipRule="evenodd"
												/>
											</svg>
										</button>
									</div>
								) : (
									<Link
										href={item.link}
										className="md:text-light md:text-xl block px-4 py-2 md:py-0 hover:text-secondary hover:underline transition">
										{item.title}
									</Link>
								)}

								{item.children && (
									<ul
										className={`
										dropdown-menu
										md:absolute md:left-0 md:mt-2 md:w-56 
										md:bg-light/90 md:backdrop-blur-md md:border md:border-gray-300 md:rounded-lg md:shadow-lg 
										transition-all duration-300
										${openDropdown === item.title ? 'block' : 'hidden'}
										${!isMenuOpen ? 'md:block' : ''}
										bg-primary/90 w-full
									`}>
										{item.children.map((child) => (
											<li
												key={child.title}
												className="px-4 py-2 hover:bg-gray-100 text-foreground">
												<Link
													href={child.link}
													className="block text-text pl-4 md:pl-0">
													{child.title}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
