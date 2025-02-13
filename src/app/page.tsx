import Image from "next/image";
import CustomCard from "@/components/custom-card"; // Assurez-vous que le chemin est correct !

import { features } from "@/datas/features";
//import { projects } from "@/datas/projects";

import CustomButton from "@/components/custom-button";
import {Button} from "@/components/ui/button";

//const selectedProjects = projects.slice(0, 3);



export default function HomePage() {
  return (
      <>
        {/* Section Hero */}
        <section className="section bg-gradient-to-r from-secondary to-primary text-background text-center py-10">
          <div className="max-w-4xl flex flex-col mx-auto gap-6  mt-8">
            {/* Image */}
            <Image
                src="/images/hero-img.webp"
                width={700}
                height={350}
                alt="Développeuse web Armandine Barge"
                className="w-full max-w-[350px] h-auto rounded-lg shadow-lg object-cover mx-auto mt-2"
            />

            {/* Titre principal */}
            <h1 className="text-4xl font-bold leading-tight">
              Donnez vie à vos idées <br />
              avec un site web{" "}
              <span className="text-secondary">sur mesure</span>
            </h1>

            {/* Sous-titre */}
            <h2 className="text-xl font-medium text-background mb-2">
              Je suis Armandine Barge, développeuse web freelance.
            </h2>

            {/* Texte condensé */}
            <p className="fontFamily-body text-base leading-relaxed">
              Que vous soyez coach, graphiste ou entrepreneur·e, je conçois avec vous des
              sites performants, éco-responsables et optimisés pour le SEO.
              Ensemble, faisons rayonner votre activité en ligne avec des
              solutions numériques pensées pour vous.
            </p>

            {/* Bouton principal */}
            <Button variant="hero" size="lg"><a href="/contact">Contactez-moi</a> </Button>

          </div>
        </section>

        {/* Section Services */}
        <section className="section">
          <h2 >Je vous propose</h2>
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {features.map((feature) => (
                <CustomCard title={feature.title}
              subtitle={feature.subtitle}
              paragraphs={feature.paragraphs}
              lists={feature.lists}
              benefits={feature.benefits}
              price={feature.price}
              cta={feature.cta} key={feature.title} />
            ))}
          </div>
        </section>

        {/* Section Pourquoi travailler avec moi ? */}
        <section className="bg-light py-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Pourquoi travailler avec moi ?
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "🌍 Éco-responsabilité",
                  description: "Des solutions numériques respectueuses de l'environnement.",
                },
                {
                  title: "🚀 SEO performant",
                  description: "Vos sites optimisés pour vous positionner en tête des résultats Google.",
                },
                {
                  title: "💡 Design sur-mesure",
                  description: "Un site qui reflète votre image et votre activité.",
                },
                {
                  title: "🛠 Support technique",
                  description: "Un accompagnement de qualité même après la mise en ligne.",
                },
                {
                  title: "❤️ Collaboration personnalisée",
                  description: "J'écoute vos besoins pour des solutions uniques.",
                },
              ].map((item, index) => (
                  <li key={index} className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                    <p className="text-sm text-text">{item.description}</p>
                  </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section Processus de création */}
        <section className="bg-gray-100 py-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Mon processus de création
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "1. Découverte",
                  description: "Échange pour comprendre vos besoins et objectifs.",
                },
                {
                  title: "2. Conception",
                  description: "Design du site avec un prototype personnalisé.",
                },
                {
                  title: "3. Développement",
                  description: "Mise en ligne d’un site performant et sécurisé.",
                },
              ].map((step, index) => (
                  <div key={index} className="p-6 bg-white shadow-md rounded-lg">
                    <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                    <p className="text-sm text-text">{step.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-light text-background">
              Prêt à donner vie à votre site ?
            </h2>
            <p className="text-lg pb-8">
              Contactez-moi pour discuter de vos idées et créer un site qui fait
              rayonner votre activité.
            </p>

            <Button variant="hero" size="lg"><a href="/contact">Contactez-moi</a> </Button>
          </div>
        </section>
      </>
  );
}