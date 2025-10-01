const projects = [
  {
    title: "Creative Portfolio",
    description: "A colorful and modern portfolio design with gradient effects.",
  },
  {
    title: "E-commerce Store",
    description: "An online shop with cart, checkout and responsive design.",
  },
  {
    title: "Blog Website",
    description: "A clean blog platform with Markdown and CMS integration.",
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition bg-white/70 backdrop-blur"
          >
            <h3 className="text-xl font-semibold text-purple-600">{p.title}</h3>
            <p className="text-purple-600 mt-2">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
