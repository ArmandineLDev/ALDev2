import type { Metadata } from "next";
import { Chakra_Petch, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import {Footer} from "@/components/footer";
import {ThemeProvider} from "next-themes";

const chakraPetch = Chakra_Petch({
    subsets: ["latin"],
    weight: ["400","600","700"],
    variable: "--font-chakra",
});

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400","500","700"],
    variable: "--font-quicksand",
});
export const metadata: Metadata = {
    title: "Développeuse Web Freelance - Sites et Applications sur Mesure",
    description:
        "Développeuse web spécialisée dans la création de sites internet et d’applications sur mesure.",
    keywords:
        "développeuse web, site internet, application web, freelance, solutions digitales, SEO, performance, France",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <div suppressHydrationWarning={true}>
      <Header />
      <main className="max-w-[1200px] mx-auto">{children}</main>

      <Footer />
      </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
