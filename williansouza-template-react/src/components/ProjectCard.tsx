import React from "react";

type ProjectProps = {
  title: string;
  desc: string;
  image?: string;
  link?: string;
};

const ProjectCard: React.FC<ProjectProps> = ({ title, desc, image, link }) => {
  return (
    <div className="card border rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      {/* Imagem do projeto */}
      {image && (<img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4"/>)}
      {/* Título */}
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      {/* Descrição */}
      <p className="text-sm text-gray-600 mb-4">{desc}</p>
      {/* Link */}
      {link && (<a href={link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
        Ver projeto
      </a>
      )}
    </div>
  );
};

export default ProjectCard;
