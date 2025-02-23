import { BurgerButton } from './burger-button';

interface MobileMenuButtonProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (value: boolean) => void;
}

export const MobileMenuButton = ({
	isMenuOpen,
	setIsMenuOpen,
}: MobileMenuButtonProps) => (
	<div
		className="md:hidden"
		aria-controls="main-navigation">
		<BurgerButton
			onClick={() => setIsMenuOpen(!isMenuOpen)}
			isOpen={isMenuOpen}
			aria-expanded={isMenuOpen}
		/>
	</div>
);
