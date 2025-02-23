import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { useState } from 'react';

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

	return (
		<div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full`}>
			<NavigationMenu className="w-full">
				<NavigationMenuList className="flex-col md:flex-row w-full">
					<nav
						role="navigation"
						aria-label="Menu principal">
						<ul role="menubar">
							{navItems.map((item) => (
								<li
									key={item.title}
									role="none">
									{item.children ? (
										<div
											role="menuitem"
											aria-haspopup="true"
											aria-expanded={openItem === item.title}>
											<button
												onClick={() =>
													setOpenItem(
														openItem === item.title ? null : item.title
													)
												}
												aria-controls={`submenu-${item.title}`}>
												{item.title}
											</button>
											<ul
												id={`submenu-${item.title}`}
												role="menu"
												aria-hidden={openItem !== item.title}>
												{item.children.map((child) => (
													<li
														key={child.title}
														role="menuitem">
														<Link
															href={child.link}
															className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
															{child.title}
														</Link>
													</li>
												))}
											</ul>
										</div>
									) : (
										<Link
											href={item.link}
											role="menuitem">
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
