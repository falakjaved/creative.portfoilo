export default function Contact() {
  return (
    <section className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Contact Me</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full border p-3 rounded focus:ring-2 focus:ring-purple-400"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
