const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", description: "Markup language for creating web pages" },
      {
        name: "CSS",
        description: "Style sheet language for designing web pages",
      },
      {
        name: "JavaScript",
        description: "Programming language for web development",
      },
      {
        name: "React",
        description: "JavaScript library for building user interfaces",
      },
      {
        name: "Redux",
        description: "State management library for JavaScript apps",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        description: "JavaScript runtime for server-side programming",
      },
      { name: "Express", description: "Web application framework for Node.js" },
      {
        name: "MongoDB",
        description: "NoSQL database for modern applications",
      },
      {
        name: "SQL",
        description: "Language for managing relational databases",
      },
      {
        name: "REST APIs",
        description: "Architectural style for designing networked applications",
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="max-w-full max-h-full">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
          Skills
        </h1>
        {skillsData.map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-blue-500">
              {category.category}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="mb-1">
                  <span className="font-bold">{skill.name}</span>:{" "}
                  {skill.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
