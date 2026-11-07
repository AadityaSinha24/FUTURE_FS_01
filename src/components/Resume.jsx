function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-950 text-white"
    >
      <div className="max-w-3xl w-full text-center">
        {/* <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm mb-3">
          My Resume
        </p> */}

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Professional <span className="text-blue-500">Experience</span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Explore my educational background, technical skills, projects,
          internship experience, and achievements.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/resume/RESUME_2_AADITYA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-300 flex items-center gap-2"
          >
            <i className="ri-eye-line"></i>
            View Resume
          </a>

          <a
            href="/resume/RESUME_2_AADITYA.pdf"
            download="RESUME_2_AADITYA.pdf"
            className="px-7 py-3 border border-gray-600 hover:border-blue-500 hover:text-blue-500 rounded-lg font-semibold transition duration-300 flex items-center gap-2"
          >
            <i className="ri-download-line"></i>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;