import { useEffect, useState } from "react";

const SkillsList = () => {
  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkills(["React", "TypeScript", "Node.js", "TailwindCSS", "Vite"]);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Habilidades</h3>
      {skills.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <ul className="grid grid-cols-2 gap-3">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              className="px-3 py-1 border rounded-full text-center bg-gray-50 hover:bg-blue-100 transition"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SkillsList;
