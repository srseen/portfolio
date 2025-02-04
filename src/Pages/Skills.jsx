import skillsData from "../Data/skilldata";

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
