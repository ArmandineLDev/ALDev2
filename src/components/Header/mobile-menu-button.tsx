import { BurgerButton } from './burger-button';
import { useEffect } from 'react';

interface MobileMenuButtonProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (value: boolean) => void;
}

export const MobileMenuButton = ({
	isMenuOpen,
	setIsMenuOpen,
}: MobileMenuButtonProps) => {
	// Gestionnaire pour la touche Escape
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isMenuOpen) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener('keydown', handleEscape);
		return () => window.removeEventListener('keydown', handleEscape);
	}, [isMenuOpen, setIsMenuOpen]);

	return (
		<div
			className="md:hidden"
			aria-controls="main-navigation">
			<BurgerButton
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				isOpen={isMenuOpen}
				aria-expanded={isMenuOpen}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						setIsMenuOpen(!isMenuOpen);
					}
				}}
			/>
		</div>
	);
};
