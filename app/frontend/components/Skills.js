export default function Skills ({ skills, accentColor }) {
  return (
    <section id="skills" className="p-8 md:p-16 bg-darkBg text-lightText">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-lightText" style={{ color: accentColor }}>My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-darkCard p-6 rounded-lg shadow-md border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-4" style={{ borderColor: accentColor }}>
            <div className="flex-shrink-0" style={{ color: accentColor }}>{skill.icon}</div>
            <h3 className="font-semibold text-xl text-lightText">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};