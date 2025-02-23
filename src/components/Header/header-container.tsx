interface HeaderContainerProps {
	children: React.ReactNode;
}

export const HeaderContainer = ({ children }: HeaderContainerProps) => (
	<header className="bg-primary/80 backdrop-blur-md text-primary-foreground fixed w-full top-0 z-50 shadow-lg transition-all">
		<div className="max-w-7xl mx-auto px-4 py-3">{children}</div>
	</header>
);
