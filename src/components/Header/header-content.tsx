import { Logo } from './logo';
import { MobileMenuButton } from './mobile-menu-button';
import { NavigationContainer } from './navigation-container';

interface HeaderContentProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (value: boolean) => void;
}

export const HeaderContent = ({
	isMenuOpen,
	setIsMenuOpen,
}: HeaderContentProps) => (
	<div className="flex justify-between items-center md:items-stretch">
		<Logo />
		<MobileMenuButton
			isMenuOpen={isMenuOpen}
			setIsMenuOpen={setIsMenuOpen}
		/>
		<NavigationContainer isMenuOpen={isMenuOpen} />
	</div>
);
