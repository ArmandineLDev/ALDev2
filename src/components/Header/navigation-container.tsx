import { Navigation } from './navigation';
import { navItems } from '@/datas/navitems';

interface NavigationContainerProps {
	isMenuOpen: boolean;
}

export const NavigationContainer = ({
	isMenuOpen,
}: NavigationContainerProps) => (
	<div
		id="main-navigation"
		data-testid="main-navigation"
		role="navigation"
		aria-label="Menu principal"
		aria-hidden={!isMenuOpen}
		className={`${
			isMenuOpen ? 'block' : 'hidden'
		} md:block absolute md:static left-0 right-0 top-full md:top-auto bg-primary/95 md:bg-transparent md:flex-1 md:ml-8`}>
		<Navigation
			navItems={navItems}
			isMenuOpen={isMenuOpen}
		/>
	</div>
);
