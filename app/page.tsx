import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Pill } from "@/components/Pill";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar name="Sean Sayce" />

      <main className="mx-auto max-w-5xl px-4 pt-24 pb-16">
        {/* HERO */}
          <section id="home" className="mb-24">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">

              {/* Headshot */}
              <div className="shrink-0">
                <Image
                  src="/headshot.jpeg"
                  alt="Portrait of Sean Sayce"
                  width={200}
                  height={200}
                  priority
                  className="rounded-2xl object-cover ring-1 ring-zinc-700"
                />
              </div>

              {/* Text content */}
              <div>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  Sean Sayce
                </h1>

                <p className="mt-4 max-w-2xl text-lg text-zinc-400">
                  Computer Science student with a strong interest in software engineering, focused on building practical, end-to-end systems. Experience includes developing AI-powered applications, data-driven analysis, and full-stack platforms that integrate APIs, databases, and user-facing interfaces, with an emphasis on clean design and maintainable code.
                </p>
              </div>

            </div>
          </section>


        {/* PROJECTS */}
        <Section
          id="projects"
          title="Projects"
          subtitle="These are a list of my passion projects and university projects through the last 4 years."
        >
          <div className="flex flex-col gap-16">
            <ProjectCard
              project={{
                title: "BuffAggie",
                description:
                  "AI-assisted fitness recommendation application that integrates a large language model with structured fitness and location data to deliver personalized workout guidance.",
                tech: [
                  "Python",
                  "Streamlit",
                  "LangChain",
                  "Groq API",
                  "Google Maps API",
                  "SQLite",
                ],
                highlights: [
                  "Implemented LangChain-based intent classification and prompt transformation to convert avoidance-based user inputs into appropriate fitness queries prior to LLM inference",
                  "Integrated LLM-powered natural language responses with external APIs to provide personalized fitness and gym recommendations",
                  "Built a Streamlit-based web interface with persistent user preferences stored in a SQLite database",
                  "Designed an end-to-end AI application pipeline combining prompt engineering, API orchestration, and user-facing UI",
                ],
                links: {
                  code: "https://github.com/jinug0905/CSCE670sp25-BuffAggie",
                  demo: "https://youtu.be/Eq3jTbuDG3g"
                },
                image: "/BuffAggie.png"
              }
              }
            />
            <ProjectCard reverse
              project={{
                title: "BeatSync",
                description:
                  "Cross-platform mobile application that connects to a Bluetooth Low Energy (BLE) peripheral to support guided workouts, session tracking, and user goal management with local data persistence and optional music integration.",
                tech: [
                  "React Native",
                  "TypeScript",
                  "React Navigation",
                  "Bluetooth Low Energy (BLE)",
                  "SQLite",
                  "AsyncStorage",
                  "Redux",
                  "Spotify Web API",
                ],
                highlights: [
                  "Implemented a complete BLE connection workflow, including permission handling, device scanning, selection, and connection management",
                  "Built a multi-screen mobile experience for workout configuration and playback, along with profile, history, statistics, and goals views",
                  "Designed local data persistence using SQLite tables for users, workouts, goals, and session history to enable stateful tracking across app restarts",
                  "Integrated optional Spotify playlist and player components to support workout audio features within the app experience",
                ],
                links: {
                  code: "https://github.com/jdavstaff/483-s24",
                  demo: "https://www.youtube.com/watch?v=F8f1lLm0HfY"
                },
                image: "/BeatSync.png",

              }}
            />
            <ProjectCard
              project={{
                title: "Maroon Health Site",
                description:
                  "Web platform for managing organizational operations, including member authentication, volunteer event scheduling, medication inventory tracking, and internal content pages such as resources, FAQs, and calendar updates.",
                tech: [
                  "Ruby on Rails",
                  "Ruby",
                  "PostgreSQL",
                  "Devise",
                  "Google OAuth (OmniAuth)",
                  "RSpec",
                  "GitHub Actions (CI)",
                  "Docker",
                  "Rubocop",
                  "Brakeman",
                ],
                highlights: [
                  "Implemented secure member authentication with Devise and Google OAuth (OmniAuth), including role-based access patterns (e.g., admin vs volunteer)",
                  "Built event scheduling and volunteer signup flows with persistent shift assignments linked to members and events",
                  "Developed medication inventory management with transaction logging and low-stock visibility to support operational tracking",
                  "Configured automated CI workflows to run RSpec tests and code quality/security checks (Rubocop and Brakeman) on pushes and pull requests",
                ],
                links: {
                  code: "https://github.com/c2003-tamu/maroon-health-site",
                  demo: "https://www.youtube.com/watch?v=CUbbObAK3Uk"
                },
                image: "/MaroonHealth.png"
              }}
            />
            <ProjectCard reverse
              project={{
                title: "Aggie Game Masters",
                description:
                  "AI-powered board game recommendation and tutoring platform that combines retrieval-augmented generation (RAG) with structured game metadata and rulebook parsing to provide personalized recommendations and in-game assistance.",
                tech: [
                  "Python",
                  "FastAPI",
                  "LangChain",
                  "Qdrant",
                  "SQLite",
                  "Streamlit",
                  "Docker",
                  "REST APIs",
                ],
                highlights: [
                  "Implemented a retrieval-augmented generation (RAG) pipeline using vector embeddings and Qdrant to ground LLM responses in board game metadata and rulebook content",
                  "Built multiple FastAPI microservices, including a recommender service and rules engine, to support modular and scalable backend architecture",
                  "Parsed and indexed board game rulebooks to enable context-aware tutoring and rules clarification during gameplay",
                  "Designed an end-to-end system integrating data ingestion, vector search, LLM inference, and user-facing interfaces for interactive recommendations",
                ],
                links: {
                  code: "https://github.com/CatMoth/AggieGameMasters",
                  demo: "https://youtu.be/kUSHsMsmY8w"
                },
                image: "/AGM.png"
              }}
            />
            <ProjectCard
              project={{
                title: "The Alley POS Web App",
                description:
                  "Web-based point-of-sale (POS) and management interface for a boba shop, featuring a styled menu and cart workflow, admin tools for inventory and pricing, and a multi-page UI built with modern HTML/CSS and JavaScript.",
                tech: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React (Create React App)",
                  "Python",
                  "Django",
                  "Django REST Framework",
                  "PostgreSQL",
                ],
                highlights: [
                  "Built a multi-page frontend with React components for core POS flows, including menu browsing, cart management, and checkout-style interactions",
                  "Implemented admin-facing UI screens for inventory management, adding drinks, and updating prices, with consistent styling using custom CSS",
                  "Integrated the frontend with a Django REST API to read and update persistent store data (e.g., menu items and inventory state)",
                  "Added supporting user-facing features such as authentication screens and additional utility views (e.g., trends/analytics-style pages)",
                ],
                links: {
                  code: "https://github.com/csce-315-331-2023c/project-3-csce_331_900_00b-the-alley",
                },
                image: "/TheAlley.png"
              }}
            />

            <ProjectCard reverse
              project={{
                title: "Backwards Pitching Analysis",
                description:
                  "Data-driven analysis of the baseball strategy known as pitching backwards, examining how pitchers deviate from traditional fastball-first sequencing across pitch counts using Statcast data.",
                tech: [
                  "Python",
                  "Pandas",
                  "NumPy",
                  "PyBaseball",
                  "scikit-learn",
                  "Matplotlib",
                  "Seaborn",
                  "Jupyter Notebook",
                ],
                highlights: [
                  "Analyzed MLB Statcast pitch-level data to quantify fastball usage patterns across all standard ball–strike counts",
                  "Engineered features to classify pitch types and filter invalid count states for accurate sequencing analysis",
                  "Applied unsupervised learning techniques, including KMeans clustering and PCA, to identify patterns in pitching strategies",
                  "Developed visualizations comparing conventional pitch selection with backwards pitching tendencies",
                ],
                links: {
                  code: "https://github.com/Sean-Sayce/BackwardsPitching",
                },
                image: "/BackwardsPitch.png"
              }
}
            />
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section
          id="experience"
          title="Experience"
          subtitle="Industry and applied software development"
        >
          <div className="space-y-6">
            <ExperienceItem
              item={{
                role: "Software Engineering Intern",
                org: "KX",
                dates: "Summer 2024",
                bullets: [
                  "Developed automated end-to-end tests for web-based dashboards, reducing reliance on manual user acceptance testing and improving release confidence",
                  "Built and maintained test suites using JavaScript-based testing frameworks to validate data visualization components and interactive workflows",
                  "Collaborated with engineers and product stakeholders in an Agile environment, participating in sprint planning, code reviews, and weekly standups",
                  "Contributed to performance-focused demos and internal tooling showcasing high-throughput data ingestion and system capabilities",
                ],
              }}
            />

            <ExperienceItem
              item={{
                role: "Software Developer",
                org: "Maroon Health",
                dates: "2023 – 2024",
                bullets: [
                  "Developed and maintained a Ruby on Rails web platform supporting internal operations, volunteer coordination, and organizational content management",
                  "Implemented secure authentication and authorization flows using Devise and Google OAuth to manage member access and administrative roles",
                  "Built features for event scheduling, volunteer sign-ups, and inventory tracking backed by a PostgreSQL database",
                  "Collaborated with a student-led engineering team to deploy updates, review code, and ensure application reliability and security",
                ],
              }}
            />
          </div>
        </Section>


        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <div className="flex flex-wrap gap-2">
            <Pill>Python</Pill>
            <Pill>TypeScript</Pill>
            <Pill>JavaScript</Pill>
            <Pill>Java</Pill>
            <Pill>Ruby</Pill>
            <Pill>SQL</Pill>
            <Pill>React</Pill>
            <Pill>Next.js</Pill>
            <Pill>React Native</Pill>
            <Pill>FastAPI</Pill>
            <Pill>Django</Pill>
            <Pill>Ruby on Rails</Pill>
            <Pill>LangChain</Pill>
            <Pill>PostgreSQL</Pill>
            <Pill>SQLite</Pill>
            <Pill>Qdrant</Pill>
            <Pill>Docker</Pill>
            <Pill>GitHub Actions</Pill>
            <Pill>REST APIs</Pill>
            <Pill>OAuth</Pill>
            <Pill>Pandas</Pill>
            <Pill>NumPy</Pill>
            <Pill>scikit-learn</Pill>
            <Pill>Matplotlib</Pill>
            <Pill>Git</Pill>
          </div>
        </Section>


        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <div className="space-y-2 text-[color:var(--text-muted)]">
            {/* Email (Gmail) */}
            <p>
              Email:{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=seansayce@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-[color:var(--accent)] hover:text-[color:var(--accent)] transition"
              >
                seansayce@gmail.com
              </a>
            </p>

            {/* LinkedIn */}
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/sean-sayce-056117262"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-[color:var(--accent)] hover:text-[color:var(--accent)] transition"
              >
                linkedin.com/in/sean-sayce
              </a>
            </p>

            {/* Phone */}
            <p>
              Phone:{" "}
              <a
                href="tel:+15129224767"
                className="underline underline-offset-4 decoration-[color:var(--accent)] hover:text-[color:var(--accent)] transition"
              >
                +1 (512) 922-4767
              </a>
            </p>
          </div>
        </Section>


      </main>

      <Footer name="Sean Sayce" />
    </>
  );
}
