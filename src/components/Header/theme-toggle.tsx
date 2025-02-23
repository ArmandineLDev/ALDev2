'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
	const { theme, setTheme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [currentTheme, setCurrentTheme] = useState<string | null>(null);

	useEffect(() => {
		setMounted(true);
		setCurrentTheme(
			theme === 'system' && systemTheme ? systemTheme : theme ?? 'light'
		);
	}, [theme, systemTheme]);

	if (!mounted) return null;

	const handleToggle = () => {
		setTheme(currentTheme === 'dark' ? 'light' : 'dark');
		
	};

	return (
		<Button
			onClick={handleToggle}
			variant="ghost"
			size="icon"
			className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-primary/10"
			aria-label="Toggle theme">
			{currentTheme === 'dark' ? (
				<Sun className="w-5 h-5" />
			) : (
				<Moon className="w-5 h-5" />
			)}
		</Button>
	);
};
