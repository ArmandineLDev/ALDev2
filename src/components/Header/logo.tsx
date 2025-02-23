import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => (
	<Link
		href="/"
		className="flex items-center space-x-2"
		aria-label="Retour à l'accueil">
		<Image
			src="/images/logo.png"
			alt="Logo ArmandineLDev"
			width={40}
			height={40}
			className="inline-block transition-transform duration-300 hover:rotate-6"
		/>
		<span className="text-xl font-bold text-light hover:underline transition">
			ArmandineLDev
		</span>
	</Link>
);
