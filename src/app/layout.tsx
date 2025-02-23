import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Développeuse Web Freelance - Sites et Applications sur Mesure',
	description:
		"Développeuse web spécialisée dans la création de sites internet et d'applications sur mesure.",
	keywords:
		'développeuse web, site internet, application web, freelance, solutions digitales, SEO, performance, France',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background">
					Aller au contenu principal
				</a>
				<Header />
				<main
					id="main-content"
					className="max-w-[1200px] mx-auto">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
