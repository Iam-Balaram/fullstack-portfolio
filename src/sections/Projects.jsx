import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "🛒 Full Stack E-Commerce Platform",
    description:
      "A production-ready MERN e-commerce application with authentication, cart system, and multi-payment integration (Razorpay, Stripe, COD). Includes admin panel for product and order management.",
    image: "/projects/Ecommerce-App.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Razorpay"],
    link: "https://ecommerce-app-frontend-ten-lyart.vercel.app/",
    github: "https://github.com/Iam-Balaram/Ecommerce-App",
  },
  {
    title: "🌐 Streamify – Chat & Video Platform",
    description:
      "A real-time communication platform with chat, video calling, and friend system. Built using MERN stack and Stream SDK with JWT authentication and responsive UI.",
    image: "/projects/streamify-video-call-app.png",
    tags: ["React", "Node.js", "MongoDB", "Stream API", "JWT"],
    link: "https://streamify-video-call-app.onrender.com",
    github: "https://github.com/Iam-Balaram/streamify-video-call-app",
  },
  {
    title: "🍐 Pear Media AI Studio",
    description:
      "An AI-powered creative tool supporting text-to-image and image-to-image workflows using OpenAI and Gemini APIs with human-in-the-loop prompt editing.",
    image: "/projects/Pear-Media-Ai.png",
    tags: ["React", "OpenAI", "Gemini", "DALL-E", "AI"],
    link: "https://pear-media-ai.vercel.app/",
    github: "https://github.com/balarammukhi245-create/Pear-Media-Ai",
  },
  {
    title: "📺 NxtWatch – YouTube Clone",
    description:
      "A React-based YouTube clone with authentication, protected routes, video browsing, and saved videos functionality.",
    image: "/projects/NxtWatch_YoutubeClone.png",
    tags: ["React", "REST API", "Auth", "Responsive UI"],
    link: "https://nxtwatchbalaram.ccbp.tech/",
    github: "https://github.com/Iam-Balaram/NxtWatch_YoutubeClone",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
