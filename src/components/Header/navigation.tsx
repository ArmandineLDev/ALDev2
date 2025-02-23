import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
	navItems: {
		title: string;
		link: string;
		children?: { title: string; link: string }[];
	}[];
	isMenuOpen: boolean;
}

export const Navigation = ({ navItems, isMenuOpen }: NavigationProps) => {
	const [openItem, setOpenItem] = useState<string | null>(null);

	// Gestionnaire pour la touche Escape
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setOpenItem(null);
			}
		};

		window.addEventListener('keydown', handleEscape);
		return () => window.removeEventListener('keydown', handleEscape);
	}, []);

	return (
		<div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full`}>
			<NavigationMenu className="w-full">
				<NavigationMenuList className="flex-col md:flex-row w-full">
					<nav
						role="navigation"
						aria-label="Menu principal">
						<ul className="flex flex-col md:flex-row md:items-center gap-4">
							{navItems.map((item) => (
								<li
									key={item.title}
									className="relative"
									role="none">
									{item.children ? (
										<div>
											<button
												onClick={() =>
													setOpenItem(
														openItem === item.title ? null : item.title
													)
												}
												className="flex items-center gap-2 text-primary-foreground hover:text-accent-foreground transition-colors duration-250"
												aria-expanded={openItem === item.title}
												aria-haspopup="true">
												{item.title}
												<ChevronDown
													className={`w-4 h-4 transition-transform duration-250 ${
														openItem === item.title ? 'rotate-180' : ''
													}`}
												/>
											</button>
											<ul
												className={`
													overflow-hidden transition-all duration-250 ease-smooth
													${openItem === item.title ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
													md:overflow-visible md:max-h-none
													md:absolute md:top-full md:left-0 
													md:min-w-[200px]
													md:bg-primary/95 md:backdrop-blur-sm
													md:shadow-lg md:rounded-md
													md:border border-primary-foreground/10
													p-2 mt-2 md:mt-1
													${
														openItem === item.title
															? 'md:translate-y-0 md:visible'
															: 'md:-translate-y-2 md:invisible'
													}
												`}
												role="menu">
												{item.children.map((child) => (
													<li
														key={child.title}
														role="menuitem"
														className="py-1">
														<Link
															href={child.link}
															className="block px-4 py-2 text-primary-foreground hover:text-accent-foreground hover:bg-accent/10 rounded transition-colors duration-250">
															{child.title}
														</Link>
													</li>
												))}
											</ul>
										</div>
									) : (
										<Link
											href={item.link}
											className="text-primary-foreground hover:text-accent-foreground transition-colors duration-250">
											{item.title}
										</Link>
									)}
								</li>
							))}
						</ul>
					</nav>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};
