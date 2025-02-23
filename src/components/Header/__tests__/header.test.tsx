import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../index';

describe('Header', () => {
	test('affiche le logo', () => {
		render(<Header />);

		// Chercher le lien par son aria-label
		const logoLink = screen.getByRole('link', {
			name: "Retour à l'accueil", // Correspond à l'aria-label du logo
		});
		expect(logoLink).toBeInTheDocument();
		expect(logoLink).toHaveAttribute('href', '/');
	});

	test('toggle du menu mobile', () => {
		render(<Header />);

		// Trouver le bouton burger
		const burgerButton = screen.getByRole('button', {
			name: 'Menu principal', // Correspond à l'aria-label du burger button
		});

		// Trouver le conteneur du menu par son ID
		const mobileMenu = screen.getByTestId('main-navigation');

		// Vérifier que le menu est initialement caché
		expect(mobileMenu).toHaveClass('hidden');

		// Cliquer sur le burger
		fireEvent.click(burgerButton);

		// Vérifier que le menu n'a plus la classe hidden
		expect(mobileMenu).not.toHaveClass('hidden');
	});
});
