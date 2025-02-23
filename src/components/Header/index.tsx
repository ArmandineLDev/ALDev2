'use client';

import { useState } from 'react';
import { HeaderContainer } from './header-container';
import { HeaderContent } from './header-content';
import { Logo } from './logo';
import { MobileMenuButton } from './mobile-menu-button';
import { NavigationContainer } from './navigation-container';

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header
			role="banner"
			className="fixed top-0 w-full bg-primary/80 backdrop-blur-sm z-50">
			<div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
				<Logo />
				<MobileMenuButton
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
				<NavigationContainer isMenuOpen={isMenuOpen} />
			</div>
		</header>
	);
};
