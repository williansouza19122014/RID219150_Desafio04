import SkillsList from "../components/SkillsList";
import ContactForm from "../components/ContactForm";

const About = () => {
  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
      <p className="text-gray-700 mb-6">
        Sou um desenvolvedor apaixonado por criar interfaces atraentes e funcionais.
        Tenho experiência com React, TypeScript e ferramentas modernas de front-end.
        Meu objetivo é ajudar empresas e empreendedores a transformar ideias em produtos digitais incríveis.
      </p>

      <SkillsList />

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Entre em Contato</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default About;
