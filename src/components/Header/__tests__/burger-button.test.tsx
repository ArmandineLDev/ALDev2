import { render, screen, fireEvent } from '@testing-library/react';
import { BurgerButton } from '@/components/Header/burger-button';

describe('BurgerButton', () => {
	test('appelle onClick quand cliqué', () => {
		const mockOnClick = jest.fn();
		render(
			<BurgerButton
				isOpen={false}
				onClick={mockOnClick}
			/>
		);

		const button = screen.getByRole('button');
		fireEvent.click(button);

		expect(mockOnClick).toHaveBeenCalled();
	});

	test("change le label en fonction de l'état", () => {
		const { rerender } = render(
			<BurgerButton
				isOpen={false}
				onClick={() => {}}
			/>
		);
		expect(screen.getByRole('button')).toHaveAttribute(
			'aria-label',
			'Menu principal'
		);

		rerender(
			<BurgerButton
				isOpen={true}
				onClick={() => {}}
			/>
		);
		expect(screen.getByRole('button')).toHaveAttribute(
			'aria-label',
			'Menu principal'
		);
	});
});
