import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '../index';

describe('Navigation au clavier', () => {
	beforeEach(() => {
		render(<Header />);
	});

	test('peut naviguer avec Tab', async () => {
		const user = userEvent.setup();

		// Premier Tab va au logo
		await user.tab();
		expect(
			screen.getByRole('link', { name: "Retour à l'accueil" })
		).toHaveFocus();

		// Deuxième Tab va au bouton burger en mobile
		await user.tab();
		const burgerButton = screen.getByRole('button', { name: 'Menu principal' });
		expect(burgerButton).toHaveFocus();
	});

	test('peut ouvrir/fermer le menu avec Entrée/Espace', async () => {
		const user = userEvent.setup();

		// Aller au bouton burger
		await user.tab();
		await user.tab();

		// Ouvrir avec Entrée
		await user.keyboard('{Enter}');
		const menu = screen.getByTestId('main-navigation');
		expect(menu).not.toHaveClass('hidden');

		// Fermer avec Espace
		await user.keyboard(' ');
		expect(menu).toHaveClass('hidden');
	});

	test('peut fermer le menu avec Escape', async () => {
		const user = userEvent.setup();

		// Ouvrir le menu
		const burgerButton = screen.getByRole('button', { name: 'Menu principal' });
		await user.click(burgerButton);

		// Fermer avec Escape
		await user.keyboard('{Escape}');
		const menu = screen.getByTestId('main-navigation');
		expect(menu).toHaveClass('hidden');
	});
});
