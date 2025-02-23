import { render, screen, fireEvent, act } from '@testing-library/react';
import { Header } from '../index';

describe('Header', () => {
	beforeEach(async () => {
		await act(async () => {
			render(<Header />);
		});
	});

	test('affiche le logo', async () => {
		const logoLink = screen.getByRole('link', {
			name: "Retour à l'accueil",
		});
		expect(logoLink).toBeInTheDocument();
		expect(logoLink).toHaveAttribute('href', '/');
	});

	test('toggle du menu mobile', async () => {
		const burgerButton = screen.getByRole('button', {
			name: 'Menu principal',
		});

		const mobileMenu = screen.getByTestId('main-navigation');
		expect(mobileMenu).toHaveClass('hidden');

		await act(async () => {
			fireEvent.click(burgerButton);
		});

		expect(mobileMenu).not.toHaveClass('hidden');
	});
});
