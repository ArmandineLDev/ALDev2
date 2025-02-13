This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
/mon-projet-nextjs
│
├── public/                         # Assets accessibles directement (images, favicons, etc.)
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-banner.webp
│   ├── favicon.ico
│
├── app/                             # App Router (Next.js 13+)
│   ├── layout.tsx                   # Layout global (ex: header/footer)
│   ├── page.tsx                     # Page d'accueil (server component)
│   ├── home-metadata.ts             # Metadata de la page d'accueil (si `use client` dans page.tsx)
│   ├── error.tsx                    # Gestion des erreurs globales
│   ├── loading.tsx                  # Indicateur de chargement global
│   ├── not-found.tsx                 # Page 404
│   │
│   ├── contact/                      # Route `/contact`
│   │   ├── page.tsx                  # Page de contact
│   │   ├── layout.tsx                # Layout spécifique à la page contact
│   │   ├── contact-metadata.ts       # Metadata spécifique à la page contact
│   │   ├── error.tsx                 # Gestion des erreurs pour /contact
│   │
│   ├── services/                     # Route `/services`
│   │   ├── page.tsx                  # Page des services
│   │   ├── layout.tsx                # Layout spécifique aux services
│   │   ├── service-card.tsx          # Composant spécifique à cette route
│   │
│   ├── blog/                         # Route `/blog`
│   │   ├── page.tsx                  # Liste des articles
│   │   ├── [slug]/                   # Route dynamique `/blog/:slug`
│   │   │   ├── page.tsx              # Affichage d'un article
│   │   │   ├── loading.tsx           # Indicateur de chargement pour un article
│   │
│   ├── dashboard/                    # Route `/dashboard` (protégée)
│   │   ├── layout.tsx                # Layout spécifique (ex: sidebar)
│   │   ├── page.tsx                  # Dashboard principal
│   │   ├── settings/                 # Sous-route `/dashboard/settings`
│   │   │   ├── page.tsx              # Paramètres utilisateur
│   │   │   ├── route.ts              # API Route pour modifier les paramètres
│   │
│   ├── api/                          # API Routes (Server Functions)
│   │   ├── contact/                  # API `/api/contact`
│   │   │   ├── route.ts              # Endpoint POST pour formulaire de contact
│   │   ├── auth/                     # API `/api/auth`
│   │   │   ├── login.ts              # Endpoint pour login
│   │   │   ├── logout.ts             # Endpoint pour logout
│   │
├── components/                       # Composants réutilisables
│   ├── ui/                           # Composants UI (ShadCN, Tailwind, etc.)
│   │   ├── button.tsx                # Bouton générique
│   │   ├── card.tsx                  # Carte générique
│   │   ├── modal.tsx                 # Modal
│   ├── layout/                       # Composants de layout
│   │   ├── header.tsx                # Barre de navigation
│   │   ├── footer.tsx                # Pied de page
│   │   ├── sidebar.tsx               # Sidebar pour le dashboard
│   ├── cards/                        # Cartes spécifiques
│   │   ├── service-card.tsx          # Carte pour les services
│   │   ├── project-card.tsx          # Carte pour les projets
│
├── lib/                              # Helpers et utils (code réutilisable)
│   ├── api.ts                        # Fetcher pour les appels API
│   ├── auth.ts                        # Gestion de l'authentification
│   ├── format.ts                      # Fonctions utilitaires (dates, formats, etc.)
│
├── styles/                           # Fichiers CSS/SCSS globaux
│   ├── globals.css                    # Styles globaux (si pas Tailwind)
│   ├── theme.css                      # Définition des couleurs et styles
│
├── middleware.ts                      # Middleware Next.js (auth, logs, etc.)
├── tailwind.config.js                  # Configuration TailwindCSS
├── next.config.js                      # Configuration Next.js
├── tsconfig.json                       # Configuration TypeScript
├── package.json                        # Dépendances du projet
├── README.md                           # Documentation du projet
