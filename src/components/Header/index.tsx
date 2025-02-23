'use client';

import { useState } from 'react';
import { HeaderContainer } from './header-container';
import { HeaderContent } from './header-content';

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<HeaderContainer>
			<HeaderContent
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
			/>
		</HeaderContainer>
	);
};
