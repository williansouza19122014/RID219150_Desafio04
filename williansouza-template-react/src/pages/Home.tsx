import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
const [projects, setProjects] = useState<
  { title: string; desc: string; image?: string; link?: string }[]
>([]);

  useEffect(() => {
    // Simula um fetch de projetos
    setTimeout(() => {
      setProjects([
        {
          image: "/Desafio01.jpg",
          title: "Landing Page Desafio 1",
          desc: "Landing page, com HTML E CSS",
          link: "https://rid219150desafio1.netlify.app/"
        },
        {
          image: "/Desafio02.jpg",
          title: "The Dev News",
          desc: "Site responsivo ",
          link: "https://extraordinary-caramel-1fb765.netlify.app/"
        },
        {
          image: "/Desafio03.jpg",
          title: "Contador de Tarefas",
          desc: "Ferramenta para contar tarefas",
          link: "https://contador-de-tarefas.netlify.app/"
        },
        {
          image: "/Desafio03.jpg",
          title: "Contador de Tarefas",
          desc: "Ferramenta para contar tarefas",
          link: "https://contador-de-tarefas.netlify.app/"
        }
      ]);
    }, 1000);
  }, []);

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Projetos</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} desc={p.desc} link={p.link} />
        ))}
      </div>
    </section>
  );
};

export default Home;
