type ProjectCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
};

const ProjectCard = ({
  image,
  alt,
  title,
  description,
  link,
  tags = [],
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <img src={image} alt={alt} />
      <div className="content">
        <div>
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-medium"
          >
            Ver Projeto
          </a>
        </div>
        <div className="tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
