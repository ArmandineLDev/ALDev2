interface BurgerButtonProps {
	onClick: () => void;
	isOpen: boolean;
	onKeyDown?: (e: React.KeyboardEvent) => void;
}

export const BurgerButton = ({
	onClick,
	isOpen,
	onKeyDown,
}: BurgerButtonProps) => (
	<button
		onClick={onClick}
		onKeyDown={onKeyDown}
		className="p-2 text-primary-foreground"
		aria-label="Menu principal"
		aria-expanded={isOpen}
		aria-controls="mobile-menu">
		<svg
			className="w-6 h-6 text-white transition-transform duration-300 hover:scale-110"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M4 6h16M4 12h16m-7 6h7"
			/>
		</svg>
	</button>
);
