import profilePic from "./assets/Aditi_pfp.jpeg";
export default function Portfolio() {
  const projects = [
    {
      title: "VetAId",
      description:
        "Machine learning based animal disease prediction system that analyzes uploaded images and predicts possible diseases.",
      tech: ["Python", "Machine Learning", "React"],
    },
    {
      title: "PCOS Planner App",
      description:
        "UX-focused planner application designed specifically for individuals managing PCOS.",
      tech: ["Figma", "UX Research", "UI Design"],
    },
    {
      title: "Cosmetic Website",
      description:
        "Responsive e-commerce frontend built using React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
    },
  ];

  const skills = [
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "SQL",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "Figma",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#210635] via-[#420D4B] to-[#7B337E] text-[#F5D5E0] px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center py-10">
          <div>
            <p className="uppercase tracking-[6px] text-sm text-[#d8bfd2] mb-3">
              Portfolio
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-5">
              Hi, I'm <span className="text-[#F5D5E0]">Aditi Gunapal</span>
            </h1>

            <p className="text-[#d8bfd2] text-lg leading-8 max-w-xl">
              Final year Information Science Engineering student passionate
              about full stack development, UI/UX design, and building useful
              real-world applications.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href="#projects"
                className="bg-[#F5D5E0] text-[#420D4B] px-6 py-3 rounded-2xl font-medium hover:scale-105 hover:bg-[#e8bfd0] transition duration-300 shadow-xl"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-[#6667AB] text-[#F5D5E0] px-6 py-3 rounded-2xl hover:bg-[#ffffff10] transition duration-300 backdrop-blur-sm"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-[30px] bg-gradient-to-br from-[#6667AB] to-[#7B337E] flex items-center justify-center shadow-[0_10px_50px_rgba(0,0,0,0.4)] border border-[#ffffff20] backdrop-blur-md">
            <img
  src={profilePic}
  alt="Aditi"
  className="w-full h-full object-cover rounded-[30px]"
/>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 border-t border-[#ffffff15]">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-[#d8bfd2] leading-8 max-w-4xl text-lg">
            I am currently pursuing Information Science Engineering in Bangalore.
            I enjoy creating clean user interfaces and learning backend
            technologies. I have worked on projects involving machine learning,
            React development, and user experience design.
          </p>
        </section>

        {/* Skills */}
        <section className="py-16 border-t border-[#ffffff15]">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-2xl bg-[#ffffff10] border border-[#ffffff15] hover:border-[#F5D5E0] backdrop-blur-md transition duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 border-t border-[#ffffff15]">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#ffffff10] border border-[#ffffff15] backdrop-blur-lg shadow-xl rounded-3xl p-6 hover:-translate-y-2 transition duration-300"
              >
                <div className="h-40 rounded-2xl bg-gradient-to-br from-[#6667AB] via-[#7B337E] to-[#420D4B] mb-6"></div>

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-[#d8bfd2] leading-7 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full bg-[#ffffff10] border border-[#ffffff15] text-[#F5D5E0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="py-16 border-t border-[#ffffff15]">
          <h2 className="text-3xl font-bold mb-8">Education</h2>

          <div className="bg-[#ffffff10] border border-[#ffffff15] backdrop-blur-lg shadow-xl rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-2">
              Bachelor of Engineering – Information Science
            </h3>

            <p className="text-[#d8bfd2] text-lg">
              Final Year Student • Bangalore, Karnataka
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-16 border-t border-[#ffffff15]"
        >
          <h2 className="text-3xl font-bold mb-8">Contact</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#ffffff10] rounded-3xl p-6 border border-[#ffffff15] backdrop-blur-lg">
  <p className="text-[#d8bfd2] mb-2">Email</p>

  <a
    href="mailto:aditi.gunapal@gmail.com"
    className="text-lg hover:text-[#F5D5E0] transition"
  >
    aditi.gunapal@gmail.com
  </a>
</div>

            <div className="bg-[#ffffff10] rounded-3xl p-6 border border-[#ffffff15] backdrop-blur-lg">
  <p className="text-[#d8bfd2] mb-2">LinkedIn</p>

  <a
    href="https://linkedin.com/in/yourname"
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg hover:text-[#F5D5E0] transition"
  >
    https://www.linkedin.com/in/aditi-gunapal/
  </a>
</div>

            <div className="bg-[#ffffff10] rounded-3xl p-6 border border-[#ffffff15] backdrop-blur-lg">
              <p className="text-[#d8bfd2] mb-2">GitHub</p>
              <p className="text-lg">github.com/yourname</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
