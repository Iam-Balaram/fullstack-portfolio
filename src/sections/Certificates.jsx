import { ChevronLeft, ChevronRight, ExternalLink, Award } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    title: "Build Your Own Static Website",
    technologies: ["HTML", "CSS", "Bootstrap"],
    issueDate: "July 23, 2024",
    verifyUrl:
      "https://certificates.ccbp.in/intensive/static-website?id=DPRAWCXTMJ",
    src: "/certificates/build_your_static_website_page-0001.jpg",
    color: "#E44D26", // HTML orange
    badge: "HTML · CSS · Bootstrap",
  },
  {
    title: "Build Your Own Responsive Website",
    technologies: ["Bootstrap", "Flexbox"],
    issueDate: "August 14, 2024",
    verifyUrl:
      "https://certificates.ccbp.in/intensive/responsive-website?id=VCPAUIXAOZ",
    src: "/certificates/build_your_responsive_website_page-0001.jpg",
    color: "#7952B3", // Bootstrap purple
    badge: "Bootstrap · Flexbox",
  },
  {
    title: "Introduction to Databases",
    technologies: ["SQL"],
    issueDate: "November 17, 2024",
    verifyUrl:
      "https://certificates.ccbp.in/intensive/introduction-to-databases?id=LQXHXXRJJQ",
    src: "/certificates/intro_duction_of_database_page-0001.jpg",
    color: "#00758F", // SQL teal
    badge: "SQL",
  },
  {
    title: "Programming Foundations with Python",
    technologies: ["Python"],
    issueDate: "January 12, 2025",
    verifyUrl:
      "https://certificates.ccbp.in/intensive/programming-foundations?id=PZBNUEIYAV",
    src: "/certificates/python_foundation_cretificate_page-0001.jpg",
    color: "#3776AB", // Python blue
    badge: "Python",
  },
  {
    title: "Build Your Own Dynamic Web Application",
    technologies: ["JavaScript"],
    issueDate: "March 07, 2025",
    verifyUrl:
      "https://certificates.ccbp.in/intensive/dynamic-web-application?id=YHQZFWTTFC",
    src: "/certificates/build_your_dynamic_web_certificate_page-0001.jpg",
    color: "#F7DF1E", // JS yellow
    badge: "JavaScript",
  },
  {
    title: "Developer Foundations",
    technologies: ["Git", "Command Line"],
    issueDate: "March 23, 2025",
    verifyUrl:
      "https://certificates.ccbp.in/intensive/developer-foundations?id=XTUXELHIAN",
    src: "/certificates/developer_foundation_certificate_page-0001.jpg",
    color: "#F05032", // Git orange-red
    badge: "Git · Command Line",
  },
  {
    title: "JavaScript Essentials",
    technologies: ["JavaScript"],
    issueDate: "April 12, 2025",
    verifyUrl:
      "https://certificates.ccbp.in/intensive/javascript-essentials?id=OYJVRNFVWY",
    src: "/certificates/Js_esential_certificate_page-0001.jpg",
    color: "#F7DF1E",
    badge: "JavaScript",
  },
  {
    title: "Responsive Web Design Using Flexbox",
    technologies: ["Flexbox"],
    issueDate: "May 18, 2025",
    verifyUrl: "https://certificates.ccbp.in/intensive/flexbox?id=DWJYNYSYKW",
    src: "/certificates/Responsive_Web_Design_using_Flexbox_certificate_page-0001.jpg",
    color: "#264DE4", // CSS blue
    badge: "Flexbox",
  },
];

export const Certificates = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % certificates.length);
  const previous = () =>
    setActiveIdx(
      (prev) => (prev - 1 + certificates.length) % certificates.length,
    );

  const cert = certificates[activeIdx];

  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5
          rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            NxtWave Certified
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in
              animation-delay-100 text-secondary-foreground"
          >
            Verified{" "}
            <span className="font-serif italic font-normal text-white">
              achievements.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Certifications earned through NxtWave's intensive program — designed
            by alumni from Stanford, Google, IIT, Amazon, and Microsoft.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Certificate Card */}
            <div
              key={activeIdx}
              className="glass rounded-3xl overflow-hidden glow-border animate-fade-in"
            >
              {/* Certificate image */}
              <div className="relative w-full bg-white/5">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full object-contain max-h-[420px]"
                  onError={(e) => {
                    // Fallback placeholder when local image isn't found yet
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback placeholder */}
                <div
                  className="w-full h-64 items-center justify-center flex-col gap-3"
                  style={{ display: "none" }}
                >
                  <Award className="w-16 h-16" style={{ color: cert.color }} />
                  <p className="text-muted-foreground text-sm">
                    Add image to{" "}
                    <code className="text-xs bg-white/10 px-1 rounded">
                      public/certificates/
                    </code>
                  </p>
                </div>

                {/* Badge overlay */}
                <span
                  className="absolute top-4 right-4 text-xs font-semibold px-3 py-1
                    rounded-full backdrop-blur-sm"
                  style={{
                    background: cert.color + "33",
                    color: cert.color,
                    border: `1px solid ${cert.color}55`,
                  }}
                >
                  {cert.badge}
                </span>
              </div>

              {/* Footer info */}
              <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Issued {cert.issueDate} &nbsp;·&nbsp; NxtWave Intensive
                  </p>
                </div>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl
                    glass hover:bg-primary/10 hover:text-primary transition-all shrink-0"
                >
                  Verify <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={previous}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Previous certificate"
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {certificates.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`Go to certificate ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Next certificate"
              >
                <ChevronRight />
              </button>
            </div>

            {/* Counter */}
            <p className="text-center text-sm text-muted-foreground mt-4">
              {activeIdx + 1} / {certificates.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
