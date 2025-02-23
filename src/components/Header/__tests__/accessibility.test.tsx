import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Header } from '../index';

expect.extend(toHaveNoViolations);

describe('Accessibilité du Header', () => {
	test("pas de violations d'accessibilité", async () => {
		const { container } = render(<Header />);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});

	test('structure des landmarks', () => {
		render(<Header />);
		expect(screen.getByRole('banner')).toBeInTheDocument();
		expect(screen.getByTestId('main-navigation')).toBeInTheDocument();
	});

	test('skip link', () => {
		render(<Header />);
		const skipLink = screen.queryByRole('link', {
			name: /aller au contenu principal/i,
		});
		expect(skipLink).not.toBeInTheDocument();
	});

	test('contraste des couleurs', () => {
		// À implémenter avec une bibliothèque de contraste
	});
});
