import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    { title: "E-commerce Moderno", desc: "Plataforma completa de vendas online com React e API REST." },
    { title: "Aplicativo Mobile Híbrido", desc: "App usando React Native para iOS e Android." },
    { title: "Dashboard de Vendas", desc: "Visualização de dados em tempo real com Hooks e ChartJS." },
    { title: "Blog Tech", desc: "Blog responsivo usando Vite + TailwindCSS." },
  ];

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Projetos</h1>
      <p className="text-gray-700 mb-8">
        Uma seleção de projetos que demonstram minhas habilidades técnicas e criatividade.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} desc={p.desc} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
