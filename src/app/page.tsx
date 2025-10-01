export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
        Hi, I’m Falak 👋
      </h2>
      <p className="text-lg text-purple-700 max-w-xl">
        A creative web developer focused on building modern, stylish and
        user-friendly websites with clean code.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="/projects"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-500 text-white shadow hover:opacity-90 transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-5 py-2 rounded-lg border border-purple-400 text-purple-600 hover:bg-purple-50 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
