import { render, screen, fireEvent, act } from '@testing-library/react';
import { Navigation } from '../navigation';
import { navItems } from '@/datas/navitems';

describe('Navigation', () => {
	beforeEach(async () => {
		await act(async () => {
			render(
				<Navigation
					navItems={navItems}
					isMenuOpen={true}
				/>
			);
		});
	});

	test('affiche tous les items de navigation', () => {
		navItems.forEach((item) => {
			// Chercher par le texte plutôt que par le rôle
			const elements = screen.getAllByText(item.title);
			expect(elements.length).toBeGreaterThan(0);
		});
	});

	test('gère les sous-menus', async () => {
		const itemWithChildren = navItems.find((item) => item.children);
		if (!itemWithChildren) return;

		const menuButton = screen.getByRole('button', {
			name: itemWithChildren.title,
		});

		await act(async () => {
			fireEvent.click(menuButton);
		});

		itemWithChildren.children?.forEach((child) => {
			const menuItem = screen.getByText(child.title);
			expect(menuItem).toBeInTheDocument();
		});
	});

	test('gère les sous-menus en desktop', () => {
		render(
			<Navigation
				navItems={navItems}
				isMenuOpen={true}
			/>
		);

		const itemWithChildren = navItems.find((item) => item.children);
		if (!itemWithChildren) return;

		// Trouver le menu trigger
		const menuTrigger = screen.getByRole('menuitem', {
			name: itemWithChildren.title,
		});
		expect(menuTrigger).toBeInTheDocument();

		// Simuler le hover
		fireEvent.mouseEnter(menuTrigger);

		// Vérifier les sous-menus
		itemWithChildren.children?.forEach((child) => {
			const menuItem = screen.getByText(child.title);
			expect(menuItem).toBeInTheDocument();
		});
	});
});
