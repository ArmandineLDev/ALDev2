"use client";

import {Button} from "@/components/ui/button";

export const Footer = () => {
    return(<footer className="bg-primary text-white py-10 text-sm">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">


            <div>
                <h3 className="text-lg font-semibold mb-3">Plan du site</h3>
                <ul className="space-y-2">
                    <li><a href="/" className="text-light hover:text-secondary">Accueil</a></li>
                    <li><a href="/solutions-digitales" className="text-light hover:text-secondary">Solutions
                        digitales</a></li>
                    <li><a href="/a-propos" className="text-light hover:text-secondary">À propos</a></li>
                    <li><a href="/contact" className="text-light hover:text-secondary">Contact</a></li>
                    <li><a href="/mentions-legales" className="text-light hover:text-secondary">Mentions légales</a>
                    </li>
                </ul>
            </div>


            <div>
                <h3 className="text-lg font-semibold mb-3">Suivez-moi</h3>
                <div className="flex space-x-4">
                    <Button size="icon"><a href="https://www.facebook.com/armandineldev" target="_blank" rel="noopener noreferrer">
                        <img src="/images/icons/facebook-icon.svg" alt="Facebook"
                             className="w-6 h-6 text-light hover:opacity-80"/>
                    </a></Button>
<Button size="icon">
                    <a href="https://www.instagram.com/armandineldev/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/icons/instagram-icon.svg" alt="Instagram"
                             className="w-6 h-6 text-light hover:opacity-80"/>
                    </a></Button>
                    <Button size="icon">
                    <a href="https://github.com/ArmandineLDev" target="_blank" rel="noopener noreferrer">
                        <img src="/images/icons/github-icon.svg" alt="GitHub" className="w-6 h-6 text-light hover:opacity-80"/>
                    </a></Button>
                    <Button size="icon">
                    <a href="https://www.linkedin.com/in/armandine-barge-developpeur-javascript/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/icons/linkedin-icon.svg" alt="LinkedIn"
                             className="w-6 h-6 text-light hover:opacity-80"/>
                    </a></Button>
                </div>
            </div>


            <div>
                <h3 className="text-lg font-semibold mb-3">Contact</h3>
                <p><strong>Armandine BARGE</strong></p>
                <p>tel: <a className="text-light" href="tel:+33617417794">+33 6-17-41-77-94</a></p>
                <p>courriel:
                    <a className="text-light" href="mailto:info&#64;armandinebarge&#46;com">
                        info&#64;armandinebarge&#46;com
                    </a>
                </p>
            </div>
        </div>


        <div className="mt-4 text-center">
            <h3 className="text-sm font-semibold mb-3">Création de sites internet et applications</h3>
            <p className="text-xs leading-relaxed opacity-90">
                Spécialiste en <strong>développement web sur mesure</strong>, je conçois des solutions adaptées aux
                <strong>entreprises, indépendants et artisans</strong>. Basée en <strong>Haute Vallée de l’Aude</strong>,
                je travaille localement à <strong>Limoux, Quillan, Carcassonne</strong>, mais aussi dans toute la
                <strong>France</strong>. Faites rayonner votre activité en ligne avec un site performant et optimisé SEO
                !
            </p>
        </div>
        <div className="mt-10 text-center border-t border-white/20 pt-4">
            <p>
                © 2022-2025 Armandine Barge – Tous droits réservés. -
                <a href="/mentions-legales" className="text-secondary-foreground hover:underlined hover:font-bold"> Mentions légales</a>
            </p>
        </div>
    </footer>)
}