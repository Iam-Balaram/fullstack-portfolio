import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building end-to-end applications using React, Node.js, Express, and MongoDB.",
  },
  {
    icon: Rocket,
    title: "Real Projects",
    description:
      "Developed chat apps, video calling platforms, and full-stack CRUD systems.",
  },
  {
    icon: Users,
    title: "Team Experience",
    description:
      "Worked in a startup environment during internship, collaborating remotely.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Actively improving skills in MERN stack, APIs, and system design.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building real-world,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm an aspiring Software Engineer with hands-on experience in
                building full-stack web applications using the MERN stack. My
                journey started during my engineering studies, where I developed
                a strong interest in how modern web applications work.
              </p>
              <p>
                I specialize in JavaScript, React, Node.js, and MongoDB, and
                have built real-world projects including a chat and video
                calling application, a YouTube clone, and a social media
                platform. I enjoy working on both frontend and backend, focusing
                on clean UI and scalable APIs.
              </p>
              <p>
                During my internship, I gained practical experience developing
                responsive applications, building REST APIs, and working with
                databases. I'm actively improving my skills and looking for
                opportunities to contribute to real-world development teams.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I focus on building real-world applications that solve
                problems, improve user experience, and strengthen my skills as a
                full-stack developer."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
