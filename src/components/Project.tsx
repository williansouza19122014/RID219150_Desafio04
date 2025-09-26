import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

type Project = {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
};

const Project = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects([
        {
          image: "/Desafio01.jpg",
          alt: "Projeto Desafio 01",
          title: "Landin Page",
          description:
            "Criação de uma Ladin Page, com a funcionalidade de cadastro de usuario e API publica.",
          link: "https://rid219150desafio1.netlify.app/",
          tags: ["HTML", "CSS"],
        },
        {
          image: "/Desafio02.jpeg",
          alt: "Projeto Desafio 02",
          title: "The Dev News",
          description:
            "Criação de um site, utilizando HTML e CSS puro, para treinar meus conhecimentos e desenvolver habilidades, omaio desafio foi construir um menu lateral responsivo.",
          link: "https://extraordinary-caramel-1fb765.netlify.app/",
          tags: ["javascript", "html", "css"],
        },
        {
          image: "/Desafio03.jpeg",
          alt: "Projeto Desafio 03",
          title: "Contador de Tarefas (CheckList)",
          description:
            "Mini ferramenta para organização de tarefas, com a funcionalidade de adicionar e remover tarefas.",
          link: "https://contador-de-tarefas.netlify.app/",
          tags: ["javascript", "html", "css"],
        },
        {
          image: "/Desafio03.jpeg",
          alt: "Projeto Extra",
          title: "Contador de Tarefas (CheckList)",
          description:
            "Mini ferramenta para organização de tarefas, com a funcionalidade de adicionar e remover tarefas.",
          link: "https://contador-de-tarefas.netlify.app/",
          tags: ["javascript", "html", "css"],
        },
      ]);
    }, 1000); // simula 1 segundo de "carregando"

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projetos" className="projects">
      <h2 className="section-title right">Projetos</h2>
      <div className="projects-grid">
        {projects.length === 0 ? (
          <p>Carregando projetos...</p>
        ) : (
          projects.map((p, idx) => <ProjectCard key={idx} {...p} />)
        )}
      </div>
    </section>
  );
};

export default Project;
