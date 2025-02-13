import Link from "next/link";

interface ButtonProps {
    href: string;
    label: string;
    className?: string; // Optionnel, permet de personnaliser le style
}

const CustomButton: React.FC<ButtonProps> = ({ href, label, className = "" }) => {
    return (
        <Link
            href={href}
            className={`px-4 py-2 bg-secondary text-light rounded font-bold transition-transform transform hover:scale-105 hover:bg-accent hover:text-accent-foreground ${className}`}
        >
            {label}
        </Link>
    );
};

export default CustomButton;